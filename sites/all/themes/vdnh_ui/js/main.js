(function ($) {
    $(function() {
        
        function setButtonPosition() {
            wh = $(window).height();
            bh = $('#block-block-16').height();
            
            smb = $('.region-sidebar-first').width();
            $('#block-block-16').css({
                'top': wh - bh - 20,
                'width': smb});
        }
        
        $( window ).scroll(function() {
           s = $(window).scrollTop();
           if (s > 100) {
               $('body').addClass('scrolled');
           } else {
               $('body').removeClass('scrolled');
           }
        });
        
        $( document ).ready(function() {
           setButtonPosition();
           s = $(window).scrollTop();
           if (s > 100) {
               $('body').addClass('scrolled');
           } else {
               $('body').removeClass('scrolled');
           }
        });
        
        $( window ).resize(function() {
            setButtonPosition();
        });
         
    });
}(jQuery));