
$(function() {
    initCarousel();
    makeThumbnailClickStartVideo();
});




function initCarousel() {
    $('.c-gallery__carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
}

function makeThumbnailClickStartVideo() {
    $('.c-video__button, .c-video__element-img').click(function(){
        $('.c-video__button, .c-video__element-img').fadeOut();
        $f($('.c-video__element > iframe')[0]).api("play");
    });
}