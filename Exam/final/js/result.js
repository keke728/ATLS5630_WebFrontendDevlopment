// Get a reference to the database service
var database = firebase.database();
// Create a storage reference from our database
var storageRef = database.ref("orders");

// Variables
var order_list = document.getElementById("results");

var nameList = document.getElementById("result_name");
var locationsList = document.getElementById("result_location");
var peopleList = document.getElementById("result_people");
var structureList = document.getElementById("result_structure");
var descList = document.getElementById("result_desc");

// Adds an event listener to any child added to our database
// This is triggered when the listener is first attached and every time a new child is added
// Adds the orders to the orders div
	storageRef.on("child_added", function(snapshot){
			console.log(snapshot.val());
			var name=snapshot.val().name;
			var location=snapshot.val().location;
			var description=snapshot.val().description;
			var people = snapshot.val().people;
			var structure = snapshot.val().structure;

			nameList.innerHTML +=  name + '<br>';
			locationsList.innerHTML += location + '<br>';
			peopleList.innerHTML += people + '<br>';
			structureList.innerHTML += structure + '<br>';
	});
