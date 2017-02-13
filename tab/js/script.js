$(function() {
	// 初始化，让类.active显示
	$('.tab-content').eq($('.active').index('.tab li')).css('display','block');
	$('.tab li').on('click', function() {
		// 先将所有内容都隐藏
		$('.tab-content').css('display','none');
		// 再讲切换的内容显示
		$('.tab-content').eq($(this).index()).css('display','block');

		// 修改CSS样式
		$('.tab li').removeClass('active');
		$(this).addClass('active');
	});
});