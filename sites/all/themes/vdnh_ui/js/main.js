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
        
        $( document ).ready(function() {
            setButtonPosition();
        });
        
        $( window ).resize(function() {
            setButtonPosition();
        });
        
    });
}(jQuery));