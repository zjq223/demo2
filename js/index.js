$(function() {
	$("#head").load("puplic/header.html")
})
$(function() {
	$("#foot").load("puplic/footer.html")
})
$(function() {
	$("#suspen").load("puplic/suspension.html")
})
// 轮播图
$(function() {
	var swiper1 = new Swiper(".mySwiper1", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		autoplay: true,
		speed: 1500,
		effect: 'fade',
		pagination: {
			el: ".mySwiper1 .swiper-pagination",
			clickable: true,
		},
		on: {
			slideChangeTransitionStart() { //滑动开始  开始展示图片
				// 获取当前swiper-slide 的索引
				var index = this.activeIndex;
				// text 隐藏  根据swiper-slide 的索引找到对应的text
				var textDOM = document.querySelectorAll(".text")[index];
				textDOM.style.opacity = "0";
				textDOM.style.transform = "translateY(100%)";
			},
			slideChangeTransitionEnd() { // 滑动结束  展示图片完毕
				var index = this.activeIndex;
				// text 隐藏
				var textDOM = document.querySelectorAll(".text")[index]
				// text 展示
				textDOM.style.opacity = "1";
				textDOM.style.transform = "translateY(-30%)";
			}
		}

	});

	var pages = document.querySelectorAll(".mySwiper span");
	for (var i = 0; i < pages.length; i++) {
		pages[i].index = i;
		pages[i].onclick = function() {

			console.log(this.index)
			/* 让轮播图滑到当前鼠标移入的分页器所展示的对应的图 */
			swiper.slideTo(this.index, 980, false)
			// 改变索引提示
			currentIndex.innerHTML = "0" + (this.index + 1)
			pages.innerHTML = "0" + pages.length
		}
		// let index = i;
	}
	var swiper4 = new Swiper(".mySwiper4", {
		loop: true,
		slidesPerView: 3, //'auto'

		autoplay: {
			delay: 3000,
			stopOnLastSlide: true,
			disableOnInteraction: true,
		},
		// 间距
		//spaceBetween: 150,
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			767: {
				slidesPerView: 2,
				spaceBetween: 60,
			},
			1023: {
				slidesPerView: 3,
				spaceBetween: 130,
			},
		},
	});
	var swiper5 = new Swiper(".mySwiper5", {
		loop: true,
		autoplay: {
			delay: 4000,
			stopOnLastSlide: true,
			disableOnInteraction: true,
		},
		// 间距
		//spaceBetween: 150,
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			767: {
				slidesPerView: 2,
				spaceBetween: 22,
			},
			1023: {
				slidesPerView: 4,
				spaceBetween: 22,
			},
		},
	});
})
// 关于精基

// 动画插件
$(function() {
	window.scrollReveal = new scrollReveal();
})
// json
// $(function() {
// 	//左侧
// 	$.getJSON("js/news.json", function(data) {
// 		var $jsontip = $("#press-jsonTip")
// 		var $left = $("<div class='press-left'></div>")
// 		$.each(data, function(i, v) {
// 			$images = $("<img src= " + v.images + ">")
// 			$titboxcon = $("<div class='titbox titbox-hover'></div>")
// 			$titbox = $("<div class='titbox-left titbox-leftss'></div>")
// 			$time = $("<span>" + v.time + "</span>")
// 			$times = $("<p>" + v.times + "</p>")
// 			$titboxs = $("<div class='titbox-right'></div>")
// 			$title = $("<h3>" + v.title + "</h3>")
// 			$paragraph = $("<span>" + v.paragraph + "</span>")
// 			$titboxs.append($title, $paragraph)
// 			$titbox.append($time, $times)
// 			$titboxcon.append($titbox, $titboxs)
// 			$left.append($images, $titboxcon)
// 			$jsontip.append($left)
// 		})
// 	})
// })
//右侧
$(function() {
	$.getJSON("js/press.json", function(data) {
		var $jsontip = $("#press-jsonTip")
		var $right = $(".press-right")
		var $ul = $("<ul></ul>")
		$.each(data, function(i, v) {
			$li = $("<li></li>")
			$a = $(
				"<a href='https://mp.weixin.qq.com/s?__biz=MzUzMDkxMjA1MA==&mid=2247487940&idx=1&sn=87f72c7b122f3b8e574abc681131a8e3&chksm=fa4bd799cd3c5e8fd25e6764fecd058ef70b6bfa040efaad8a6348d833ae4bf32b0447db2520&token=605556777&lang=zh_CN#rd'></a>"
				)
			$titboxcon = $("<div class='titbox'></div>")
			$titbox = $("<div class='titbox-left titbox-lefts'></div>")
			$time = $("<span>" + v.time + "</span>")
			$times = $("<p>" + v.times + "</p>")
			$titboxs = $("<div class='titbox-right'></div>")
			$title = $("<h3>" + v.title + "</h3>")
			$paragraph = $("<span>" + v.paragraph + "</span>")
			$titbox.append($time, $times, $titboxs)
			$titboxcon.append($titbox, $titboxs)
			$titboxs.append($title, $paragraph)
			$a.append($titboxcon)
			$li.append($a)
			$ul.append($li)
			$right.append($ul)
			$jsontip.append($right)
		})
	})
})
// 设备展示缩小到769一下点击产品分类展示折叠

$(function() {
	$(".equipment-content-con h3").toggle(function() {
		var $self = $(this);
		$self.next().stop(true, true).slideToggle(200);
	}, function() {
		var $self = $(this);
		$self.next().stop(true, true).slideToggle(200);
	});
})

// 回到顶部
$(function() {
	$("#scroll").click(function() {
		$("body,html").animate({
			scrollTop: 0,
		}, 800);
	})
});
