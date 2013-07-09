function cargarPaginaTrabajos() {
	
	$("#recuadroTexto").load("trabajos.html");
	
	$.ajax({
        type: "GET",
		url: "data/trabajos.xml",
		dataType: "xml",
		async: false,
		success: function(xml) {
			 
			var headerTrabajos = $("#recuadroTexto");
			var contenido = $("#scroll", headerTrabajos);
			
			 $(xml).find('cliente').each(function(index){
				 var nombreCliente = $('nombre', this).text();
				 var thumbnail = $('thumbnail', this).text();
				 
				 var imagenes = [];
				 var titulosImagenes = [];
				 $(this).find("imagen").each(function() { 
					 imagenes.push( $(this).text() ); 
					 titulosImagenes.push(nombreCliente);
				 });
				 
				 var elemento = "<div onclick='showLightbox(" + index + ")' id='imgCliente_" + index + "'>";
				 elemento += "<img src='" + thumbnail + "' width='133' height='133' />";
				 elemento += "<img src='images/bulletTrabajos.png' width='12' height='12' />";
				 elemento += nombreCliente;
				 elemento += "<input type='hidden' name='imagenes' value='" + imagenes + "' />";
				 elemento += "<input type='hidden' name='titulosImagenes' value='" + titulosImagenes + "' />";
				 elemento += "</div>";
				 
				 contenido.append(elemento);
				 
			 });
			 
		}
	});
	
}

function showLightbox(indice) {
	var imagenes = $("#imgCliente_" + indice + " input[name='imagenes']").val().split(',');
	var titulos = $("#imgCliente_" + indice + " input[name='titulosImagenes']").val().split(',');
	$.prettyPhoto.open(imagenes,titulos,[]);
}
