$(document).ready(function() {
	a.addClass('animated bounceInLeft')
	$('.tamaño').fadeTo('fast', 0.1);
	$('.tamaño').mouseout(noSelec);
	$('.tamaño').mouseenter(categoria);
	setTimeout(function(){ a.removeClass('animated bounceInLeft'); }, 1000);
});

var a = $('div.padre').children();
function categoria (){
	$(this).fadeTo('fast', 1);
	$(this).click(function (){
		$(this).addClass('animated flip');
		$('.tamaño').addClass('animated bounceOutLeft')
		setTimeout(function(){
			$('.flip').removeClass('flip');
		}, 1500);
	})
}

function noSelec (){
	$(this).fadeTo('fast', 0.1);
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