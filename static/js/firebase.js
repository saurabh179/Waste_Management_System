
//<script src="https://www.gstatic.com/firebasejs/5.5.7/firebase.js"></script>
var config = {
  apiKey: "AIzaSyDZvWlDAE6PtWBy_g2hefNOPv_DukvyteU",
  authDomain: "waste-mng.firebaseapp.com",
  databaseURL: "https://waste-mng.firebaseio.com",
  projectId: "waste-mng",
  storageBucket: "waste-mng.appspot.com",
  messagingSenderId: "92962423621"
};
firebase.initializeApp(config);


var count=0;
// var sensorData = firebase.database().ref('dataValue');
var retrieveData = firebase.database().ref('Distance');
retrieveData.on('value', gotData) ;

function gotData(data){
  console.log(data.val());
  var gettedData = data.val();
  var keys = Object.keys(gettedData);

  for(var i=0;i< keys.length;i++){
  	var k = keys[i];
  }

}







// listen submit form
// document.getElementById('submit').addEventListener('click',submitForm);

// function submitForm(e) {
// 	e.preventDefault();
// 	var name = getInputValue('name');
// 	var mobileNumber = getInputValue('mobile');
//  var user = document.getElementById("details");
// 	// save data
//   saveData(name,mobileNumber);
//   count=count+1;
//   // retrieve Data
//   retrieveData.on('value',gotData);
//  console.log(count);
// 	console.log(name);
// 	console.log(mobileNumber);
//  var division = document.getElementById('details');
//    division.innerHTML = name ;
// }
// function getInputValue(id) {
// 	return document.getElementById(id).value;
// }
// function saveData(name,mobileNumber){
//     sensorData.child("Data "+count).set({
//  		name:name,
//  		mobileNumber:mobileNumber
//    	});
// }
