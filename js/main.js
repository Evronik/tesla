$(function(){
	$('.toform').on('click',function(){
		$('html, body').animate({
			scrollTop: $('#slide7').offset().top
		}, 'slow');
	});
	$('.pril').on('click',function(){
		$('html, body').animate({
			scrollTop: $('#slide4').offset().top
		}, 'slow');
	});
	$('.har').on('click',function(){
		$('html, body').animate({
			scrollTop: $('#slide5').offset().top
		}, 'slow');
	});
	$('.mes').on('click',function(){
		$('html, body').animate({
			scrollTop: $('#slide6').offset().top
		}, 'slow');
	});
});
function select_color(div,color){
	$('.color').removeClass('activ');
	$('.color').css('background','none');
	switch(color){
		case 'green':
			product_id=1695;
			background='#61ba40';			
		break;
		case 'black':
			product_id=1677;
			background='#000';
		break;
		case 'blue':
			product_id=1687;
			background='#0c77c9';
		break;
		case 'white':
			product_id=1673;
			background='#eff1f0';
		break;
		case 'fiolet':
			product_id=1685;
			background='#5233ad';
		break;
	}
	$('input[type="hidden"]').val(product_id);
	$(div).addClass('activ');
	$('.activ').css('background',background);
}