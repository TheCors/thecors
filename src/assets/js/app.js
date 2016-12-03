$(document).foundation();
$(window).load(function() {
  // Animate loader off screen
  setTimeout(function() {
    $( "html" ).removeClass("loading");
    console.log("removing");
  }, 3000);
});
