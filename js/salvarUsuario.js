
			function salvarUsuario() { 
				
				var xmlhttp;

				var dadosajax ={
					'usuario' : $("#usuario").val(),
        			'senha' : $("#senha").val(),
        			'email' : $("#email").val()
        		
				};


				pageurl = 'cadUsuario.php';

				 $.ajax({
 
			        //url da pagina
			        url: pageurl,
			        //parametros a passar
			        data: dadosajax,
			        //tipo: POST ou GET
			        type: 'POST',
			        //cache
			        cache: false,
			        //se ocorrer um erro na chamada ajax, retorna este alerta
			        //possiveis erros: pagina nao existe, erro de codigo na pagina, falha de comunicacao/internet, etc etc etc
			        
			        //retorna o resultado da pagina para onde enviamos os dados
			        success: function(result)
			        { 
			            //se foi inserido com sucesso
			            if($.trim(result) == '1')
			            {
							
			            }
			            //se foi um erro
			            else
			            {
			             alert("Erro ao agendar paciente!");   
			            }
			 
			        }
    			});	
				 alert("Paciente Agendado com sucesso!");
				 
		} 