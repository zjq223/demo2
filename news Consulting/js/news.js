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
		$(this).parent().removeClass("category-hides")
	})
})
// json
$(function() {
	$.getJSON("js/news.json", function(data) {
		var $jsontip = $("#jsonTip")
		
		var $ul = $("<ul></ul>")
		$.each(data, function(i, v) {
			$li = $("<li></li>")
			$con = $("<div class='jsoncon'></div>")
			$left = $("<div class='jsonleft'></div>")
			$time = $("<h3>" + v.time + "</h3>")
			$i = $("<i class='iconfont icon-zhixiangyou'></i>")
			$right = $("<div class='jsonright'></div>")
			$title = $("<a>" + v.title +"</a>")
			$paragraph = $("<span>" + v.paragraph +"</span>")
			$img = $("<div class='jsonimg'></div>")
			$images = $("<img src= " + v.images + ">")
			$left.append($time, $i)
			$right.append($title, $paragraph)
			$con.append($left,$right)
			$img.append($images)
             $li.append($con,$img)
			 $ul.append($li)
			 $jsontip.append($ul)
		})
	})
})
// 动画插件
$(function(){
	window.scrollReveal = new scrollReveal();
})
// 分页器
$(function(){
	// 形成内容并实现下一页功能
	    var curPage = $("#page").attr("data-page");
	    var url = $("#page").attr("data-cat");
	
	let xlPaging = new Paging('page', {
		nowPage: Number(curPage), // 当前页码
		pageNum: 17, // 总页码
		buttonNum: 3, //要展示的页码数量
		showOne: 1, //只有一页时，是否显示。0=不显示,1=显示（默认）
		callback: function(num) { //回调函数
			window.location.href = url+num+".html"
		}
	})
})
