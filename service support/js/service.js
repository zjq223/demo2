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
$(function(){
	$("#suspen").load("../puplic/suspension.html")

})
$(function(){
		// 动画插件js
	window.scrollReveal = new scrollReveal();
})