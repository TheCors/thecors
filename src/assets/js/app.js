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
  if ($('.image-gallery').length) {
    lightGallery($('.image-gallery').get(0), {
      selector: '.image-thumb',
    })
  }
})

Pace.on('hide', function() {
  $('body').removeClass('loading')
})

// Galleries
$('.gallery.blue-room').on('click', function() {
  lightGallery($(this).get(0), {
    dynamic: true,
    dynamicEl: [
      {
        src: 'assets/img/slides/blue-room/blue-room-1.jpg',
        thumb: 'assets/img/slides/blue-room/thumbs/blue-room-1.jpg',
      },
      {
        src: 'assets/img/slides/blue-room/blue-room-2.jpg',
        thumb: 'assets/img/slides/blue-room/thumbs/blue-room-2.jpg',
      },
      {
        src: 'assets/img/slides/blue-room/blue-room-3.jpg',
        thumb: 'assets/img/slides/blue-room/thumbs/blue-room-3.jpg',
      },
      {
        src: 'assets/img/slides/blue-room/blue-room-4.jpg',
        thumb: 'assets/img/slides/blue-room/thumbs/blue-room-4.jpg',
      },
      {
        src: 'assets/img/slides/blue-room/blue-room-5.jpg',
        thumb: 'assets/img/slides/blue-room/thumbs/blue-room-5.jpg',
      },
      {
        src: 'assets/img/slides/blue-room/blue-room-6.jpg',
        thumb: 'assets/img/slides/blue-room/thumbs/blue-room-6.jpg',
      },
      {
        src: 'assets/img/slides/blue-room/blue-room-7.jpg',
        thumb: 'assets/img/slides/blue-room/thumbs/blue-room-7.jpg',
      },
      {
        src: 'assets/img/slides/blue-room/blue-room-8.jpg',
        thumb: 'assets/img/slides/blue-room/thumbs/blue-room-8.jpg',
      },
      {
        src: 'assets/img/slides/blue-room/blue-room-9.jpg',
        thumb: 'assets/img/slides/blue-room/thumbs/blue-room-9.jpg',
      },
      {
        src: 'assets/img/slides/blue-room/blue-room-10.jpg',
        thumb: 'assets/img/slides/blue-room/thumbs/blue-room-10.jpg',
      },
      {
        src: 'assets/img/slides/blue-room/blue-room-11.jpg',
        thumb: 'assets/img/slides/blue-room/thumbs/blue-room-11.jpg',
      },
      {
        src: 'assets/img/slides/blue-room/blue-room-12.jpg',
        thumb: 'assets/img/slides/blue-room/thumbs/blue-room-12.jpg',
      },
    ],
  })
})

$('.gallery.jade-room').on('click', function() {
  lightGallery($(this).get(0), {
    dynamic: true,
    dynamicEl: [
      {
        src: 'assets/img/slides/jade-room/jade-room-1.jpg',
        thumb: 'assets/img/slides/jade-room/thumbs/jade-room-1.jpg',
      },
      {
        src: 'assets/img/slides/jade-room/jade-room-2.jpg',
        thumb: 'assets/img/slides/jade-room/thumbs/jade-room-2.jpg',
      },
      {
        src: 'assets/img/slides/jade-room/jade-room-3.jpg',
        thumb: 'assets/img/slides/jade-room/thumbs/jade-room-3.jpg',
      },
      {
        src: 'assets/img/slides/jade-room/jade-room-4.jpg',
        thumb: 'assets/img/slides/jade-room/thumbs/jade-room-4.jpg',
      },
      {
        src: 'assets/img/slides/jade-room/jade-room-5.jpg',
        thumb: 'assets/img/slides/jade-room/thumbs/jade-room-5.jpg',
      },
      {
        src: 'assets/img/slides/jade-room/jade-room-6.jpg',
        thumb: 'assets/img/slides/jade-room/thumbs/jade-room-6.jpg',
      },
      {
        src: 'assets/img/slides/jade-room/jade-room-7.jpg',
        thumb: 'assets/img/slides/jade-room/thumbs/jade-room-7.jpg',
      },
      {
        src: 'assets/img/slides/jade-room/jade-room-8.jpg',
        thumb: 'assets/img/slides/jade-room/thumbs/jade-room-8.jpg',
      },
      {
        src: 'assets/img/slides/jade-room/jade-room-9.jpg',
        thumb: 'assets/img/slides/jade-room/thumbs/jade-room-9.jpg',
      },
      {
        src: 'assets/img/slides/jade-room/jade-room-10.jpg',
        thumb: 'assets/img/slides/jade-room/thumbs/jade-room-10.jpg',
      },
      {
        src: 'assets/img/slides/jade-room/blue-room-11.jpg',
        thumb: 'assets/img/slides/jade-room/thumbs/jade-room-11.jpg',
      },
      {
        src: 'assets/img/slides/jade-room/jade-room-12.jpg',
        thumb: 'assets/img/slides/jade-room/thumbs/jade-room-12.jpg',
      },
    ],
  })
})

$('.gallery.gold-room').on('click', function() {
  lightGallery($(this).get(0), {
    dynamic: true,
    dynamicEl: [
      {
        src: 'assets/img/slides/gold-room/gold-room-1.jpg',
        thumb: 'assets/img/slides/gold-room/thumbs/gold-room-1.jpg',
      },
      {
        src: 'assets/img/slides/gold-room/gold-room-2.jpg',
        thumb: 'assets/img/slides/gold-room/thumbs/gold-room-2.jpg',
      },
      {
        src: 'assets/img/slides/gold-room/gold-room-3.jpg',
        thumb: 'assets/img/slides/gold-room/thumbs/gold-room-3.jpg',
      },
      {
        src: 'assets/img/slides/gold-room/gold-room-4.jpg',
        thumb: 'assets/img/slides/gold-room/thumbs/gold-room-4.jpg',
      },
      {
        src: 'assets/img/slides/gold-room/gold-room-5.jpg',
        thumb: 'assets/img/slides/gold-room/thumbs/gold-room-5.jpg',
      },
      {
        src: 'assets/img/slides/gold-room/gold-room-6.jpg',
        thumb: 'assets/img/slides/gold-room/thumbs/gold-room-6.jpg',
      },
      {
        src: 'assets/img/slides/gold-room/gold-room-7.jpg',
        thumb: 'assets/img/slides/gold-room/thumbs/gold-room-7.jpg',
      },
    ],
  })
})
