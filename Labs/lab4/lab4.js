$("document").ready(function(){
  var request = new XMLHttpRequest();
  request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
  request.onload = function(){

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if(request.status >= 200 && request.status < 400){
      data.forEach(function(movie){

        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const h2 = document.createElement('h2');
        h2.textContent = movie.title;

        const p = document.createElement('p');
        p.textContent = movie.description;

        $('#movie').append(card);
        card.appendChild(h2);
        card.appendChild(p);
        $('h2').click(function(){
          $('p').toggle();
        });
      });
    }else{
      console.log("Error!");
    }
  }
  request.send();
});
