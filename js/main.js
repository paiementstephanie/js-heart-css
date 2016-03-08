var $header = $('header');
var $h1 = $('h1');
var $h2 = $('h2');
var $main = $('main');
var $images = $('img');

$header.addClass('masthead');

$h1.removeClass('big-heading').addClass('logo');

$main.addClass('wrapper');

$('main p:first-child').addClass('intro');

$h2.addClass('slug-head');

$('main ul').addClass('slug-list');

$images.addClass('slug-img');

$('main li:first-child').addClass('slug-list-first');

$('main li:last-child').addClass('slug-list-last');

$('dl').addClass('classification');

$('dt').removeClass('big-label');

$('ul li:last-child').show();
