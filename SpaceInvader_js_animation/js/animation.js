function onDocumentReady() {
  console.log('document ready');
  $('#fade-toggle').on('click', fadePanel);
}
function fadePanel(event) {
  console.log('event', event);
  var displayProperty = $('#panel').css('display');
  console.log('displayProperty', displayProperty); 
  if (displayProperty !== 'block') {
    $('#panel').fadeIn();
  } else {
    $('#panel').fadeOut();
  }
}
function customAnimation() {
  // $( "#panel" ).animate({
    // CSS Properties and values
  // }, 5000, "linear", function() {
    // Completion Handler
  // });
  var left = 0;
  $(".img-item").each(function(i,val) {
    $(this).animate({
      left: left,
      opacity: 1
    }, 1500 );

    left += 360;
  });
}
$(document).ready(onDocumentReady);
