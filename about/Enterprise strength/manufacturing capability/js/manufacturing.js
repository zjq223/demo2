$(function() {
	$("#head").load("../../../puplic/header.html", function() {
		$(".header a").each(function(i, v) {
			console.log($(".header a"))
			$(v).attr("href", "../../../" + $(v).attr("href") + "")
		})
	})
})
$(function() {
	$("#foot").load("../../../puplic/footer.html", function() {
		$(".footer a").each(function(i, v) {
			$(v).attr("href", "../../../" + $(v).attr("href") + "")
		})
	})

})
$(function(){
	$("#suspen").load("../../../puplic/suspension.html")
})
//展开折叠
$(function(){
	$("#category-hide").toggle(function(){
		$(this).parent().next().addClass("category-hide-show");
	},function(){
		$(this).parent().next().removeClass("category-hide-show");
	})
})
//展开折叠
$(function(){
	$(".subpage-show").click(function(){
		$(this).children().next().addClass("category-hides");
	})
	$(".category-icon").click(function(){
		$(this).parent(".category-hides").remove();
	})
}) 
// 动画插件
$(function(){
	window.scrollReveal = new scrollReveal();
})