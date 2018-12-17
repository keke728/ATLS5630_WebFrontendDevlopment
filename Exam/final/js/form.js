// Get a reference to the database service
var database = firebase.database();
// Create a storage reference from our storage service
var storageRef = database.ref("orders");
//create instance of the Google provider instance
var provider = new firebase.auth.GoogleAuthProvider();
//user status div
var user_info = document.getElementById("user_status");
//current user
var current_user = null;
function authenticate(){
	firebase.auth().signInWithPopup(provider).then(function(result) {
	  if (result.credential) {
	    // This gives you a Google Access Token. You can use it to access the Google API.
	    var token = result.credential.accessToken;
	  }
	  else {
		  //google sign-in redirect
		  firebase.auth().signInWithPopup(provider);
	  }
	  // The signed-in user info
	  //var user = result.user;
	  current_user = result.user;
	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	});
}

function signOut(){
	firebase.auth().signOut().then(function() {
		// Sign-out successful
		current_user = null;
		user_info.innerHTML = "";
	}).catch(function(error) {
		// An error happened
	});
}

//setting an event listener for change of authentication state
firebase.auth().onAuthStateChanged(function(user) {
	current_user=user;
	if (user) {
    	// User is signed in
		user_info.innerHTML = "Hi, " + user.displayName;
  	} else {
    	// No user is signed in
		user_info.innerHTML = "";
  	}
});

//functions
$(document).ready(function(){
  $("#order_form").submit(function(e){
    postForm();
    e.preventDefault();
  });
  //loadFirebaseData();
});


function postForm()
{
	if (current_user) {
		// User is signed in
		var name = $("#name").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var isPeople = $('input[name=people]:checked').val();
		var isStructure = $('input[name=structure]:checked').val();
		var location = $("#location").val();
		var description = $("#description").val();

		//write to firebase
		storageRef.push({
			name: name,
		  email: email,
      phone: phone,
			location: location,
			people: isPeople,
			structure: isStructure,
			description: description
		}).then(window.location.href = "result.html");
		}
		else {
			// No user is signed in.
			alert("Please sign in to submit your form");
		}
}


//document.getElementById("enter").addEventListener("click", postForm);
document.getElementById("signin").addEventListener("click", authenticate);
document.getElementById("signout").addEventListener("click", signOut);
