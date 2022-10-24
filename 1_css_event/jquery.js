$(function(){
	let intro = $('#intro');
	let img = intro.find('#image');
	$('#hideButton').click(function(){
		img.hide();
	});
		
	$('#showButton').click(function(){
		img.show();	
	});
		
	$('#toggleButton').click(function(){
		// img.toggle();	
		if($('#intro').is(':visible'))
		{
			$('#intro').fadeOut(1000);
		}else{
			$('#intro').fadeIn(1000);
		}
	});
	
	// 테이블의 내용 중 홀수행을 배경색 지정
	// 홀수행 : 0번 부터 시작하므로 짝수행을 의미하는 even 을 사용해야함.
	// $('#celebs table.data > tbody >tr:even').css({'background':'lightblue'});
	$('#celebs table.data > tbody >tr:even').addClass('table_striping')
		// 직접 스타일을 지정하지 않고 css 파일의 테이블 줄바꾸는 클래스를 추가함.
		
	// 마우스가 올라갔을때 배경색 바뀌고 다시 나오면 원상복귀	
	let tab = $('#celebs table.data > tbody >tr')	// '#celebs tr' 동일
		tab.hover(function(){
			tab.addClass('td_mouseover');
			}, function(){
				tab.removeClass('td_mouseover');
			})
		
	})
		
		
		
		
	
	
	
	
	
