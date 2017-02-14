$(function() {
	// 初始化
	$('.page-content').eq($('.active').index('.pagination a')).css('display', 'block');

	var acindex=$('.active').index('.pagination a');
	var length = $('.pagination a').length;
	$('.pagination').on('click', 'a', function() {
		$('.page-content').css('display','none');
		$('.page-content').eq($(this).index()-1).css('display','block');
		$('.pagination a').removeClass('active');
		$('.pagination a').eq($(this).index()-1).addClass('active');
		acindex =  $('.active').index('.pagination a');
	});
	// 上一页
	$('.prev').on('click', function() {
		if(acindex > 0) {
			if(acindex <= $('.pagination a').length - length) {
				$('.pagination a').eq(acindex+(length-1)).css('display','none');
				$('.pagination a').eq(acindex-1).css('display','inline-block');
			}
			$('.page-content').css('display','none');
			$('.page-content').eq(acindex-1).css('display','block');
			$('.pagination a').removeClass('active');
			$('.pagination a').eq(acindex-1).addClass('active');
			acindex =  $('.active').index('.pagination a');
			
		}
	});
	// 下一页
	// 动态生成分页标签
	if (length < $('.page-content').length) {
		for(var i = 0; i < $('.page-content').length-length; i++) {
			var anode = $('<a href="javascript:void(0)" style="margin-right:5px;display:none;">'+ (length+i+1) +'</a>');
			$('.next').before(anode);
		}
	}
	$('.next').on('click', function() {
		if (acindex < $('.pagination a').length - 1) {
			$('.page-content').css('display','none');
			$('.page-content').eq(acindex+1).css('display','block');
			$('.pagination a').removeClass('active');
			$('.pagination a').eq(acindex+1).addClass('active');
			acindex =  $('.active').index('.pagination a');
			if(acindex >= length) {
				$('.pagination a').eq(acindex-length).css('display','none');
				$('.pagination a').eq(acindex).css('display','inline-block');
			}
		} 
	});
});