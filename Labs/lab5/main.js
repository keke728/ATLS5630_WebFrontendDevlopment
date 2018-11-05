// Initialize Firebase
 var config = {
   apiKey: "AIzaSyAb9vEJLWO7TQfJ2OS7xx3x0qd_2lajmM0",
   authDomain: "contactform-59d67.firebaseapp.com",
   databaseURL: "https://contactform-59d67.firebaseio.com",
   projectId: "contactform-59d67",
   storageBucket: "contactform-59d67.appspot.com",
   messagingSenderId: "464802720230"
 };
 firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

$(document).ready(function(){
// Listen for form submit
$('#submitbtn').click(submitForm);
$('#get').click(getForm);
});


// Submit form
function submitForm(e){
  e.preventDefault();
  // Get values
  var name = $('#name').val();
  var company = $('#company').val();
  var email = $('#email').val();
  var phone = $('#phone').val();
  var message = $('#message').val();
 // Save message
  saveMessage(name, company, email, phone, message);
 // Show alert
 $('.alert').show();
//  Hide alert after 3 seconds
setTimeout(function(){
  $('.alert').fadeOut();
},1000);
// Clear form after submit
document.getElementById('contactForm').reset();
}

// Retrieve data
function getForm(){
  var visilist = document.getElementById('visilist');
  messagesRef.on("child_added", function(snapshot){
    console.log(snapshot.val());
    var name=snapshot.val().name;
    var company = snapshot.val().company;
    var email = snapshot.val().email;
    visilist.innerHTML += "<span class='name'>" + name + "<br>"+"</span><span class='company'>" + company + "</span><br>";
  });
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
