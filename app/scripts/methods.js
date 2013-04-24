var clydeli = clydeli || {};

clydeli.Core = (function(){

	var
		// Portofolio collapse/expand functions
		collapsePortfolio = function(p_id){
			var selector = (p_id === undefined)? '.portfolio':'#p_id_'+p_id;
			$(selector).removeClass('p_expanded');
			self.document.location.hash = "!p=portfolio"; // temporary hack for resetting hash
		},

		expandPortfolio = function(p_id){
			this.collapsePortfolio();
			$('#p_id_'+p_id).addClass('p_expanded');
			//$('#portfolio_tags_cloud').after($('#p_id_'+p_id)); // if move to first
			// fadeIn effect
			$('.portfolio').hide();
			$('#p_id_'+p_id).fadeIn("slow");
			$('#portfolio_tags_cloud').css("margin-bottom", 0);
		},

		// Portofolio filter/refresh functions
		filterPortfolioTags = function(tag_name){
			var is_checked = clydeli.Data.tagsInfo.get_name_checked(tag_name);
			$('#portfolio_tags_cloud .portfolio_tags li').each( function(){
				if($(this).text() == tag_name){
					if(is_checked){ $(this).addClass('checked'); }
					else{ $(this).removeClass('checked'); }
					return false; // End iterating
				}
			});

			var matched_pid_list = clydeli.Data.tagsInfo.get_pid_list(tag_name);
			for(var i=matched_pid_list.length; i>=0; --i){
				var should_hide = true, target_found = false;
				$('#p_id_'+matched_pid_list[i]+' .portfolio_tags li').each( function(){
					if(!target_found && $(this).text() == tag_name){
						if(is_checked){
							$(this).addClass('checked');
							//$('#portfolio_tags_cloud').after($('#p_id_'+matched_pid_list[i]));
						} else { $(this).removeClass('checked'); }
						target_found = true;
					}
					if($(this).hasClass('checked')){ should_hide = false; }
				});
				if(should_hide){ $('#p_id_'+matched_pid_list[i]).fadeOut("slow"); }
				else{ $('#p_id_'+matched_pid_list[i]).fadeIn("slow"); }
			}
		},

		refreshPortfolioDisplay = function(){
			$('.portfolio').each( function(){
				var should_hide = true;
				$(this).find('.portfolio_tags li').each( function(){
					if($(this).hasClass('checked')){
						should_hide = false;
						return false; // End iterating
					}
				});
				if(should_hide){ $(this).hide(); }
				else{ $(this).show(); }
			});
			$('#portfolio_tags_cloud').css("margin-bottom", $('#main_frame').prop('scrollHeight')-$('#portfolio_tags_cloud').height()-60+"px");
		},


		// Display functions
		showArea = function(hash_vars) {
			// navbar manipulation
			$('#menu_header ul li').removeClass("active");
			$('#'+hash_vars.p+'_btn').addClass("active");

			// clearout areas
			$('.area').hide();

			switch(hash_vars.p){
				case 'vitae':
					$('#vitae').fadeIn('slow');
					break;
				case 'portfolio':
					this.collapsePortfolio();
					$('#portfolio_tags_cloud, .portfolio').fadeIn('slow');
					this.refreshPortfolioDisplay();
					if(hash_vars.p_id !== undefined){
						this.expandPortfolio(hash_vars.p_id);
					}
					break;
				case 'misc':
					$('#misc').fadeIn('slow');
					break;
				default:
					$('#home_btn').addClass("active");
					$('#about_profile, #about_text').fadeIn('slow');
					break;
			}
		},

		bgCropping = function(){
			// Position the horizontal frame
			$('#hor_frame').css('height', $('body').width()*27/64+'px').css('top', ($('body').height()-$('#hor_frame').height())/3 );
			$('#copyright_footer').css('top', ($('body').height()-$('#hor_frame').height())/3+ 'px');
			// Position the background frame
			$('#bg_frame').css('width', $('body').width()*0.95+'px');
			$('#bg_frame').css('height', $('#hor_frame').height()+'px'); // CHROME DEV HACK

			// Calculate and position(center-aligning) background img
			var
				neg_offset = -($('#bg_frame').width()*clydeli.Data.BG_imgList[clydeli.Data.BG_Num].get_ratio()*clydeli.Data.BG_imgList[clydeli.Data.BG_Num].get_center() - $('#bg_frame').height()/2),
				pos_offset = $('#bg_frame').width()*clydeli.Data.BG_imgList[clydeli.Data.BG_Num].get_ratio()-$('#bg_frame').height();

			if(pos_offset < -neg_offset){ neg_offset = -pos_offset; }
			var bg_pos = (neg_offset >= 0)? '0 0':'0 '+neg_offset+'px';
			$('#bg_frame, #hor_frame').css('background-position', bg_pos);

			// Header and Footer
			$('#main_frame').css('height', $('#bg_frame').height()-56 + 'px');
			$('#menu_header, #page_footer').css('width', $('#hor_frame').width() +'px');
			$('#menu_header, #page_footer').css('left', ($('#bg_frame').width()-$('#hor_frame').width())/2+'px');

			// Make right float compatible with 104% scroll hide HACK
			//$('#misc').css('margin-right', $('#main_frame').width()-$('#bg_frame').width()+16);
		};

		return {
			collapsePortfolio : collapsePortfolio,
			expandPortfolio : expandPortfolio,
			filterPortfolioTags : filterPortfolioTags,
			refreshPortfolioDisplay : refreshPortfolioDisplay,
			showArea : showArea,
			bgCropping : bgCropping
		};

})();
