$(document).ready(() => {
    $(window).scroll(() => {
        var scrollSekarang = $(window).scrollTop();
        if (scrollSekarang > 200) {
            $('.navbar').toggleClass('navbar-dark', false);
            $('.navbar').toggleClass('navbar-light', true);
            $('.navbar').toggleClass('bg-light', true);
            $('.btn-navbar').toggleClass('btn-outline-light', false);
            $('.btn-navbar').toggleClass('btn-outline-primary', true);
        } else {
            $('.navbar').toggleClass('navbar-dark', true);
            $('.navbar').toggleClass('navbar-light', false);
            $('.navbar').toggleClass('bg-light', false);
            $('.btn-navbar').toggleClass('btn-outline-light', true);
            $('.btn-navbar').toggleClass('btn-outline-primary', false);
        }
    })
})