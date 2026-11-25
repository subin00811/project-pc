   $.ajax({
       url: './sam.json',
       dataType: 'json',
       success: function(data){
           var useData = data.sam;  //객체배열을 담아 놓는다. useData=>전체 상품배열
           
           function dataPrint(arr){  //arr 매개변수
               
                   var txt = '<ul>';
                   
                   for(var i in arr){
                       
                       var $Name = arr[i].Name;
                       var $Date = arr[i].Date;
                       var $Descript = arr[i].Descript;
                       var $Image = arr[i].Image;

                       txt+='<li>';
                       txt+='<div class="img_box">'
                       txt+='<img src="'+ $Image +'" alt="'+ $Name +'">';
                       txt += '<p class="desc">'+ $Descript +'</p>';
                        txt += '</div>';
                       txt+='<dl>';
                       txt+='<dt>'+$Name+'</dt>'; 
                       txt+='<dd>'+$Date+'</dd>';
                       txt+='</dl>';
                       txt +='</li>';
                   }

                   txt += '</ul>';

                   $('.product_list').html(txt);
              
           };
           

           //초기실행, 함수호출
           dataPrint(useData);  //전체배열


           $('#btn').click(function(){ //검색버튼을 클릭하면
                 /*
                    var 객체배열 = 객체배열.filter(function(element){
                          return 조건절;  //조건에 만족하면 리턴
                        
                    });
                 */
                var newArray = useData.filter(function(element){
                //전체객체배열에서 Name속성에 검색어 값을 포함하는  객체만 필터
                //console.log($('#title').val());
                //return element.Name == $('#title').val();
                 return element.Name.includes($('#title').val());  //검색창에 입력된 검색어->$('#title').val()
                });
                //console.log(newArray);
                dataPrint(newArray);  //검색된 배열로 리스트 출력
                        $('.category button').removeClass('active');
                        $('.category button:eq(0)').addClass('active');
                });


                    //카테고리 탭 (모두보기 코드 대신 이걸 넣음)
                    $('.category button').click(function(){ //탭을 클릭하면

                            $('.category button').removeClass('active'); //모든 탭 비활성화
                            $(this).addClass('active');                  //클릭한 탭만 활성화

                            $('#title').val('');  //검색창 비우기

                            var cate = $(this).attr('data-cate');  //클릭한 탭의 카테고리 이름

                            if(cate == 'all'){
                                dataPrint(useData);  //전체
                            } else {
                                var cateArray = useData.filter(function(element){
                                    return element.Category == cate;  //카테고리가 같은 공연만
                                });
                                dataPrint(cateArray);
                            }
                    });
                }
           }); 