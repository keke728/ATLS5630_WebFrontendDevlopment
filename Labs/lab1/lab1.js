
function sendFlower() {

  var fav;
  //reset text area
  document.getElementById("result").value="";

  //favorite singer
  fav=document.getElementById("singer").value;
  document.getElementById("result").textContent = "You just sent " + fav + " a bunch of "

  //radio buttons
  if(document.getElementById("colorRed").checked==true){
    document.getElementById("result").style.color = "red";
    document.getElementById("result").textContent += "roses!";
    document.getElementById("flowerDisplay").src = "img/rose.png";
  }
  else {
    if (document.getElementById("colorYellow").checked==true){
      document.getElementById("result").style.color = "#ffb400";
      document.getElementById("result").textContent += "daffodils!";
      document.getElementById("flowerDisplay").src = "img/daffodils.png";
    }
    else {
     if (document.getElementById("colorPurple").checked==true){
        document.getElementById("result").style.color = "purple";
        document.getElementById("result").textContent += "tulips!";
        document.getElementById("flowerDisplay").src = "img/tulip.png";
      }
    }
  }
}

  // Fire the OK Button
  var flower = document.getElementById("enter");
  flower.addEventListener("click", sendFlower);


  // Change Flower Image on Mouse Clicking
  function changeFlowerImage(imageID, imageName){
    document.getElementById(imageID).src = imageName;
  }

  var changeFlower = document.getElementById("flowerDisplay");
  changeFlower.addEventListener("click", function(){
    changeFlowerImage("flowerDisplay", "img/nice.png");
  },false);
