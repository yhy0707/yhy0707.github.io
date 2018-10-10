$(document).ready(function(e) {
  var pd_slider={
    '#tab1':[
      ['img/tab01-01.jpg', 'img/tab01-02.jpg','img/tab01-03.jpg', 'img/tab01-04.jpg','img/tab01-05.jpg','img/tab01-06.jpg','img/tab01-07.jpg','img/tab01-08.jpg','img/tab01-09.jpg','img/tab01-10.jpg'],
      ['달콤한 초코 슈과자', '부드러운 리얼 케이크', '크래커의 대명사', '64겹 페스츄리', '부드럽고 바삭한', '시나몬의 향긋함과 달콤함', '부드러운 롤웨하스 속에 초코', '리얼초콜릿과 바삭한 스틱', '과일쨈이 듬뿍', '부드러운 쿠키'],
      ['홈런볼', '오예스', '에이스', '후렌치파이 그레이프', '치즈 웨하스', '프리츠 시나몬', '롤리폴리', '포키', '후렌치파이', '버터링']
    ],
    '#tab2':[
      ['img/tab02-01.jpg', 'img/tab02-02.jpg','img/tab02-03.png', 'img/tab02-04.png','img/tab02-05.jpg','img/tab02-06.jpg','img/tab02-07.jpg','img/tab02-08.png','img/tab02-09.jpg','img/tab02-10.jpg'],
      ['맛동산 먹고 즐거운 파티', '달콤한 맛이 일품인 감자칩', '벚꽃향을 담은', '진하게 달콤한', '새우맛이 풍부한', '두꺼운 감자스틱', '고소하고 짭조름한', '매콤하고 바삭한', '땅콩이 통째로', '달콤짭짤한'],
      ['맛동산', '허니버터칩', '허니버터칩 체리블라썸', '허니버터칩 메이플시럽', '빠새', '자가비', '감자칩 명란마요', '불낙신낙', '오징어땅콩', '타코야끼볼']
    ],
    '#tab3':[
      ['img/tab03-01.jpg', 'img/tab03-02.jpg','img/tab03-03.jpg', 'img/tab03-04.jpg','img/tab03-05.jpg','img/tab03-06.jpg','img/tab03-07.jpg','img/tab03-08.jpg','img/tab03-09.jpg','img/tab03-10.jpg'],
      ['입 속의 상쾌함', '솜사탕과 껌의 만남', '청정얼음같은 상쾌함', '대한민국 1등 초코바', '전통 밀크 초콜릿', '엄마의 마음을 담은 초콜릿', '70년 전통의 맛', '상큼한 맛이 가득한', '달콤한 과즙쨈이 듬뿍', '멈출수 없는 신맛'],
      ['자일리톨', '솜사탕껌', '아이스쿨 라임', '자유시간', '젠느', '초코맘', '영양갱', '자두캔디', '선키스트', '신쫄이 딸기맛']
    ],
    '#tab4':[
      ['img/tab04-01.jpg', 'img/tab04-02.jpg','img/tab04-03.jpg', 'img/tab04-04.jpg','img/tab04-05.png','img/tab04-06.jpg','img/tab04-07.jpg','img/tab04-08.jpg','img/tab04-09.jpg','img/tab04-10.jpg'],
      ['12시에 만나요', '진하고 풍부한', '상큼하고 달콤한', '딸기 시럽이 듬뿍', '새콤한베리', '달콤한 코코아', '입안에서 사르르', '체리맛의 꼭대기', '아삭아삭 상큼한', '시원한 팥빙수'],
      ['부라보 바닐라콘', '녹차마루', '젤루조아 백도', '아이스쿨 딸기', '블루베리바', '토피넛샌드', '누가바', '체리마루', '모히또바', '팥빙수 플러스']
    ],
    '#tab5':[
      ['img/tab05-01.jpg', 'img/tab05-02.jpg','img/tab05-03.jpg', 'img/tab05-04.jpg','img/tab05-05.jpg','img/tab05-06.jpg','img/tab05-07.jpg','img/tab05-08.jpg','img/tab05-09.jpg','img/tab05-10.jpg'],
      ['고향의 맛', '더욱 커지고 맛있어진', '오감만족 영양간식', '구워도 쫄깃한 맛', '담백한 콩두부', '자연가득', '자연이 허락한 만큼', '잡채가득', '깔끔하고 쫄깃한', '육즙풍부'],
      ['고향만두', '고향만두왕교자플러스', '콘치즈톡톡', '모찌수교자', '두부왕교자', '갈비교자만두', '순% 소담만두', '잡채가득 군만두', '자연담은 물만두', '사랑그대로샤오롱']
    ]
  };

  var swiper = new Swiper('#tab-contents .swiper-container', {
      slidesPerView: 7,
      slidesPerGroup:7,
      loop: true,
      pagination: {
        el: '#tab-contents .swiper-pagination',
        clickable: true,
      },
    });


  $('.tab-type03 ul li a').on({
    click: function(e) {
      e.preventDefault();
      $('.tab-type03 ul li a').removeClass();
      $(this).addClass('on');
      $('#tab-contents .swiper-wrapper').empty();
      var tabMenu=$(this).attr('href');
      //console.log(tabMenu);
      var size=pd_slider[tabMenu][0].length;
      //console.log(size);
      var el='';
      for (var i = 0; i < size; i++) {
        el+='<div class="swiper-slide"><a href="#"><img src="'+pd_slider[tabMenu][0][i]+'" alt="">'
          +'<span>'+pd_slider[tabMenu][1][i]+'</span><strong>'+pd_slider[tabMenu][2][i]+'</strong></a></div>';
      }
      $('#tab-contents .swiper-wrapper').html(el);
      swiper.update();
    }
  });

  var size=pd_slider['#tab1'][0].length;
  var el='';
  for (var i = 0; i < size; i++) {
    el+='<div class="swiper-slide"><a href="#"><img src="'+pd_slider['#tab1'][0][i]+'" alt="">'
      +'<span>'+pd_slider['#tab1'][1][i]+'</span><strong>'+pd_slider['#tab1'][2][i]+'</strong></a></div>';
  }
  $('#tab-contents .swiper-wrapper').html(el);
  swiper.update();

});
