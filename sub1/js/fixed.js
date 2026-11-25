

var system_intro_top = $('.system_intro').offset().top-200;

var top1 = $('.system_01').offset().top-200;
var top2 = $('.system_02').offset().top-200;
var top3 = $('.system_03').offset().top-200;
var top4 = $('.system_04').offset().top-200;
var top5 = $('.system_05').offset().top-200;



  $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(system_intro_top<scroll){
              $('.system_intro').css({
                'position':'fixed',
                'top':'200px',
                'left':'92px',
                'z-index':100
            });

        }else{
            $('.system_intro').css({
                'position':'absolute',
                'top':0,
                'left':'-160px'
            });
        }

         $('.system_intro li a').removeClass('active');

         if(scroll>=top1 && scroll<top2){
            $('.system_intro li:eq(0) a').addClass('active');
         }else if(scroll>=top2 && scroll<top3){
            $('.system_intro li:eq(1) a').addClass('active');
         }else if(scroll>=top3 && scroll<top4){
            $('.system_intro li:eq(2) a').addClass('active');
         }else if(scroll>=top4 && scroll<top5){
            $('.system_intro li:eq(3) a').addClass('active');
         }else if(scroll>=top5){
            $('.system_intro li:eq(4) a').addClass('active');
         }
        
});      


$('.system_intro li a').click(function(e){
    e.preventDefault();

    var idx = $(this).index('.system_intro li a');  // 0 1 2 3 4
   //$('.system_intro li a').removeClass('active');
  // $(this).addClass('active');

    if(idx==0){
         $("html,body").stop().animate({"scrollTop":top1},1000);
    }else if(idx==1){
        $("html,body").stop().animate({"scrollTop":top2},1000);
    }else if(idx==2){
        $("html,body").stop().animate({"scrollTop":top3},1000);
    }else if(idx==3){
        $("html,body").stop().animate({"scrollTop":top4},1000);
    }else if(idx==4){
        $("html,body").stop().animate({"scrollTop":top5},1000);
    }

});