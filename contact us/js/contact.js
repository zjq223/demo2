$(function() {
	$("#head").load("../puplic/header.html", function() {
		$(".header a").each(function(i, v) {
			console.log($(".header a"))
			$(v).attr("href", "../" + $(v).attr("href") + "")
		})
	})
})
$(function() {
	$("#foot").load("../puplic/footer.html", function() {
		$(".footer a").each(function(i, v) {
			$(v).attr("href", "../" + $(v).attr("href") + "")
		})
	})

})
$(function() {
	$("#suspen").load("../puplic/suspension.html")
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
// 表单验证
$(function(){
	$("#item_30").blur(function(){
		if($("#item_30").val() == ""){
			$(this).siblings().text("留言不能为空")
			return false;
		}else{
			$(this).siblings().text("")
			return false
		}
	})
	$("#button").click(function(){
		if($("#item_30").val() == ""){
			$(this).parent().prev().prev().children().next().text("留言不能为空")
			$(this).parent().next().css("display","none")
			return false;
		}else{
			$(this).parent().next().css("display","block")
			setTimeout(function(){
				location.reload()
			},1000)
			return true;
			
		}
	})
})
$(function(){
	$(".subpage-bo ul li a").each(function(i, v) {
		$(v).attr("href", "../" + $(v).attr("href") + "")
	})
})
