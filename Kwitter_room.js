  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBUFA1R7T0FFLBAuVIn-DjjbqtCx9oTlCk",
    authDomain: "kwitter-d0c54.firebaseapp.com",
    projectId: "kwitter-d0c54",
    storageBucket: "kwitter-d0c54.appspot.com",
    messagingSenderId: "485161509656",
    appId: "1:485161509656:web:bf51d0e7e5a9994966b46d",
    measurementId: "G-9329V6HPHB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  // Initialize Firebase 
  firebase.initializeApp(firebaseConfig);
function getData() 
{
  firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 var row="<div class='room_name' id='Room_names' onclick='RedirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;
});});};
 getData();
function add_room()  {
  roomname= document.getElementById("room_name").value;//no error here
firebase.database().ref("/").child(roomname).update({
purpose:"adding room name"});
localStorage.setItem("room_name", roomname);
window.location="kwitter_chat.html";
};
function RedirectToRoomName(name) {
  name=document.getElementById("room_name").value;
   localStorage.setItem("name_of_room", name);
   window.location="kwitter_chat.html";
 }
function send() {
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
  document.getElementById("msg").value="   ";
}

