$(document).ready(function() {
	$.fn.prettyPhoto({
		slideshow: 5000,
		autoplay_slideshow: true,
		show_title: true,
		theme: 'facebook',
		social_tools: '',
		allow_resize: true,
		deeplink: false
	});

	if (screen && screen.width > 480 && window.innerWidth > 480) {
		ajustarAltoPantalla(0.22);
		initializeScrollPane();
	}
	
});

function cargarPagina(url) {
	$.ajax({
		url: url,
		dataType: "html"
	}).done(function( data ) {
		
		$("#recuadroTexto").html(data);
		
		if (!prepararParaMobile()) {
			ajustarAltoPantalla(0.22);
		}
		
		initializeScrollPane();
	});
}

function prepararParaMobile(altoPantalla) {
	if (screen && (screen.width <= 480 || window.innerWidth <= 480)) {
		$('#header-logo-menu').hide();
		$('#lateralDerecha').show();
		$('.cerrar').css('top', '0');
		$('#footerMobile').show();
		$('#footerDesktop').hide();
		$('body').css('background-image', 'none');

		ajustarAltoPantalla(altoPantalla); 
		return true;
	}

	return false;
}

function ajustarAltoPantalla(altoPantalla) {
	
	if (!altoPantalla) {
		altoPantalla = 0.45;
	}

	var alto = $(window).height() * altoPantalla;
	$('.texto-principal').css('height', alto + 'px');
}

function initializeScrollPane() {
	$('.texto-principal').jScrollPane({
		verticalDragMaxHeight: 80
	});
}




function MM_preloadImages() { // v3.0
	var d = document;
	if (d.images) {
		if (!d.MM_p)
			d.MM_p = new Array();
		var i, j = d.MM_p.length, a = MM_preloadImages.arguments;
		for (i = 0; i < a.length; i++)
			if (a[i].indexOf("#") != 0) {
				d.MM_p[j] = new Image;
				d.MM_p[j++].src = a[i];
			}
	}
}
function MM_swapImgRestore() { // v3.0
	var i, x, a = document.MM_sr;
	for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++)
		x.src = x.oSrc;
}
function MM_findObj(n, d) { // v4.01
	var p, i, x;
	if (!d)
		d = document;
	if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
		d = parent.frames[n.substring(p + 1)].document;
		n = n.substring(0, p);
	}
	if (!(x = d[n]) && d.all)
		x = d.all[n];
	for (i = 0; !x && i < d.forms.length; i++)
		x = d.forms[i][n];
	for (i = 0; !x && d.layers && i < d.layers.length; i++)
		x = MM_findObj(n, d.layers[i].document);
	if (!x && d.getElementById)
		x = d.getElementById(n);
	return x;
}

function MM_swapImage() { // v3.0
	var i, j = 0, x, a = MM_swapImage.arguments;
	document.MM_sr = new Array;
	for (i = 0; i < (a.length - 2); i += 3)
		if ((x = MM_findObj(a[i])) != null) {
			document.MM_sr[j++] = x;
			if (!x.oSrc)
				x.oSrc = x.src;
			x.src = a[i + 2];
		}
}