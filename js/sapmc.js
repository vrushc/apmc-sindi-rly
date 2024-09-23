$(function(){
var overlay = $('<div id="overlay"></div>');
overlay.show();
overlay.appendTo(document.body);
$('.hapmc-onload').show();
$('.close').click(function(){
$('.sapmc-onload').hide();
overlay.appendTo(document.body).remove();
return false;
});

$('.x').click(function(){
$('.hapmc').hide();
overlay.appendTo(document.body).remove();
return false;
});
});
