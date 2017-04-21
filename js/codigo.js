var a = $('div.padre').children();
var b;
var preg = [
	//Naruraleza
	{categoria :'Naturaleza', preguntas: [
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
	]},
	//Deportes
	{categoria: 'Deportes', preguntas: [
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
	]},
	//Geografía
	{categoria: 'Geografía', preguntas: [
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
	]},
	//Historia
	{categoria: 'Historia', preguntas: [
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
		{textoEnunciado: '', imagen: '', r1: '', r2: '', correcta: '', estado: false, },
	]},
];

$(document).ready(function() {
	a.addClass('animated bounceInLeft');
	a.fadeTo('fast', 0.1);
	a.mouseenter(categoria);
	setTimeout(function(){ a.removeClass('animated bounceInLeft'); }, 1000);
});

function categoria (){
	a.fadeTo('fast', 0.1);
	$(this).fadeTo('fast', 1);
	$(this).click(function (){
		b = preg[$(this).index()];
		$(this).removeAttr('style')
		$(this).addClass('animated flip');
		a.addClass('animated bounceOutLeft');
		$('footer').addClass('animated bounceOutLeft');
		setTimeout(function(){
			$('.flip').removeClass('flip');
		}, 1500);
		preguntas();
	});
}

function preguntas(){
	console.log(b)
	var c = Math.floor(Math.random()*10 + 0);
	while (b.preguntas[c].estado == true){
		c = Math.floor(Math.random()*10 + 0);
	}
	if (b.preguntas[c].correcta == ) {
		b.preguntas[c].correcta
	}
	console.log(b.preguntas[c].estado)
}


// Esta funciona
/*var a = $('div.padre').children();
function categoria (){
	$(this).fadeTo('fast', 1);
	$(this).click(function (){
		console.log('click')
		$(this).addClass('animated flip');
		$('.tamaño').addClass('animated bounceOutLeft')
		setTimeout(function(){ a.removeClass('animated flip'); }, 1000);
		setTimeout(function(){ a.removeClass('animated bounceOutLeft'); }, 1000);
		$(this).addClass('animated bounceOutLeft');
		setTimeout(function(){ a.removeClass('animated bounceOutLeft'); }, 1000);
	})
}*/