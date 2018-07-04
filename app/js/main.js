'use strict';

$(document).ready(function () {
    
    $(window).scroll(function () {
        if ($(document).scrollTop() >= $('#scrolllogohidden').outerHeight()) {
            $('#logonav').hide(400);

        } else {
            $('#logonav').show(400);
        }
    });
    jQuery('a[href^="#"]').click(function (e) {

        jQuery('html,body').animate({
            scrollTop: jQuery(this.hash).offset().top
        }, 700);

        return false;

        e.preventDefault();
    });

    $('#pokazgalerie').click(function() {
            $('#ukrytagaleria').slideToggle("slow");
    });
    $('#pokazopis').click(function() {
            $('#ukrytyopis').slideToggle("slow");
    });
    $('#pokazopis1').click(function() {
            $('#ukrytyopis1').slideToggle("slow");
    });




});