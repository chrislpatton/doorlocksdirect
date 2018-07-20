/* eslint-disable */
import $ from 'jquery';

$('document').ready(() => {
console.log("in here")

    $('.footer-columns h4.clickable').click((e) => {
        console.log('clicked')
        if ($(window).width() < 1024) {
            $(e.currentTarget).next().slideToggle();
            $(e.currentTarget).toggleClass('expanded');
        }    
    });
    $('.header-search.expand.mobile .container .form-input').focus(() =>{
        $('.header-search.expand.mobile .container .is-srOnly').toggle();
    });
    $('.navPages-close').click(() => {
        $('#menu,.mobileMenu-toggle').removeClass('is-open');
        $('body').removeClass('has-activeNavPages');
    });
});
