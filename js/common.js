$(function(){
  //스크롤이벤트
  $(window).scroll(function(){
    //1.profile, works 슬라이드 효과
    //똑같은 구조가 반복될 경우 순차적으로 접근하여 처리하기: each()
    $('#profile .content-wrap > div').each(function(index){
      var position=$(this).offset().top;
      var scroll=$(window).scrollTop();
      if(scroll+600 > position){
        if(index==0){//About영역
          $(this).addClass('slide-left');
        }else{//Skills영역
          $(this).addClass('slide-right');
        }
      }
    })

    //2.works 슬라이드 효과
    $('#works .content-wrap > div').each(function(){
      var position=$(this).offset().top;
      var scroll=$(window).scrollTop();
      if(scroll+600 > position){
        $(this).addClass('slide-right');
      }
    })

    //3.rightNav
    //스크롤의 위치 구하기
    var windowTop=$(window).scrollTop();

    //네비게이션 고정시키기
    //각영역이 시작되는 지점의 위치값 구하기
    a=$('#intro').offset().top;
    b=$('#profile').offset().top;
    c=$('#works').offset().top;
    d=$('#contact').offset().top;

    if(windowTop > (a-100)){
      $('nav').addClass('fixed');
      $('#goTop').addClass('on');
    }else{
      $('nav').addClass('fixed');
      $('#goTop').removeClass('on');
    }

    //현재보고있는 영역을 네비게이션에 표시해주는 기능
    var index=0;
    //각영역의 범위에 들어왔을 때의 인덱스 구하기
    if(windowTop>=a && windowTop<b){//a영역
      index=0;
      $('#rightNav').removeClass('style2');
      $('header').removeClass('style3');
    }else if(windowTop>=b && windowTop<c){//b영역
      index=1;
      $('#rightNav').addClass('style2');
      $('header').addClass('style3');
      progress();
    }else if(windowTop>=c && windowTop<d){//c영역
      index=2;
      $('#rightNav').addClass('style2');
      $('header').addClass('style3');
    }else if(windowTop>=d){//d영역
      index=3;
      $('#rightNav').addClass('style2');
      $('header').addClass('style3');
    }

    //네비게이션의 활성화상태체크
    //1.active클래스값을 초기화
    //2.해당메뉴에 active클래스 적용
    $('#rightNav ul li a').removeClass();
    $('#rightNav ul li a').eq(index).addClass('active');
    $('nav ul li a').removeClass();
    $('nav ul li a').eq(index).addClass('active');


  })// 스크롤이벤트

  //최초한번 실행(scroll)
  $(window).trigger('scroll');

  //네비게이션 메뉴를 클릭했을 때 해당 영역으로 부드럽게 이동하기
  $('nav a').click(function(){
    var id=$(this).attr('href');
    $('html, body').stop().animate({
      scrollTop:$(id).offset().top
    },1000);
  })

  $('.gnb-nav a').click(function(e){
    e.preventDefault();
    var id=$(this).attr('href');
    $('html, body').stop().animate({
      scrollTop:$(id).offset().top
    },1000);
    //태그속성에 따라서 기능이 제어되는 속성에 대해서는 prop()함수를 사용하여 true/false 로 적용
    //일반 속성에 대한 값은  attr함수를 이용
    $('#btn-menu').prop('checked',false);
  })

  //네비게이션 메뉴를 클릭했을 때 해당 영역으로 부드럽게 이동하기
  $('#rightNav ul li a').click(function(e){
    e.preventDefault();
    var id=$(this).attr('href');
    $('html, body').stop().animate({
      scrollTop:$(id).offset().top
    },1000,'easeOutBounce');
  })

  //위로가기 ==================================================
  $('#goTop').click(function(){
    $('html, body').stop().animate({
      scrollTop:'0'
    },1000);
  })

  // scrolldown
  $('.scroll').click(function() {
    $('html, body').animate({scrollTop: $('#profile').offset().top}, 'slow');
  });

  // progress bar
  function progress(){
    $('.progress-bar').each(function() {
      $(this).find('.progress-content').animate({
        width:$(this).attr('data-percentage')
      },5000);

      $(this).find('.progress-number-mark').animate({
        left:$(this).attr('data-percentage')},
        {
          duration: 5000,
          //step은 애니메이션 재생시간 중간에 다른일을 하고 싶을 때 사용한다고 이해
          //step 함수에는 인자를 2개를 받는다. now, fx
          //특정 조건에 옵션값을 변경하는 것이 가능
          //now :애니메이션이 재생 되는 동안의 현재의 값.
          step: function(now, fx) {
            //Math.round 반올림
            var data = Math.round(now);
            $(this).find('.percent').html(data + '%');
          }
        });
      });
  }


})
