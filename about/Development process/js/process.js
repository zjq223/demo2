$(function() {
	$("#head").load("../../puplic/header.html", function() {
		$(".header a").each(function(i, v) {
			console.log($(".header a"))
			$(v).attr("href", "../../" + $(v).attr("href") + "")
		})
	})
})
$(function() {
	$("#foot").load("../../puplic/footer.html", function() {
		$(".footer a").each(function(i, v) {
			$(v).attr("href", "../../" + $(v).attr("href") + "")
		})
	})

})
$(function() {
	$("#suspen").load("../../puplic/suspension.html")
})
// 动画插件
$(function() {
	window.scrollReveal = new scrollReveal();
})
$(function() {
	var modifier = 2; //每天的px
	var historyList = [{
			"detail": "成立精基科技有限公司(集团)",
			"date": "2015"
		},
		{
			"detail": "2007年7月，jQuery 1.1.3版发布",
			"date": "2015-02-01"
		},
		{
			"detail": "2008年5月，jQuery 1.2.6版发布",
			"date": "2015-02-26"
		},
		{
			"detail": "2009年9月，微软和诺基亚公司正式宣布支持开源的jQuery库",
			"date": "2015-03-06"
		},
		{
			"detail": "2010年2月，jQuery 1.4.2版发布，它新增了有关事件委托的两个方法",
			"date": "2016-01-10"
		},
		{
			"detail": "jQuery的选择机制构建于Css的选择器",
			"date": "2016-05-27"
		},
		{
			"detail": "jQuery中内置了一系列的动画效果，可以开发出非常漂亮的网页",
			"date": "2016-10-16"
		},
		{
			"detail": "AJAX是异步的JavaScript和ML的简称，可以开发出非常灵敏无刷新的网页",
			"date": "2017-01-19"
		},
	];

	var mySwiper = new Swiper('#swiper-history .swiper-container', {
		virtualTranslate: true,
		preventClicks: false,
		prevButton: '#swiper-history .swiper-button-prev',
		nextButton: '#swiper-history .swiper-button-next',
		pagination: '#swiper-history .swiper-pagination',
		paginationClickable: true,
		paginationBulletRender: function(swiper, index, className) {
			if (index > 0) {
				day1 = new Date(historyList[index]['date'].replace(/-/g, "/"));
				day2 = new Date(historyList[index - 1]['date'].replace(/-/g, "/"));
				time = day1 - day2
				marginLeft = parseInt(time / (1000 * 60 * 60 * 24)) * modifier;
			} else {
				marginLeft = 0
			}

			return '<span class="' + className + '" style="margin-left:' + marginLeft +
				'px;"></span>';
		},

		onInit: function(swiper) {
			mySlides = '';
		 for (var i = 0; i < historyList.length; i++) {
				swiper.appendSlide('<div class="swiper-slide slide' + i +
					'"><span class="detail">' + historyList[i]['detail'] +
					'</span><span class="date">' + historyList[i]['date'] + '</span></div>');
				swiper.slides[i].style.transform = 'translate3d(' + (-i) * swiper.width +
					'px, 0px, 0px)';
			}
			swiper.slideTo(3);
		},
		onSlideChangeStart: function(swiper) {
			detailPrev = swiper.slides[swiper.previousIndex].querySelector('.detail');
			datePrev = swiper.slides[swiper.previousIndex].querySelector('.date');
			detailPrev.offsetHeight;
			datePrev.offsetHeight;
			swiper.slides[swiper.previousIndex].style.zIndex = 1;
			detailPrev.style.opacity = datePrev.style.opacity = 0;
			detailPrev.style.transform = datePrev.style.transform = 'translate3d(0px, 0px, 0px)';

			detailActive = swiper.slides[swiper.activeIndex].querySelector('.detail');
			dateActive = swiper.slides[swiper.activeIndex].querySelector('.date')
			detailActive.offsetHeight;
			dateActive.offsetHeight;
			swiper.slides[swiper.activeIndex].style.zIndex = 999;
			detailActive.style.opacity = dateActive.style.opacity = 1;
			detailActive.style.transform = 'translate3d(0px, 10px, 0px)';
			dateActive.style.transform = 'translate3d(0px, -10px, 0px)';

			moveDay1 = new Date(historyList[swiper.activeIndex]['date'].replace(/-/g, "/"));
			moveDay2 = new Date(historyList[0]['date'].replace(/-/g, "/"));
			moveTime = moveDay1 - moveDay2
			moveDistance = parseInt(moveTime / (1000 * 60 * 60 * 24)) * modifier + 10 * swiper
				.activeIndex;
			move = swiper.width / 2 - 5 - moveDistance;

			swiper.paginationContainer[0].style.left = move + 'px';

		},
	});

})
// 展开收起
$(function(){
	$(".subpage-show").click(function(){
		$(this).children().next().addClass("category-hides");
	})
	$(".category-icon").click(function(){
		$(this).parent().addClass("category-hidess")
	})
})
// 展开收起
$(function(){
	$("#category-hide").toggle(function(){
		$(this).parent().next().addClass("category-hide-show");
	},function(){
		$(this).parent().next().removeClass("category-hide-show");
	})
})
