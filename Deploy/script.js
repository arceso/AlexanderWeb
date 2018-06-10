
$(function() {
    initCarousel();
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