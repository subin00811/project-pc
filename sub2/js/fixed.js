

var ticket_box_top =$('#content .content_area .ticket_box').offset().top-172;

  $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(ticket_box_top<scroll){
            $('#content .content_area .ticket_box').css({
                'position':'fixed',
                'top':0,
                'left':'50%',
                'margin-left':'-700px',
                'z-index':100
            });
            $('#headerArea').hide();
            $('#content .content_area .content_flex .content_right').css('margin-left','464px');
        }else{
             $('#content .content_area .ticket_box').css({
                'position':'static',
                'top':0,
                'left':0,
                'margin-left':0,
            });
            $('#headerArea').show();
            $('#content .content_area .content_flex .content_right').css('margin-left','0');
        }

  });