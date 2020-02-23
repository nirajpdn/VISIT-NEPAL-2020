$(document).ready(function(){
    $('.section-categories').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }
        else
        {
            $('nav').removeClass('sticky');
        }
    },{
        offset:'0px'
    });
});

$('a[href*="#"]').not('[href="#"]').not('[href="#0"]')
.click(function(event) {
if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
    ) 
    {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { 
            return false;
            } else {
            $target.attr('tabindex','-1');
            $target.focus(); 
            };
        });
        }
    }
    $('.js-nav-icon').click(function(){
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i');
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }
        else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
});