function cargarPaginaTrabajos() {
	
	var textoAInsertar = [];
	textoAInsertar[0] = "<div class='main-banner'>";
	textoAInsertar[1] = "<img src='images/bulletTitular.png' />";
	textoAInsertar[2] = "TRABAJOS";
	textoAInsertar[3] = "</div>";
	textoAInsertar[4] = "<div class='main-content'>";
	textoAInsertar[5] = "<div class='texto-principal'>";
	textoAInsertar[6] = "<div id='scroll'>";
	
	var i = 7;
	
	$.ajax({
        type: "GET",
		url: "data/trabajos.xml",
		dataType: "xml",
		async: false,
		success: function(xml) {
			 
			 $(xml).find('cliente').each(function(index){
				 var nombreCliente = $('nombre', this).text();
				 var thumbnail = $('thumbnail', this).text();
				 
				 var imagenes = [];
				 var titulosImagenes = [];
				 var descripcionImagenes = [];
				 
				 $(this).find("imagen").each(function() { 
					 imagenes.push( $('url', this).text() ); 
					 titulosImagenes.push(nombreCliente);
					 descripcionImagenes.push( $('descripcion', this).text() );
				 });
				 
				 textoAInsertar[i++] = "<div onclick='showLightbox(" + index + ")' id='imgCliente_" + index + "'>";
				 textoAInsertar[i++] = "<img src='" + thumbnail + "' width='133' height='133' />";
				 textoAInsertar[i++] = "<img src='images/bulletTrabajos.png' width='12' height='12' />";
				 textoAInsertar[i++] = nombreCliente;
				 textoAInsertar[i++] = "<input type='hidden' name='imagenes' value='" + imagenes + "' />";
				 textoAInsertar[i++] = "<input type='hidden' name='titulosImagenes' value='" + titulosImagenes + "' />";
				 textoAInsertar[i++] = "<input type='hidden' name='descripcionImagenes' value='" + descripcionImagenes + "' />";
				 textoAInsertar[i++] = "</div>";
	
			 });
			 
			 textoAInsertar[i++] = "</div>";
			 textoAInsertar[i++] = "</div>";
			 textoAInsertar[i++] = "</div>";
			 
			 $('#recuadroTexto').html('');
			 $('#recuadroTexto').append(textoAInsertar.join(''));
			 
			 if (!prepararParaMobile(0.8)) {
				 ajustarAltoPantalla(0.65);
			 }
			 
			 initializeScrollPane();
			 
		}
	});
	
}

function showLightbox(indice) {
	var imagenes = $("#imgCliente_" + indice + " input[name='imagenes']").val().split(',');
	var titulos = $("#imgCliente_" + indice + " input[name='titulosImagenes']").val().split(',');
	var descripciones = $("#imgCliente_" + indice + " input[name='descripcionImagenes']").val().split(',');
	
	$.prettyPhoto.open(imagenes,titulos,descripciones);
}

