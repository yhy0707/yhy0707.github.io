$(document).ready(function(e) {
  var image_maps={
    'ice1':[
      ['img/ice-01.jpg', 'img/ice-02.jpg','img/ice-03.jpg'],
      ['청포도', '쌍쌍바', '쌍쌍바포도']
    ],
    'ice2':[
      ['img/ice-04.jpg', 'img/ice-05.jpg', 'img/ice-06.jpg'],
      ['부라보콘', '토마토마', '하이카카오']
    ],
    'candy1':[
      ['img/candy-01.jpg', 'img/candy-02.jpg','img/candy-03.jpg'],
      ['영양갱', '썬키스트', '자두캔디']
    ],
    'candy2':[
      ['img/candy-04.jpg', 'img/candy-05.jpg','img/candy-06.jpg'],
      ['자유시간', '젠느', '초코맘']
    ],
    'candy3':[
      ['img/candy-07.jpg', 'img/candy-08.jpg','img/candy-09.jpg'],
      ['알사탕', '쿨피치젤리', '쿨망고젤리']
    ],
    'snack1':[
      ['img/snack-01.jpg', 'img/snack-02.jpg','img/snack-03.jpg'],
      ['맛동산', '빠새', '타코야끼볼']
    ],
    'snack2':[
      ['img/snack-04.jpg', 'img/snack-05.png','img/snack-06.jpg'],
      ['감자칩 명란마요맛', '화낙신낙', '구운양파']
    ],
    'snack3':[
      ['img/snack-07.jpg', 'img/snack-08.jpg','img/snack-09.jpg'],
      ['오사쯔', '컨츄리콘', '자가비']
    ],
    'biscuit1':[
      ['img/biscuit-01.jpg', 'img/biscuit-02.jpg','img/biscuit-03.jpg'],
      ['웨하스', '오예스', '에이스']
    ],
    'biscuit2':[
      ['img/biscuit-04.jpg', 'img/biscuit-05.jpg','img/biscuit-06.jpg'],
      ['홈런볼', '아이비', '버터링']
    ],
    'gum':[
      ['img/gum-01.jpg', 'img/gum-02.jpg','img/gum-03.jpg'],
      ['솜사탕껌', '자일리톨', '아카시아']
    ],
    'food':[
      ['img/food-01.jpg', 'img/food-02.jpg','img/food-03.jpg'],
      ['고향만두', '왕교자', '콘치즈톡톡']
    ],
    'honey':[
      ['img/honey-01.jpg', 'img/honey-02.png','img/honey-03.png'],
      ['허니버터칩', '허니버터칩 메이플시럽', '허니버터칩 체리블라썸']
    ]
  };

  $('area').on({//이벤트 연결시 사용
    click: function(e) {
      $('.image-map-popup ul').empty();
      var areaTitle=$(this).attr('alt');
      console.log(areaTitle);
      var size=image_maps[areaTitle][0].length;//배열의크기구하기.0번째부터
      console.log(size);
      var el='';
      // 반복문
      for (var i = 0; i < size; i++) {
        //0번째:이미지소스, 1번째:제품명
        el+='<li><a href="#"><img src="'+image_maps[areaTitle][0][i]+'" alt="">'
          +'<div class="over"><div class="wrap">'+image_maps[areaTitle][1][i]+'</div></div></a></li>';
      }
      $('.image-map-popup ul').html(el);
      $('.image-map-popup').css({
        // client : 보이는 화면기준-디바이스(스크롤무시)
        left:e.clientX,
        top:e.clientY
      }).show();
    }
  });

  $('.image-map-popup .btn-close').click(function(){
    $('.image-map-popup ul').empty();
    $('.image-map-popup').hide();
  })

});
