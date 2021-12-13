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
const app = initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
