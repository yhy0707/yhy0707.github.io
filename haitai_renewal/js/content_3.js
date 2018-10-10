!function($) {
	var now = {}

	now.slide = function() {
		var now = {
			slideNm: ".slide",
			slidebarNm: ".slidebar",
			slideTxt: ["공지사항", "이벤트", "해태영상", "보도자료", "해태뉴스"],
			slideOpt: {
				dots: true,
				infinite: true,
				speed: 800,
				autoplay: true,
				autoplaySpeed: 1500,
				slidesToShow: 3,
				slidesToScroll: 1,
				centerMode: true,
				pauseOnHover: false,
				pauseOnFocus: false,
				appendDots: ".slidebar",//탐색 점이 연결되는 위치 변경
				customPaging: function(slider, i) {//사용자 지정 페이징 템플릿.
					return "<button type='button' data-index='" + i + "'>" + now.slideTxt[i/3] + "</button>";
				},
				responsive: [
					{
						breakpoint: 767,
						settings: {
							dots:false,
							slidesToShow: 1,
							centerPadding: '45px'
						}
					}
				]
			},
			pauseFlag: false,
			total: 0,
			timer: null//타이머없음
		}

		return {
			_init: function($body) {
				var self = this;

				self = $.extend(true, self, now);

				self.$container = $body;
				self.$slide = self.$container.find(self.slideNm);
				self.$slideBar = self.$container.find(self.slidebarNm);

				self._setEvent();

				self.$slide.slick(self.slideOpt);

				self.$slideBar.find(".slick-dots button").eq(0).addClass("active");
			},
			_setEvent: function() {
				var self = this;

				self.$slide.on('init', function(slick) {
					self.total = self.$slide.find(".slick-slide:not(.slick-cloned)").length;
					self.$slideBar.append("<span class='slidepage'><em>01</em> \/ " + self.total + "</span>");
				});

				self.$slide.on('afterChange', function(event, slick, currentSlide) {
					var $loadingBar = null,
						percent = 0;

					clearTimeout(self.timer);

					if ((currentSlide + 1) % 3 == 0) {
						$loadingBar = self.$slideBar.find(".bar");
						$loadingBar.stop();

						percent = (parseInt(currentSlide / 3) + 1) * 25;

						if (percent > 100) {
							self.timer = setTimeout(function() {
								$loadingBar.css({width: 0});

								self.$slideBar.find(".slick-dots button").removeClass("active");
								self.$slideBar.find(".slick-dots button").eq(currentSlide).addClass("active");
							}, 1500);
						} else {
							$loadingBar.animate({width: percent  + "%"}, 1500, function() {
								self.$slideBar.find(".slick-dots button").removeClass("active");
								self.$slideBar.find(".slick-dots button").eq(currentSlide).addClass("active");
							});
						}
					}
				});

				self.$slide.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
					var $loadingBar = null,
						percent = 0,
						page = nextSlide + 1;

					clearTimeout(self.timer);

					self.$slideBar.find(".slidepage em").html(page < 10 ? "0" + page : page);

					if (nextSlide % 3 == 0) {
						$loadingBar = self.$slideBar.find('.bar');
						$loadingBar.stop();

						percent = parseInt(nextSlide / 3) * 25;

						if (percent > 100) {
							$loadingBar.css({width: 0});
							self.$slideBar.find(".slick-dots button").removeClass("active");
							self.$slideBar.find(".slick-dots button").eq(nextSlide).addClass("active");
						} else {
							$loadingBar.css({width: percent + "%"});
							self.$slideBar.find(".slick-dots button").removeClass("active");
							self.$slideBar.find(".slick-dots button").eq(nextSlide).addClass("active");
						}
					}
				});

				self.$slideBar.find('.btn-stop').on('click', function() {
					var $loadingBar = self.$slideBar.find('.bar'),
						curIndex = self.$slide.slick('slickCurrentSlide'),
						dotIndex = parseInt(curIndex / 3);

					clearTimeout(self.timer);

					self.pauseFlag = !self.pauseFlag;

					if (!self.pauseFlag) {

						if (self.total - 1 == curIndex) {
							self.$slide.slick('slickPlay');
						} else {
							if ((curIndex + 1) % 3 == 0) {
								$loadingBar.stop().animate({width: (dotIndex+1)*25+"%"}, 1500, function() {
									self.$slide.slick('slickPlay');
								});
							} else {
								self.$slide.slick('slickPlay');
							}
						}
            $(this).find('.skip').text('정지');
					} else {
						self.$slide.slick('slickPause');
            $(this).find('.skip').text('재생');
						$loadingBar.stop().css({width: dotIndex*25+"%"});
					}

					$(this).toggleClass('stoped');
          $(this).find('i').toggleClass('fa-pause fa-play');
				});
			}
		};
	}();

  $(function() {
  	now.slide._init($(".slide-wrap"));
  });
}(window.jQuery);
