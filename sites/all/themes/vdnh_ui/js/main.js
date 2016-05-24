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
        
        function sizeMeUp() {
     var cw = $('#block-views-mentors-block-1 .view-mentors .views-row').width();

  /*  $('#block-views-mentors-block-1 .view-mentors .views-row .wshad').css({
	    'height':cw+'px', 
	    'margin-top':cw*(-1)+'px' 
	}); */
           
   /* $('#block-views-mentors-block-1 .view-mentors .views-row .title_container').css({
		'margin-top':cw*(-1)+'px' ,
	    'width':cw-20
	}); */
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
           
          
           scrollteam();
    
        });
        
        $( window ).resize(function() {
            setButtonPosition();
            
        });
         
    });
}(jQuery));