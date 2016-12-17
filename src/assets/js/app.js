$(document).foundation();
$(window).load(function() {
  // Animate loader off screen
  setTimeout(function() {
    $( "body" ).removeClass("loading");
    console.log("removing");
  }, 0);
});
