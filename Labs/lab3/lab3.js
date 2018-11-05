
$("document").ready(function () {

// Hide the plant at first
$(".plant").hide();

// Animation of fadeIn & Out the title
  setInterval(function(){
    $("#title").fadeIn(1000).delay(1000).fadeOut(1000).delay(1000).fadeIn(1500);
}, 500);

// Display the pot and manipulate using toggleClass
$(".getPot").click(showPot).mouseover(function(){
  $(this).toggleClass("highlight");
});


// Display the flowers and manipulate using toggleClass
$(".getFlower").click(showFlowers).mouseover(function(){
  $(this).toggleClass("highlight");
});

// Manipulate Plant Text using toggleClass
$(".done").mouseover(function(){
  $(this).toggleClass("highlight");
});

// Mouseenter & Mounseleave
$("#butterfly").mouseenter(showButterfly);
$("#butterfly").mouseleave(hideButterfly);

// Display chosen flower
//https://stackoverflow.com/questions/10706903/check-which-element-has-been-clicked-with-jquery
$(".flowerseed").click(function(e){
  var target = $(e.target), pics;
  if(target.is("#p1")){
    document.getElementById("chosenPlant").src= "image/plant1.png";
   } else if (target.is("#p2")){
    document.getElementById("chosenPlant").src= "image/plant2.png";
   } else if (target.is("#p3")){
    document.getElementById("chosenPlant").src= "image/plant3.png";
   } else if (target.is("#p4")){
    document.getElementById("chosenPlant").src= "image/plant4.png";
   } else {
    document.getElementById("chosenPlant").src= "image/plant5.png";
   }
  });


});



// Toggle the Pot (Class selector)
function showPot(){
  $(".pot").toggle();
}

// Toggle the flowerseed (Descendant selector)
function showFlowers() {
  $(".plant").show();
  $("section div img").show();
}

// Show butterfly
function showButterfly() {
  $("#butterfly1").show();
}

// Hide butterfly
function hideButterfly() {
  $("#butterfly1").hide();
}
