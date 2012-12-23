// Background image information
var BG_IMG_LIST = [];
BG_IMG_LIST.push(new bg_img('https://lh3.googleusercontent.com/-5y1dQeU3yYw/TjJ7aDf8aXI/AAAAAAAAKBE/wxGVszezlAc/s1440/P1010606.JPG', '<a href="https://plus.google.com/photos/106431348054423810177/albums/5634698332240377633/5634701771340015986" >Shanghai, China  Aug. 2010 </a>', 3/4, 0.55));
BG_IMG_LIST.push(new bg_img('https://lh5.googleusercontent.com/-zFqyF61Qv6s/TSk_1i5e9_I/AAAAAAAAIao/QFGK2_iM4Yw/s1440/20100731836.jpg', '<a href="https://plus.google.com/photos/106431348054423810177/albums/5560041465274782513/5560045404099114994" >Tokyo, Japan  Jul. 2010 </a>', 3/4, 0.6));
BG_IMG_LIST.push(new bg_img('https://lh3.googleusercontent.com/-Tx8HuKsKgRE/SOJE5vsy8II/AAAAAAAACeE/bhkT8AGNAsc/s1440/20080824868.jpg', '<a href="https://plus.google.com/photos/106431348054423810177/albums/5251833612796485585/5251835874315006082" >Alishan, Taiwan  Aug. 2008 </a>', 3/4, 0.65));
BG_IMG_LIST.push(new bg_img('https://lh4.googleusercontent.com/-g2m2CwCxBb0/TCyjVNdnKEI/AAAAAAAAGbs/mM3s5dm_V3o/s1440/20100630527.jpg', '<a href="https://plus.google.com/photos/106431348054423810177/albums/5488941284228439281/5488941630644234306?authkey=CKiw89DP_vWYNg" >Google Taiwan  Jun. 2010 </a>', 0.75, 0.6));
BG_IMG_LIST.push(new bg_img('https://lh4.googleusercontent.com/-qAPXCuFQ4X4/TU1oHPLax4I/AAAAAAAAJMQ/eNsnuaawGOU/s1440/20100622507.jpg', '<a href="https://plus.google.com/photos/106431348054423810177/albums/5570209861323780065/5570222787669968770" >HSNU, Taiwan  Jun. 2010 </a>', 3/4, 0.3));
BG_IMG_LIST.push(new bg_img('https://lh3.googleusercontent.com/-WKls_I1sTvI/SODl7NqSa7I/AAAAAAAACVU/lWIFgScJ0qU/s1440/20080813769.jpg', '<a href="https://plus.google.com/photos/106431348054423810177/albums/5251446656504758577/5251449970956069810" >Bitoujiao, Taiwan  Aug. 2008 </a>', 3/4, 0.5));
BG_IMG_LIST.push(new bg_img('https://lh4.googleusercontent.com/-MWw7U58wmy4/UCnrIgVj6JI/AAAAAAAAPu8/klDwpEALN0A/s1440/P1130116.JPG', '<a href="https://plus.google.com/photos/106431348054423810177/albums/5776405569811745793/5776406528431220882" >Taipei, Taiwan  Sep. 2012 </a>', 9/16, 0.5));

// Portfolio tags information
var TAGS_INFO_OBJ = new tags_info();
TAGS_INFO_OBJ.insert_type('lang', 'LightBlue', ['C','C++','C#','Java','HTML','CSS','JS','verilog'])
TAGS_INFO_OBJ.insert_type('field', 'LightCoral', ['web_dev','architecture','UI','algorithm','game'])
TAGS_INFO_OBJ.insert_type('type', 'Khaki', ['research','project','book'])
TAGS_INFO_OBJ.insert_type('genre', 'LightGreen', ['indie','NTU', 'CMU'])

// Randomize a background image
var now = new Date();
var BG_NUM = Math.floor(Math.random(now.getSeconds())*BG_IMG_LIST.length);

