$(function(){
	
	
	$('img').hover(function(){
		var src = $(this).attr('src');	
			// attr : 속성을 불러오거나, 변경할 때 사용
			// 버튼에 마우스 커서를 올렸을때(속성 불러오기) 세가지 버튼을 src 변수에 담음
		$(this).attr('src',src.replace('off', 'on'));
	},
	function(){
		var src = $(this).attr('src');
		$(this).attr('src',src1.replace('on', 'off'));

	})
})	
