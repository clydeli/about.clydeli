

// Randomize a background image
var now = new Date();
clydeli.Data.BG_Num = Math.floor(Math.random(now.getSeconds())*clydeli.Data.BG_imgList.length);

$(document).ready(function(){

  // Generate portfolio HTML
  for(var i=clydeli.Data.Portfolio.length-1; i>=0; --i){
    var p_id = clydeli.Data.Portfolio[i].md5_pid;
    var p_entry = '<section class="area portfolio';
    if(clydeli.Data.Portfolio[i].status.highlighted){ p_entry += ' highlighted'; }
    p_entry += '" id="p_id_'+p_id+'"> <div class="portfolio_status">' + (clydeli.Data.Portfolio[i].status.active? 'active':clydeli.Data.Portfolio[i].status.date);

    p_entry +=
      '</div><img class="portfolio_thumb_img" alt="" src="imgs/portf_'+p_id+'_thumb.jpg">'+
        '<a href="#!p=portfolio&p_id='+p_id+'"><div class="portfolio_title"> <h2>.'+clydeli.Data.Portfolio[i].title+'</h2></div></a>'+
          '<div class="portfolio_content">'+
            '<div class="portfolio_fn">.close( )</div>'+
            '<article> <header>.'+clydeli.Data.Portfolio[i].header+'</header>'+
              '<div class="portfolio_content_img" style="background-image: url(imgs/portf_'+p_id+'.jpg); background-position: 0 '+clydeli.Data.Portfolio[i].status.content_img_offset+'px;"><div class="portfolio_exp"><h2>';

    // Iterate through meta information
    if(clydeli.Data.Portfolio[i].hasOwnProperty('meta_expansion') ){
      for(var j=0; j<clydeli.Data.Portfolio[i].meta_expansion.length; ++j ){
        p_entry +=
          '<b>'+clydeli.Data.Portfolio[i].meta_expansion[j].label+': </b>'+
          clydeli.Data.Portfolio[i].meta_expansion[j].content + '<br>';
      }
    }

    // Iterate through links
    if(clydeli.Data.Portfolio[i].hasOwnProperty('links') ){
      p_entry += '<b>Links: </b>';
      for(var j=0; j<clydeli.Data.Portfolio[i].links.length; ++j ){
        if(j !== 0){ p_entry += ', '; }
        p_entry += '[<a href="'+clydeli.Data.Portfolio[i].links[j].href+'">'+clydeli.Data.Portfolio[i].links[j].label+'</a>] ';
      }
      p_entry += '<br>';
    }

    // Iterate through images
    if(clydeli.Data.Portfolio[i].hasOwnProperty('images') ){
      p_entry += '<b>Additional Images: </b>';
      for(var j=0; j<clydeli.Data.Portfolio[i].images.length; ++j ){
        if(j !== 0){ p_entry += ', '; }
        p_entry += '<a class="content_thumb_img" href="'+clydeli.Data.Portfolio[i].images[j]+'">['+(j+1)+']</a>';
      }
    }

    // Introduction and close previous tags and open 'tags' tag
    p_entry += '</h2></div></div><b>Introduction:</b><br>'+clydeli.Data.Portfolio[i].introduction+'</article> </div> <ol class="portfolio_tags">';

    // Iterate through tags
    for(var j=0; j<clydeli.Data.Portfolio[i].tags.length; ++j ){
      p_entry += '<li>'+clydeli.Data.Portfolio[i].tags[j]+'</li> ';
      clydeli.Data.tagsInfo.insert_pid( clydeli.Data.Portfolio[i].tags[j], p_id);
    }
    $("#portfolio_tags_cloud").after( p_entry+'</ol></section>' );
  }

  // Global behavior initialzation
  $('#page_footer a, #vitae a, .social_list a, .portfolio .portfolio_exp a, #about_text a, #misc a').attr('rel', 'external'); // set rel=external
  $("a[rel='external']").attr('target', '_blank');


  // Portfolio tags settings
  var tags_list = clydeli.Data.tagsInfo.get_name_type_hash();
  var first_element = true; // tags reverse hack
  for(var key in tags_list){
    if(tags_list.hasOwnProperty(key)) {
      if(first_element){
        $('#portfolio_tags_cloud .portfolio_tags').prepend('<li>'+key+'</li>');
        first_element = false;
      }
      else{ $('#portfolio_tags_cloud .portfolio_tags li:last').after(' <li>'+key+'</li> '); }
    }
  }

  $('.portfolio_tags li').addClass('checked'); // If use select all as default
  $('.portfolio_tags li').each( function(){
    $(this).css('background-color', clydeli.Data.tagsInfo.get_color( clydeli.Data.tagsInfo.get_type( $(this).text())));
  });

  // Background image settings
  $('#bg_frame, #hor_frame').css('background-image', 'url('+clydeli.Data.BG_imgList[clydeli.Data.BG_Num].get_src()+')');
  $('#page_footer .bg_info').append(clydeli.Data.BG_imgList[clydeli.Data.BG_Num].get_info());
  clydeli.Core.bgCropping();

  $(window).resize(function() { clydeli.Core.bgCropping(); });

  // Workaround for stopping drag triggers scroll
  $('#bg_frame').on('mousedown', '#main_frame', function(e){
    $(e.target).focus();
    e.preventDefault();
	});

  // Decode hash tag information
  var hash_vars = [];
  var hashes = unescape(self.document.location.hash.slice(2)).split('&');
  for(var i=0; i < hashes.length; ++i){
    var hash_var = hashes[i].split('=');
    hash_vars[hash_var[0]] = hash_var[1];
  }
  clydeli.Core.showArea(hash_vars);

  // Listen on popstate event
  /*window.onpopstate = function(){
    var hash_vars = [];
    var hashes = unescape(self.document.location.hash.slice(2)).split('&');
    for(var i=0; i < hashes.length; ++i){
      var hash_var = hashes[i].split('=');
      hash_vars[hash_var[0]] = hash_var[1];
    }
    clydeli.Core.showArea(hash_vars);
  }*/

  // Menu button triggers
  $('#menu_header nav ul li').click(function() {
    clydeli.Core.showArea( {"p": $(this).attr('id').slice(0, -4)} );
  });

  // Portfolio triggers
  $("#main_frame").on("click", ".portfolio .portfolio_title", function(){
    clydeli.Core.expandPortfolio( $(this).parents('.portfolio').attr('id').slice(5) );
  });
  $("#main_frame").on("click", ".portfolio .portfolio_fn", function(){
    clydeli.Core.collapsePortfolio($(this).parents('.portfolio').attr('id').slice(5) );
    clydeli.Core.refreshPortfolioDisplay();
  });
  $('.portfolio_tags li').click(function() {
    clydeli.Core.collapsePortfolio();
    clydeli.Core.refreshPortfolioDisplay();
    clydeli.Data.tagsInfo.set_name_checked('toggle', $(this).text());
    clydeli.Core.filterPortfolioTags($(this).text());
  });
  $('#portfolio_tags_cloud .portfolio_fn').click(function(){
    clydeli.Core.collapsePortfolio();
    switch($(this).text()){
      case '.select("all")':
        clydeli.Data.tagsInfo.set_name_checked("all");
        $('.portfolio_tags li').addClass('checked');
        $('.portfolio').show();
        break;
      case '.select("none")':
        clydeli.Data.tagsInfo.set_name_checked("none");
        $('.portfolio_tags li').removeClass('checked');
        $('.portfolio').hide();
        break;
    }
  });

  // Pop image triggers
  $(".portfolio .content_thumb_img").hover( function() {
    $('#pop_img').css('top', $(this).offset().top).css('left', $(this).offset().left+$(this).width()+2);
    $("#pop_img img").attr("src", $(this).attr("href"));
    $("#pop_img").removeClass("hidden")
  }, function() {
  	$("#pop_img").addClass("hidden")
  });

  // misc function triggers
  $('#misc .misc_fn').click(function(){
    switch($(this).text()){
      case '.background.random( )':
        clydeli.Data.BG_Num = Math.floor(Math.random(now.getSeconds())*clydeli.Data.BG_imgList.length);
        break;
      case '.background.next( )':
        clydeli.Data.BG_Num = (clydeli.Data.BG_Num+1) % clydeli.Data.BG_imgList.length;
        break;
    }
    if ($(this).text().slice(1,11) == 'background'){
      $('#bg_frame, #hor_frame').css('background-image', 'url('+clydeli.Data.BG_imgList[clydeli.Data.BG_Num].get_src()+')');
      $('#page_footer .bg_info').html(clydeli.Data.BG_imgList[clydeli.Data.BG_Num].get_info());
      clydeli.Core.bgCropping();
    }
  });

});
