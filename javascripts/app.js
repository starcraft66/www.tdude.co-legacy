/* -------------------------------------------------- 
   Table of Contents
-----------------------------------------------------
:: Resize and best settings
:: :: Counter settings
:: Dashboard Animation
*/



/******************
    *  RESIZE  * 
    * AND BEST * 
    * SETTINGS *
******************/

$(document).ready(function () {

    wH = $(document).height();
    mTop = wH - $(".body-wrapper").height();
    mTop = mTop / 2;
    mTop = mTop + "px";
    $('.body-wrapper').css('padding-top', mTop);
    $('.body-wrapper').css('padding-bottom', mTop);

    $("#loaderImage").jqMetroLoader({
      size:5,
      spacing:5,
      speed:800,
      number:10,
      color :"#fff" 
    });
});
  
$(window).on('resize', function() {
    wH = $(window).height();
    mTop = wH - $(".body-wrapper").height();
    mTop = mTop / 2;
    if (mTop < 0) {
        mTop = 0;
    }
    mTop = mTop + "px";
    $('.body-wrapper').css('padding-top', mTop);
    $('.body-wrapper').css('padding-bottom', mTop);
});

$(window).on('load', function() {
    $("#loaderImage").fadeOut();
});




/******************************
    * DASHBOARD ANIMATION *
******************************/

function showDashBoard(){
      for(var i = 1; i <= 3; i++) {
        $('.fadebox'+i).each(function(){
            $(this).addClass('fadeInForward-'+i).removeClass('fadeOutback');
        });
      }
    }

function fadeDashBoard(){
      for(var i = 1; i <= 3; i++) {
        $('.fadebox'+i).addClass('fadeOutback').removeClass('fadeInForward-'+i);
      }
    }
    
fadeDashBoard();
   
$(".lock-thumb").click(function(){
        fadeDashBoard();
        $('.login-screen').addClass('slidePageInFromLeft').removeClass('slidePageBackLeft');
});
    
$('#unlock-button').click(function(){
          $('.login-screen').removeClass('slidePageInFromLeft').addClass('slidePageBackLeft');
          showDashBoard();
});

$('.open').each(function(){
    var $this= $(this),
        page = $this.data('page');
    $this.on('click',function(){
      $('.page.'+page).addClass('openpage');
      fadeDashBoard();
   })
});

$('.close-button').click(function(){
    $(this).parent().addClass('slidePageLeft')
          .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
                $(this).removeClass('slidePageLeft').removeClass('openpage');
              });
      showDashBoard();
});

$(window).on('load', function(){
    $('.body-overlay').addClass('slideDemoOverlayUp');
      showDashBoard();
});