// Portofolio collapse/expand functions
function collapse_portfolio(is_all, p_id){
  var selector = (is_all)? '.portfolio':'#p_id_'+p_id;
  $(selector).removeClass('p_expanded');
}
function expand_portfolio(p_id){
  collapse_portfolio(true);
  $('#p_id_'+p_id).addClass('p_expanded');
  $('#portfolio_tags_cloud').after($('#p_id_'+p_id));
  // fadeIn effect
  $('.portfolio').hide();
  $('#p_id_'+p_id).fadeIn("slow");
}

// Portofolio filter/refresh functions
function filter_portfolio_tags(tag_name){
  var is_checked = TAGS_INFO_OBJ.get_name_checked(tag_name);
  $('#portfolio_tags_cloud .portfolio_tags li').each( function(){
    if($(this).text() == tag_name){ (is_checked)? $(this).addClass('checked'):$(this).removeClass('checked'); }
  });

  var matched_pid_list = TAGS_INFO_OBJ.get_pid_list(tag_name);
  for(var i=matched_pid_list.length; i>=0; --i){
    var should_hide = true;
    $('#p_id_'+matched_pid_list[i]+' .portfolio_tags li').each( function(){
      if($(this).text() == tag_name){ 
        if(is_checked){
          $(this).addClass('checked')
          $('#portfolio_tags_cloud').after($('#p_id_'+matched_pid_list[i]));
        } else { $(this).removeClass('checked'); }
      }
      if($(this).hasClass('checked')){ should_hide = false; }
    });
    (should_hide)? $('#p_id_'+matched_pid_list[i]).fadeOut("slow"):$('#p_id_'+matched_pid_list[i]).fadeIn("slow");
  }
}
function refresh_portfolio_display(){
  $('.portfolio').each( function(){
    var should_hide = true;
    $(this).find('.portfolio_tags li').each( function(){
      if($(this).hasClass('checked')){ should_hide = false; }
    });
    (should_hide)? $(this).hide():$(this).show();
  });
}


// Display functions
function SHOW_AREA(hash_vars) {
  // navbar manipulation
  $('#menu_header ul li').removeClass("active");
  $('#'+hash_vars['p']+'_btn').addClass("active");

  // clearout areas
  $('.area').hide();

  switch(hash_vars['p']){
    case 'vitae':
      $('#vitae').fadeIn('slow');
      break;
    case 'portfolio':
      collapse_portfolio(true);
      $('#portfolio_tags_cloud, .portfolio').fadeIn('slow');
      refresh_portfolio_display();
      if(hash_vars['p_id'] != undefined){
        // Ensure that content img is loaded before expansion
        //$('#p_id_'+hash_vars['p_id']+' .portfolio_content_img')[0].onload  = function() { expand_portfolio(hash_vars['p_id']); }
        expand_portfolio(hash_vars['p_id']);
      }
      break;
	  case 'misc':
      $('#misc').fadeIn('slow');
      break;
    default:
      $('#home_btn').addClass("active")
      $('#about_profile, #about_text').fadeIn('slow');
      break;
  }
}

function BG_CROPPING(){
  // Position the horizontal frame 
  $('#hor_frame').css('height', $('body').width()*27/64+'px').css('top', ($('body').height()-$('#hor_frame').height())/2 );
  $('#copyright_footer').css('top', ($('body').height()-$('#hor_frame').height())/2+ 'px')
  //$('#hor_frame').css('width', $('body').width() + 'px'); // 1px frame issue
  // Position the background frame
  $('#bg_frame').css('width', $('body').width()*0.95+'px');
  $('#bg_frame').css('height', $('#hor_frame').height()+'px'); // CHROME DEV HACK
  // Calculate and position(center-aligning) background img
  var neg_offset = -($('#bg_frame').width()*BG_IMG_LIST[BG_NUM].get_ratio()*BG_IMG_LIST[BG_NUM].get_center() - $('#bg_frame').height()/2);
  var pos_offset = $('#bg_frame').width()*BG_IMG_LIST[BG_NUM].get_ratio()-$('#bg_frame').height();
  if(pos_offset < -neg_offset){ neg_offset = -pos_offset; }
  var bg_pos = (neg_offset >= 0)? '0 0':'0 '+neg_offset+'px';
  $('#bg_frame, #hor_frame').css('background-position', bg_pos);
  
  // Header and Footer
  //$('#main_frame').css('width', $('#main_frame').width() + 'px');
  $('#main_frame').css('height', $('#bg_frame').height()-40 + 'px');
  $('#menu_header, #page_footer').css('width', $('#hor_frame').width() +'px');
  $('#menu_header, #page_footer').css('margin-left', ($('#bg_frame').width()-$('#hor_frame').width())/2+'px');

  // Make right float compatible with 104% scroll hide HACK
  $('#misc').css('margin-right', $('#main_frame').width()-$('#bg_frame').width()+16);
};

