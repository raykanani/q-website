var openModal = function() {
    $('.modal').removeClass('hidden');
};

var closeModal = function() {
    $('.modal').addClass('hidden');
};

$("#schedule").on('click', function () {
    openModal();
});

$(".close").on('click', function () {
  closeModal();
});

$('#scheduleName').on('click', function() {
    var name = $('.name-input').val();
    $('.full-name').val(name);
    openModal();
});

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.nav-bar').outerHeight();


$(window).scroll(function(event){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);
function hasScrolled() {
  var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.nav-bar').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.nav-bar').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}