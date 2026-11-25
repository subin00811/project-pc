
//년도 메뉴 클릭 시 해당 섹션으로 부드럽게 이동
$('.subNav a').click(function(e){  //각각의 년도 메뉴를 클릭하면
    e.preventDefault(); //href="#" 속성을 막아주는..메소드
            
    var value=0; //이동할 스크롤의 거리

    if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
         value= $('#content .sec1').offset().top-100;  // 해당 콘테츠의 상단의 거리~~
    }else if($(this).hasClass('link2')){
         value= $('#content .sec2').offset().top-100; 
    }else if($(this).hasClass('link3')){
         value= $('#content .sec3').offset().top-100; 
    }
                  
    $("html,body").stop().animate({"scrollTop":value},1000);
    });

    //년도 메뉴의 스티키 기능 구현
    $('.subNav li:eq(0)').find('a').addClass('spy'); //첫번째 서브메뉴 활성화

    var smh2=$('.navBox').offset().top;  //메인 비주얼의 높이
    var header_h=$('header').height();

    var h0= $('#content section:eq(0)').offset().top-600 ;
    var h1= $('#content section:eq(1)').offset().top-600 ;
    var h2= $('#content section:eq(2)').offset().top-600 ;

    $(window).on('scroll',function(){
    var scroll = $(window).scrollTop(); //스크롤top의 좌표를 담는다
        

        //sticky menu 처리
        if(scroll>smh2-header_h){
            $('.navBox').addClass('navOn');
            //스크롤의 거리가 200px 보다 커지면 서브메뉴 고정
            $('header').hide();  //헤더를 안보이게 해라
        }else{
            $('.navBox').removeClass('navOn');
            //스크롤의 거리가 200px 이하면 서브메뉴 원래 상태로
            $('header').show();  //헤더를 보이게 해라
        }

        //연도 메뉴의 스크롤 스파이(메뉴자동으로 변경)
        $('.subNav li').find('a').removeClass('spy');
        //모든 서브메뉴 비활성화~ 불꺼!!!
        
         //스크롤의 거리의 범위를 처리
        if(scroll>=h0 && scroll<h1){
            $('.subNav li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화

        }else if(scroll>=h1 && scroll<h2){
            $('.subNav li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
            
        }else if(scroll>=h2){
            $('.subNav li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
            
        }
    });





    //년도 메뉴 클릭 시 해당 섹션으로 부드럽게 이동
    $('system_intro a').click(function(e){  //각각의 년도 메뉴를 클릭하면
    e.preventDefault(); //href="#" 속성을 막아주는..메소드
            
    var value=0; //이동할 스크롤의 거리

    if($(this).hasClass('link_1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
         value= $('#content .sec_1').offset().top-100;  // 해당 콘테츠의 상단의 거리~~
    }else if($(this).hasClass('link_2')){
         value= $('#content .sec_2').offset().top-100; 
    }else if($(this).hasClass('link_3')){
         value= $('#content .sec_3').offset().top-100; 
    }else if($(this).hasClass('link_4')){
         value= $('#content .sec_4').offset().top-100; 
    }
                  
    $("html,body").stop().animate({"scrollTop":value},1000);
    });

    //년도 메뉴의 스티키 기능 구현
    $('.system_intro li:eq(0)').find('a').addClass('spy'); //첫번째 서브메뉴 활성화

    var smh2=$('.navBox').offset().top;  //메인 비주얼의 높이
    var header_h=$('header').height();

    var h0= $('#content section:eq(0)').offset().top-600 ;
    var h1= $('#content section:eq(1)').offset().top-600 ;
    var h2= $('#content section:eq(2)').offset().top-600 ;
    var h2= $('#content section:eq(3)').offset().top-600 ;

    $(window).on('scroll',function(){
    var scroll = $(window).scrollTop(); //스크롤top의 좌표를 담는다
        

        //sticky menu 처리
        if(scroll>smh2-header_h){
            $('.navBox').addClass('navOn');
            //스크롤의 거리가 200px 보다 커지면 서브메뉴 고정
            $('header').hide();  //헤더를 안보이게 해라
        }else{
            $('.navBox').removeClass('navOn');
            //스크롤의 거리가 200px 이하면 서브메뉴 원래 상태로
            $('header').show();  //헤더를 보이게 해라
        }

        //연도 메뉴의 스크롤 스파이(메뉴자동으로 변경)
        $('.system_intro li').find('a').removeClass('spy');
        //모든 서브메뉴 비활성화~ 불꺼!!!
        
         //스크롤의 거리의 범위를 처리
        if(scroll>=h0 && scroll<h1){
            $('.system_intro li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화

        }else if(scroll>=h1 && scroll<h2){
            $('.system_intro li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
            
        }else if(scroll>=h2){
            $('.system_intro li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
            
        }else if(scroll>=h3){
            $('.system_intro li:eq(3)').find('a').addClass('spy');
            //네번째 서브메뉴 활성화
            
        }
    });



    var cnt=$('.content_area .visit_btn a').size();  //탭메뉴 개수 ***
    $('.content_area .contlist:eq(0)').fadeIn('slow'); // 첫번째 탭 내용만 열어라
    $('.content_area .tab1').css('background','green').css('color','#333'); //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
    $('.visit_btn .tab').each(function (index) {  // index=0 1 2
      $(this).click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다

          $(".visit_btn .contlist").hide(); //모든 탭내용을 안보이게...
          $(".visit_btn .contlist:eq("+index+")").fadeIn('slow'); //클릭한 해당 탭내용만 보여라
          $(".visit_btn .tab").css('background','red').css('color','#fff'); //모든 탭메뉴를 비활성화
          $(this).css('background','green').css('color','#333'); // 클릭한 해당 탭메뉴만 활성화

     });
    });