$(function() {
	$("#head").load("../../puplic/header.html", function() {
		$(".header a").each(function(i, v) {
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

//展开折叠
$(function() {
	$("#category-hide").toggle(function() {
		$(this).parent().next().addClass("category-hide-show");
	}, function() {
		$(this).parent().next().removeClass("category-hide-show");
	})
})
//展开折叠
$(function() {
	$(".subpage-show").click(function() {
		$(this).children().next().addClass("category-hides");
	})
	$(".category-icon").click(function() {
		$(this).parent().addClass("category-hidess")
	})
})
// 动画插件
$(function() {
	window.scrollReveal = new scrollReveal();
})
// 放大镜
$(function() {
	$("#zoom_01").ezPlus();
})

/*点击左侧产品小图片切换大图*/
$(function() {
	$(".products-main-top-left-smallimg div img").livequery("click", function() {
		var imgSrc = $(this).attr("src"); //图片路径
		var i = imgSrc.lastIndexOf("."); //返回.最后出现的位置
		var unit = imgSrc.substring(i); //文件扩展名
		imgSrc = imgSrc.substring(0, i); //文件主名

		var imgSrc_small = imgSrc + "_small" + unit;
		var imgSrc_big = imgSrc + "_big" + unit;
		$("#zoom_01").attr({
			"src": imgSrc_small,
			"jqimg": imgSrc_big
		});
		$("#thickImg").attr("href", imgSrc_big);
	});
});
$(function() {
	$(".products-main-top-left-smallimg>div:first").css("border", "1px solid red")
	$(".products-main-top-left-smallimg>div").click(function() {
		$(this).css("border", "1px solid red").siblings().css("border", "0")
	})
})
$(function() {
	$(".fs").show().siblings().hide()
	$(".products-tab span").click(function() {
		$(this).addClass("on")
			.siblings().removeClass("on");
		$(".products-main-top-left-img img").hide().eq($(this).index()).fadeTo("fast", 1).addClass("fs")
	})
})
