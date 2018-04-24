var defaultBackgroundImages = {
	'killer_clips': 'killer_clips.jpg',
	'potd': 'potd.jpg', 'gnarly_art': 'gnarly_art.jpg', 'daily_randoms': 'daily_randoms.jpg',
	'the_mag':'the_mag.jpg', 'OG_backround': 'background.jpg'
}

$(document).ready(function(){
	$('.nav-item').on('mouseover', function(event) {
		var bgImage = $(event.currentTarget).data('image');
		console.log(bgImage, $('.hero'))

		$('.hero').css('background-image', 'url('+bgImage+')' );
	}).on('mouseout', function(event){
		var currentPath = window.location.pathname;
		$('.hero').css('OG_backround', 'url('+defaultBackgroundImages[currentPath]+')' );
	})
})