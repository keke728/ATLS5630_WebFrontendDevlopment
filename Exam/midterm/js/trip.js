var images = ["img/cycling1.jpg", "img/cycling2.jpg", "img/cycling3.jpg", "img/cycling4.jpg", "img/cycling5.jpg","img/cycling6.jpg", "img/cycling7.jpg"];

$(document).ready(function(){
  var index = Math.floor(Math.random() * 5);
  setInterval(function(){
    $("#trip_img").attr('src', images[Math.floor(Math.random() * 5)]);
  }, 2000);
});
