$(function(){
  //배너닫기 ======================================================
  $('#bottom-banner button').click(function(){
    $('#bottom-banner').slideUp();//숨기는거
    //$('#bottom-banner').remove();//제거하는거
  })

  // swiper =======================================================
  var swiper = new Swiper('.product-new .swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.product-new .swiper-pagination',
        clickable: true,
      },
      loop:true
    });

  // slick-slider =====================================================
  $('.single-item').slick({
    dots: true,
    arrows: false
  });

  // gnb-nav =======================================================
  $('.gnb-nav').on('mouseenter focusin',function(){
    $('.nav-bg, .nav-slide, .dropdown').stop().slideDown('fast');
    $('.single-item').slick('setPosition').slick('slickPlay');
  })
  .on('mouseleave focusout',function(){
    $('.nav-bg, .nav-slide, .dropdown').stop().slideUp('fast');
    $('.single-item').slick('setPosition').slick('slickPause');
  })

  // quick-menu swiper =======================================
  var quickSub = new Swiper('.quick-sub .swiper-container', {
      slidesPerView: 5,
      spaceBetween: 5,
      slidesPerGroup: 2,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.quick-sub .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.quick-sub .swiper-button-next',
        prevEl: '.quick-sub .swiper-button-prev',
      },
    });


  //스크롤이벤트 ========================================================
  $(window).scroll(function(){
    //스크롤의 위치 구하기
    windowTop=$(window).scrollTop();
    console.log(windowTop);

    //네비게이션 고정시키기
    //각영역이 시작되는 지점의 위치값 구하기
    a=$('#sec1').offset().top-110;
    b=$('#sec2').offset().top-110;
    c=$('#sec3').offset().top-110;
    d=$('#sec4').offset().top-110;

    console.log(windowTop, a);
    if(windowTop > (a-100)){//fixed클래스를 nav에 넣어주는 시점
      $('#goTop').addClass('on');
    }else{
      $('#goTop').removeClass('on');
    }

    //현재보고있는 영역을 네비게이션에 표시해주는 기능
    var index=0;
    //각영역의 범위에 들어왔을 때의 인덱스 구하기
    if(windowTop>=a && windowTop<b){//a영역
      index=0;
      $('#mainNavi').removeClass('style2');
    }else if(windowTop>=b && windowTop<c){//b영역
      index=1;
      $('#mainNavi').addClass('style2');
    }else if(windowTop>=c && windowTop<d){//c영역
      index=2;
      $('#mainNavi').addClass('style2');
    }else if(windowTop>=d){//d영역
      index=3;
      $('#mainNavi').addClass('style2');
    }

    //네비게이션의 활성화상태체크
    //1.active클래스값을 초기화
    //2.해당메뉴에 active클래스 적용
    $('#mainNavi li a').removeClass();
    $('#mainNavi ul li a').eq(index).addClass('active');

    //네비게이션 메뉴를 클릭했을 때 해당 영역으로 부드럽게 이동하기
    $('#mainNavi a').click(function(){
      var id=$(this).attr('href');
      $('html, body').stop().animate({
        scrollTop:$(id).offset().top-110
      },1000,'easeOutBounce');
    })

    //위로가기 ==================================================
    $('#goTop').click(function(){
      $('html, body').stop().animate({
        scrollTop:'0'
      },1000);
    })
  })//스크롤이벤트

  //최초한번 실행(scroll)
  $(window).trigger('scroll');

  // 검색팝업 ========================================================
  $('.util-nav .btn-search').click(function(e) {
    e.preventDefault();
    $('#search-popup').show();
    $('.popup-bg').show();
  })

  $('#search-popup .search-wrap > button').click(function() {
    $('#search-popup').hide();
    $('.popup-bg').hide();
  })


  function move() {
    // 첫번째 리스트가 접혀지고 난뒤
    $('#search-popup ul li').first().slideUp(function() {
      // 접혀진 요소를 리스트의 가장 마지막위치로 이동
      // ul의 가장 마지막 자식위치에 첫번째리스트를 옮긴다.
      // slideUp은 display:none;인 상태이므로
      // slideDown을 호출해서 display:block인 상태로 변경해서 다시 보이게끔 처리한다.
      $(this).appendTo($('#search-popup ul')).slideDown(); //this=.first() / append ->자식중의 마지막요소
    });
  }
  // 2초마다 롤링수행
  play=setInterval(move,2000);//일정시간마다 함수를 반복 실행

  $('#search-popup ul').on({
    // ul에 마우스를 올렸을 때 자동롤링 멈춤
    mouseenter:function() {
      clearInterval(play);
    },
    // ul의 영역을 벗어났을 때
    mouseleave:function(){
      play=setInterval(move,1000);
    },
  });

  //클릭하면 검색창에 보이기
  $('#search-popup .rolling a').click(function(e){
    e.preventDefault();
    var name=$(this).text();
    //console.log(name);
    $('#search-popup form input').val(name);
  })

  // family site - dropup ========================================
  $('.footer-right .select-wrap button').click(function(){
    $('.footer-right .select-wrap ul').slideToggle();
  })

  // 언어선택 -dropdown ==========================================
  $('.util-nav .select-wrap button').click(function(){
    $('.util-nav .select-wrap ul').slideToggle();
  })

  $('.util-nav .select-wrap a').click(function(e){
    e.preventDefault();
    var text=$(this).text();
    $('.util-nav .select-wrap button').text(text);
    $('.util-nav .select-wrap ul').slideUp();
  })

  // quick-menu ====================================================
  changePickupStoreMenu();

  function changePickupStoreMenu(){

      var body = $('.quick-menu'),
          mask = $('<div class="popup-bg"></div>'),
          toggleSlideLeft = $( ".quick-btn" );

      /* slide menu right */
      toggleSlideLeft.click(function(){
        $('.quick-btn').toggleClass('closed');
        body.toggleClass("open");
        $('.popup-bg').fadeToggle();
      })

      /* hide active menu if close menu button is clicked */
      $(document).on('click', ".quick-menu .btn-cancel ", function(el,i){
        $('.quick-btn').removeClass('closed');
          body.removeClass('open');
          $('.popup-bg').fadeOut();
      });

    }

  //비디오 플레이 버튼눌렀을 때 팝업띄우기
  $('.slide-wrap .play').click(function(e){
    e.preventDefault();
    $('#play-popup').show();
    $('.popup-bg').show();

    var title=$(this).parents('.slick-slide').find('img').attr('alt');
    var videosource=$(this).parents('.slick-slide').find('source').attr('src');

    //팝업에 있는 동영상의 제목과 시간 변경
    $('#play-popup h2').html(title);
    //팝업에 있는 동영상 소스 변경(로드)
    $('#play-popup source').attr('src',videosource);
    //영상을 바꾸고 로드진행(소스값만 변경하게되면 바뀐동영상으로 재생될 준비가 안되므로)
    $('#play-popup video')[0].load();

  })

  //닫기버튼을 눌렀을 때 팝업닫기
  $('#play-popup .btn-cancel').click(function(){
    $('#play-popup').hide();
    $('.popup-bg').hide();
    $('#play-popup video')[0].pause();
  })


});
