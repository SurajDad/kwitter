
//ADD YOUR FIREBASE LINKS HERE
/*
const firebaseConfig = {
  apiKey: "AIzaSyDJWXkbvBRKaiD4ge6yLNO56WraxQgwOqs",
  authDomain: "kwitter-147da.firebaseapp.com",
  databaseURL: "https://kwitter-147da-default-rtdb.firebaseio.com",
  projectId: "kwitter-147da",
  storageBucket: "kwitter-147da.appspot.com",
  messagingSenderId: "197708753512",
  appId: "1:197708753512:web:931bf1edd30ed6ed65a9dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);*/
    window.alert("test");

user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " :)";

function addRoom(){
    room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({ 
        purpose : "adding room_name" 
         )};
  localStorage.setItem("room_name" , room_name);
    window.location("kwitter_page.html");
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html";
    

}

function logout()
{
    window.alert("test");
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location("kwitter.html");
}