$(document).ready(function(){

  // Generate portfolio HTML 
  for(var i=portfolio_entries.length-1; i>=0; --i){
    var p_id = portfolio_entries[i]['md5_pid'];
    var p_entry = 
      '<section class="area portfolio" id="p_id_'+p_id+'"> <img class="portfolio_thumb_img" alt="" src="imgs/portf_'+p_id+'_thumb.jpg">'+
        '<a href="#!p=portfolio&p_id='+p_id+'"><div class="portfolio_title"> <h2>.'+portfolio_entries[i]['title']+'</h2></div></a>'+
          '<div class="portfolio_content">'+
            '<div class="portfolio_fn">.collapse( )</div>'+
            '<article> <header>.'+portfolio_entries[i]['header']+'</header>'+
              '<div class="portfolio_content_img" style="background-image: url(imgs/portf_'+p_id+'.jpg);"><div class="portfolio_exp"><h2>';
              //'<div class="portfolio_exp"><h2>';
    
    // Iterate through meta information
    if(portfolio_entries[i].hasOwnProperty('meta_expansion') ){      
      for(var j=0; j<portfolio_entries[i]['meta_expansion'].length; ++j ){
        p_entry +=
          '<b>'+portfolio_entries[i]['meta_expansion'][j]['label']+': </b>'+
          portfolio_entries[i]['meta_expansion'][j]['content'] + '<br>';
      }
    }

    // Iterate through links
    if(portfolio_entries[i].hasOwnProperty('links') ){
      p_entry += '<b>Links: </b>';
      for(var j=0; j<portfolio_entries[i]['links'].length; ++j ){
        p_entry += '[<a href="'+portfolio_entries[i]['links'][j]['href']+'">'+portfolio_entries[i]['links'][j]['label']+'</a>] ';
      }
      p_entry += '<br>';
    }

    // Iterate through images
    /*if(portfolio_entries[i].hasOwnProperty('images') ){
      p_entry += '<b>Additional Images: </b><br>';
      for(var j=0; j<portfolio_entries[i]['images'].length; ++j ){
        p_entry += '<img class="content_thumb_img" alt="" src="'+portfolio_entries[i]['images'][j]+'">';
      }
      p_entry += '<br>';
    }*/


    // Introduction and close previous tags and open 'tags' tag
    p_entry += '</h2></div></div><b>Introduction:</b><br>'+portfolio_entries[i]['introduction']+'</article> </div> <ol class="portfolio_tags">';
                        
    // Iterate through tags      
    for(var j=portfolio_entries[i]['tags'].length-1; j>=0; --j ){
      p_entry += '<li>'+portfolio_entries[i]['tags'][j]+'</li> ';
      TAGS_INFO_OBJ.insert_pid( portfolio_entries[i]['tags'][j], p_id);
    }
    $("#portfolio_tags_cloud").after( p_entry+'</ol></section>' );
  }

  // Global behavior initialzation 
  $('#page_footer a, #vitae a, .social_list a, .portfolio .portfolio_exp a, #about_text a').attr('rel', 'external'); // set rel=external 
  $("a[rel='external']").attr('target', '_blank');


  // Portfolio tags settings
  var tags_list = TAGS_INFO_OBJ.get_name_type_hash();
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

  //$('.portfolio_tags li').addClass('checked'); // If use select all as default
  $('.portfolio_tags li').each( function(){
    $(this).css('background-color', TAGS_INFO_OBJ.get_color( TAGS_INFO_OBJ.get_type( $(this).text())));
  });

  // Background image settings
  $('#bg_frame, #hor_frame').css('background-image', 'url('+BG_IMG_LIST[BG_NUM].get_src()+')');
  $('#page_footer .bg_info').append(BG_IMG_LIST[BG_NUM].get_info());
  BG_CROPPING();
  
  $(window).resize(function() { BG_CROPPING(); });
  
  // Decode hash tag information
  var hash_vars = [];
  var hashes = unescape(self.document.location.hash.slice(2)).split('&');
  for(var i=0; i < hashes.length; ++i){
    var hash_var = hashes[i].split('=');    
    hash_vars[hash_var[0]] = hash_var[1];
  }
  SHOW_AREA(hash_vars);
  
  // Listen on popstate event
  /*window.onpopstate = function(){
    var hash_vars = [];
    var hashes = unescape(self.document.location.hash.slice(2)).split('&');
    for(var i=0; i < hashes.length; ++i){
      var hash_var = hashes[i].split('=');    
      hash_vars[hash_var[0]] = hash_var[1];
    }
    SHOW_AREA(hash_vars);
  }*/

  // Menu button triggers
  $('#menu_header nav ul li').click(function() {
    SHOW_AREA( {"p": $(this).attr('id').slice(0, -4)} );
  });

  // Portfolio triggers
  $("#main_frame").on("click", ".portfolio .portfolio_title", function(){
    expand_portfolio( $(this).parents('.portfolio').attr('id').slice(5) );
  });
  $("#main_frame").on("click", ".portfolio .portfolio_fn", function(){
    collapse_portfolio(false, $(this).parents('.portfolio').attr('id').slice(5) ); 
    refresh_portfolio_display();
  });
  $('.portfolio_tags li').click(function() {
    collapse_portfolio(true);
    refresh_portfolio_display();
    TAGS_INFO_OBJ.set_name_checked('toggle', $(this).text());
    filter_portfolio_tags($(this).text());
    //refresh_portfolio_display();
  });
  $('#portfolio_tags_cloud .portfolio_fn').click(function(){
    collapse_portfolio(true);
    switch($(this).text()){
      case '.select("all")':
        TAGS_INFO_OBJ.set_name_checked("all");
        $('.portfolio_tags li').addClass('checked');
        $('.portfolio').show();
        break;
      case '.select("none")':
        TAGS_INFO_OBJ.set_name_checked("none");
        $('.portfolio_tags li').removeClass('checked');
        $('.portfolio').hide();
        break;
    }
  });

  // Pop image triggers
  $(".portfolio .content_thumb_img").hover( function() {
    $('#pop_img').css('top', $(this).offset().top).css('left', $(this).offset().left+$(this).width()+2)
    $("#pop_img img").attr("src", $(this).attr("src"));
    $("#pop_img").stop(true, true).fadeIn("normal");
  }, function() { $("#pop_img").fadeOut("normal"); }); 

  // misc function triggers
  $('#misc .misc_fn').click(function(){
    switch($(this).text()){
      case '.background.random( )':
        BG_NUM = Math.floor(Math.random(now.getSeconds())*BG_IMG_LIST.length);
        break;
      case '.background.next( )':
        BG_NUM = (BG_NUM+1) % BG_IMG_LIST.length;
        break;
    }
    if ($(this).text().slice(1,11) == 'background'){
      $('#bg_frame, #hor_frame').css('background-image', 'url('+BG_IMG_LIST[BG_NUM].get_src()+')');
      $('#page_footer .bg_info').html(BG_IMG_LIST[BG_NUM].get_info());
      BG_CROPPING();
    }
  });

});
