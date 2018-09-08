$(document).ready(function(){

	$('form').on('submit', function(e){
		e.preventDefault();
		var value = $('input').val().trim(' '),
				data = {item: value};
		$.ajax({
			type: 'post',
			data: data,
			url: '/todo',
		success: function(data){
			$('input').val('');
			location.reload();
		}		
		});
	});

	$('li').on('click',function(){
		var value = $(this).text().trim(' ');
		$.ajax({
				type: 'delete',
				url: '/todo/'+value,
			  success: function(data){
			  	location.reload();
			  }	
		})
	})

});