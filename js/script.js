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
			data: '{"email":"endrigo@amitelservices.com.br","password":"amitelservices"}',
			success: function (result){
				var token = 'Bearer '+result.token;
				console.log(token);

				$.ajax({
					crossDomain: true,
					url: "http://52.52.212.162:8001/api/inbound",
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
						alert('Cadastro efetuado com sucesso!');
						$('#formlogin').trigger('reset');
					}
				});

			}
		});

		return false;
	});


});

