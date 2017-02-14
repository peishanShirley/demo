$(function () {
	// 响应式轮播器
	$(window).load(function() {
		$('#myCarousel .carousel-control').css('line-height', $('.carousel-inner img').height() + 'px');
	});
	$(window).resize(function() {
		var $height = $('.carousel-inner img').eq(0).height() ||
					  $('.carousel-inner img').eq(1).height() ||
					  $('.carousel-inner img').eq(2).height();
		$('#myCarousel .carousel-control').css('line-height', $height + 'px');
	});
	$('#myCarousel').carousel({
		interval: 3000,
	});
	// 首页内容响应式,控制文本垂直居中
	$(window).load(function() {
		$('.content-text').eq(0).css('margin-top', ($('.content-img').eq(0).height() - $('.content-text').eq(0).height()) / 2 + 'px');	
	});
	$(window).resize(function() {
		$('.content-text').eq(0).css('margin-top', ($('.content-img').eq(0).height() - $('.content-text').eq(0).height()) / 2 + 'px');
	});
	$(window).load(function() {
		$('.content-text').eq(1).css('margin-top', ($('.content-img').eq(1).height() - $('.content-text').eq(1).height()) / 2 + 'px');
	});
	$(window).resize(function() {
		$('.content-text').eq(1).css('margin-top', ($('.content-img').eq(1).height() - $('.content-text').eq(1).height()) / 2 + 'px');
	});
});
