const firebaseConfig = {
    apiKey: "AIzaSyCNgOgwfQIUMbB05EjKbkeUFxHk2BoCfNc",
    authDomain: "vamosconversar-39e61.firebaseapp.com",
    databaseURL: "https://vamosconversar-39e61-default-rtdb.firebaseio.com",
    projectId: "vamosconversar-39e61",
    storageBucket: "vamosconversar-39e61.appspot.com",
    messagingSenderId: "525426695939",
    appId: "1:525426695939:web:ec56af919b85eab5fa9336"
  };


  firebase.initializeApp(firebaseConfig); 
  user_name = localStorage.getItem("user_name"); 
  room_name = localStorage.getItem("room_name");

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitterPage.html";
}



function logout()
{
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
window.location = "index.html";

}

