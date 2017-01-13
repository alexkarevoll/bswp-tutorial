$(function() {

  // cache the window object
  var $window = $(window);

  // Parallax background effect
  $('section[data-type="background"]').each(function() {
    var $bgobj = $(this);

    $window.scroll(function() {

      //scroll the background at var speed
      // the yPos is a neg value because we're scrolling up

      var yPos = -($window.scrollTop() / $bgobj.data('speed'))

      // put together our final bg position
      var coords = '50%' + yPos + 'px';

      // move the background
      $bgobj.css({backgroundPosition: coords})

    })
  })

})
