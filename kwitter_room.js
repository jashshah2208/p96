const firebaseConfig = { apiKey: "AIzaSyDBHt4jflQSN9vBM8V2aWDRu0M97AaT5bM",
 authDomain: "kwitter-jash.firebaseapp.com",
  databaseURL: "https://kwitter-jash-default-rtdb.firebaseio.com",
   projectId: "kwitter-jash",
    storageBucket: "kwitter-jash.appspot.com",
    messagingSenderId: "746489923854",
     appId: "1:746489923854:web:3b9f94fe67d9addb872f5f" };
//ADD YOUR FIREBASE LINKS HERE
firebase.initialiseApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      onsole.log("Room Name -"+ Room_names);
      row="<div 'class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      //End code
      });});}
getData();
function getData() {firebase.database().ref("/").on('value',
 function(snapshot) {document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;}
       getData();
       function addRoom()
       {
             Room_name=document.getElementById("room_name").value;
            firebase.database().ref("/").child(Room_name).update({purpose : "adding room name"});
            localStorage.setItem("room_name",Room_name);
            window.location="kwitter_page.html";
       }
       function redirectToRoomName(name)
       {
             console.log(name);
             localStorage.setItem("room_name",name);
             window.location = "kwitter_page.html";
       }
       function addRoom()
{
      Room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(Room_name).update({purpose : "adding room name"});
     localStorage.setItem("room_name",Room_name);
     window.location="kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
function send()
{
      msg = document.getElementById("msg").value
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
})
document.getElementById("msg").value = "";
}
