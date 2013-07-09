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
			
			 $(xml).find('cliente').each(function(){
				 var nombreCliente = $('nombre', this).text();
				 var thumbnail = $('thumbnail', this).text();
				 
				 var elemento = "<div>";
				 elemento += "<a href='javascript:showLightbox();'>";
				 elemento += "<img src='" + thumbnail + "' width='133' height='133' />";
				 elemento += "</a>";
				 elemento += "<img src='images/bulletTrabajos.png' width='12' height='12' />";
				 elemento += nombreCliente;
				 elemento += "</div>";
				 
				 contenido.append(elemento);
				 
			 });
			 
		}
	});
	
}