function scrollteam() {

jQuery( '<div class="scroll-left"><i class="fa fa-chevron-left"></i></div>' ).insertBefore( "#block-views-mentors-block-1 .view-mentors .view-content" );
jQuery( '<div class="scroll-right"><i class="fa fa-chevron-right"></i></div>' ).insertAfter( "#block-views-mentors-block-1 .view-mentors .view-content" ); 

var ww=0;
jQuery( "#block-views-mentors-block-1 .view-mentors .view-content .views-row" ).each(function( index ) {
  ww=ww+( jQuery(this) ).width();
});

jQuery("#block-views-mentors-block-1 .view-mentors .view-content").css("width", ww+100+"px");   



jQuery('#block-views-mentors-block-1 .view-mentors').mousedown(function(event) {

    jQuery(this).data('down', true).data('x', event.clientX).data('scrollLeft', this.scrollLeft);

    return false;

}).mouseup(function(event) {

    jQuery(this).data('down', false);

}).mousemove(function(event) {

    if (jQuery(this).data('down') == true) {

        this.scrollLeft = jQuery(this).data('scrollLeft') + jQuery(this).data('x') - event.clientX;

    }

});

var pos = 5;

jQuery.fn.loopingScroll = function(direction, scrollElement) {

    if (direction == "right") {
        pos += 5;
    }

    else if (direction == "left") {
        pos -= 5;
    }
    jQuery(scrollElement).parent().scrollLeft($(scrollElement).parent().data('scrollLeft') + pos);
    return this;
}

jQuery(".scroll-left").hover(function() {
    jQuery(this).parent().animate({scrollLeft: 0}, 7000);  
    jQuery(this).fadeIn('fast');
}, function() {
    jQuery(this).parent().stop();
    jQuery(this).fadeOut('fast'); 
});

jQuery(".scroll-right").hover(function() {

    jQuery(this).parent().animate({scrollLeft: jQuery(this).siblings("#block-views-mentors-block-1 .view-mentors .view-content").width()}, 7000);
    jQuery(this).fadeIn('fast');
}, function() {
    jQuery(this).parent().stop();
    jQuery(this).fadeOut('fast');
});
}