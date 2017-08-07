$(document).ready(function() {

	$('#formlogin').submit(function(){

		var form = new FormData();
		form.append("name", $('#nome').val());
		form.append("email", $('#email').val());
		form.append("phone", $('#phone').val());

		$.ajax({
			crossDomain: true,
			url: "http://52.52.212.162:8001/api/login",
			method: "POST",
			headers: {
				"content-type": "application/json",
				"cache-control": "no-cache",
			},
			processData: false,
			data: '{"email":"pizza@pizzanaroca.com.br","password":"pizza153"}',
			success: function (result){
				var token = 'Bearer '+result.token;
				console.log(token);

				$.ajax({
					crossDomain: true,
					url: "http://fasow.soitic.com.br//api/inbound",
					method: "POST",
					headers: {
						"authorization": token,
						"cache-control": "no-cache"
					},
					"processData": false,
					"contentType": false,
					"mimeType": "multipart/form-data",
					data: form,
					success: function(result){
						$('.concluido').show();
						$("#formlogin input").prop("disabled", true);
					}
				});

			}
		});

		return false;
	});

	

	function hideText(){
		$('.text-day').fadeOut('slow');

	}
	setTimeout(hideText,2000);


//Animações

function appearLogo1(){
	$('#logo_1').addClass('bounceInBottom');
}
setTimeout(appearLogo1, 100);

function appearLogo2(){
	$('#logo_2').addClass('bounceIn');
}
setTimeout(appearLogo2, 500);

function appearLogo3(){
	$('#logo_3').addClass('bounceIn');
}
setTimeout(appearLogo3, 1000);

function appearLogo4(){
	$('#logo_4').addClass('bounceInLeftLogo');
}
setTimeout(appearLogo4, 1500);

function appearLogo5(){
	$('#logo_5').addClass('bounceIn');
}
setTimeout(appearLogo5, 2000);

function appearLogo6(){
	$('#logo_60').addClass('bounceInLeftLogo');
	$('#logo_61').addClass('bounceInLeftLogo');
}
setTimeout(appearLogo6, 2500);

function appearChats(){
	$('.balloon').addClass('left-talk');
	$('.balloon-right').addClass('right-talk');
}
setTimeout(appearChats, 3000);



});


