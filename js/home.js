// $('.nav-top a, .scrollDown').click(function() {
//   $('html, body').animate({
//     scrollTop: $($(this).attr('href'))
//       .offset().top
//   }, 700);
//   return false;
// });

$(window).scroll(function() {
  var x = $(".site-header").offset().top;
  $(".grid").each(function(index) {
    var z = $(this).attr("id");
    if (x > $(this).offset().top && x <= $(this).offset().top + $(this).height()) {
        $('.site-header a').removeClass("active");
        $('a.' + z).addClass("active");
    } 
  })
})

