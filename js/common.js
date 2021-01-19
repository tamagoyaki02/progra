'use strict';
{
  //スクロールトップが100以上になったら表示、それ以下非表示
  jQuery(window).on("scroll", function ($) {
    if (jQuery(this).scrollTop() > 200) {
      // jQuery('.floating').show();
      jQuery('.floating').fadeIn();
    } else {
      // jQuery('.floating').hide();
      jQuery('.floating').fadeOut();
    }
  });
  //.floating要素をクリックしたら0.5秒かけてスクロールトップ0にする
  jQuery('.floating').click(function () {
    jQuery('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
}
