(function($){

    const shop = {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.footer();
        },
        header(){
            // 네비게이션
            // 1. 메인메뉴에 마우스 오버시(올리면) => 서브메뉴 보인다.
            $('.menu-btn').on({
                mouseenter(){
                    // $('.sub').stop().slideDown(300);
                    $('.sub').stop().show(0);
                },
                focusin(){ //탭키가 선택되면 보인다. 포커스인(focus === focusin) 의 반대는 키보드 탭키가 떠나면(blur===focusout)
                    // $('.sub').stop().slideDown(300);
                    $('.sub').stop().show(0);
                }
            });

            // 2. 서브메뉴에 마우스 아웃시(떠나면) => 서브메뉴 숨긴다.
            // 2. 수정보완 nav(네비게이션)에 마우스 아웃시(떠나면) => 서브메뉴 숨긴다.
            $('#nav').on({
                mouseleave(){
                    // $('.sub').stop().slideUp(300);
                    $('.sub').stop().hide(0);
                }
            });

        },
        section1(){
            //1. 변수   
            let cnt=0;

            //2. 메인슬라이드함수 3개 우측에서 좌측으로 이동  0 1 2
            function mainSlide(){ 
               $('.slide-wrap').stop().animate({top:`${-300*cnt}px`}, 600,function(){
                    if(cnt>2) cnt=0;
                    $('.slide-wrap').stop().animate({top:`${-300*cnt}px`}, 0);
               });
            }

            //3. 다음카운트함수
            function mextCount(){
                cnt++;
                mainSlide();
            }

            //4. 자동타이머함수
            function autotimer(){
                setInterval(mextCount, 3000);
            }
            autotimer();

        },
        section2(){

            // 갤러리버튼 클릭 이벤트
            $('.gallery-btn').on({
                click(){
                    $('.gallery-btn').addClass('on');
                    $('.notice-btn').addClass('on');
                    $('.gallery').show(0);
                    $('.notice').hide(0);
                }
            })

             // 공지사항버튼 클릭 이벤트
            $('.notice-btn').on({
                click(){
                    $('.gallery-btn').removeClass('on');
                    $('.notice-btn').removeClass('on');
                    $('.notice').show(0);
                    $('.gallery').hide(0);
                }
            })

            //공지사항 1번째 글 클릭시 팝업창 오픈 이벤트 
            $('.popup-btn').on({
                click(){
                    $('.popup').css({display:'flex'});  
                    /* ===$('.popup').show().css({display:'flex'}); */
                    /* 쇼를 하면 디스플레이 블록이 되서 플렉스가 사라짐 */
                }
            });
            //팝업창 닫기 클릭 이벤트
            $('.close-btn').on({
                click(){
                    // $('.popup').hide(0); //display:none;
                    $('.popup').css({display:'none'}); //display:none;
                }
            });

        },
        footer(){
            
        }
    }
    shop.init();

})(jQuery);