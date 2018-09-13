function showCorsIntroOnce() {
  // if (document.cookie.replace(/(?:(?:^|.*;\s*)hideCorsIntro\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
  //   document.cookie = "hideCorsIntro=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  // }
  // See if we have the hideCorsIntro value
  // (this will only happen if the page is accidentally refreshed)
  if (!sessionStorage.getItem('hideCorsIntro')) {
    // Restore the contents of the text field
    $('#introModal').foundation('open')
    sessionStorage.setItem('hideCorsIntro', true)
  }
}

$(document).foundation()
$(document).ready(function() {
  var galleryEl = $('.image-gallery-content');
  if (galleryEl.length) {
    lightGallery(galleryEl.get(0), {
      selector: '.image-thumb',
    })
  }
  var copyrightEl = $('[data-copyright]')
  if (copyrightEl.length) {
    var dateToday = new Date(),
    yearNow = dateToday.getFullYear();
    copyrightEl.text('Copyright © ' + yearNow)
  }
})

Pace.on('hide', function() {
  $('body').removeClass('loading')
})