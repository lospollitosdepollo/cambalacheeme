    var table = {TableName : "Usuarios" }
	  var table = {TableName : "Productos" }
	  var usersList = [];

	  sesionActual();

	  

	  function sesionActual() {
	
			var usuario =  sessionStorage.getItem("usuarioActivo");
		
		listarUsuarios();

		var idUsuario = infoUsuario(usuario);
		
			// var nombre = usersList.Items[idUsuario].getElementById("primernombre"); 
			var nombre = "Quesito";

			document.getElementById("p_Usuario").innerHTML = "Betoooooo";
			document.getElementById("p_Nombre").innerHTML = nombre;

			
		
                                 }



	 


        function infoUsuario (usuario) {   
             
            for (let i = 0; i < usersList.Items.length; i++) {
              if ( usuario == usersList.Items[i].usuario)
              id = i;
            }
            return id;
        }


		function listarUsuarios() {

				var params = {
				TableName : "Usuarios",
				};

				docClient.scan(params, function(err, data) {
					if (err) {
						console.log( "Unable to query. Error: " + "\n" + JSON.stringify(err, undefined, 2));
					} else {
						usersList = data;
						data.Items.forEach(function(user) {
							console.log(JSON.stringify(user));
						});
					
					}
				});
			}


			function listarProductos() {

					var params = {
					TableName : "Productos",
					};

			docClient.scan(params, function(err, data) {
				if (err) {
					console.log( "Unable to query. Error: " + "\n" + JSON.stringify(err, undefined, 2));
				} else {
					usersList = data;
					data.Items.forEach(function(user) {
						console.log(JSON.stringify(user));
					});
				
	     }
         });
            }