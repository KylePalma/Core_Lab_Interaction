$(document).ready(function(){
	$('.nav-item').on('mouseover', function(event) {
		var bgImage = $(event.currentTarget).data('image');
		console.log(bgImage, $('.hero'))

		$('.hero').css('background-image', 'url('+bgImage+')' );
	})
})