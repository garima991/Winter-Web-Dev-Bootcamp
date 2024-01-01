  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  /*

  const firebaseConfig = {
    apiKey: " ",
    authDomain: " ",
    projectId: " ",
    storageBucket: " ",
    messagingSenderId: " ",
    appId: " "
  };
  
  */

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

import {getDatabase, ref, get, set, child, update, remove} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const db = getDatabase();

var namebox = document.getElementById("Namebox");
var rollbox = document.getElementById("Rollbox");
var sectionbox = document.getElementById("Sectionbox");
var genderbox = document.getElementById("Genderbox");

var insertbutton = document.getElementById("Insert");
var selectbutton = document.getElementById("Select");
var updatebutton = document.getElementById("Update");
var deletebutton = document.getElementById("Delete");

function insertData(){
    console.log("insertData function called");

    set(ref(db, "Persons/" +rollbox.value),{
        Name: namebox.value,
        RollNo: rollbox.value,
        Section: sectionbox.value,
        Gender: genderbox.value,
    })

    .then(() => {
        alert("Data stored successfully");
    })

    .catch((error) => {
        alert("Error in saving data:" + error);
    });
}

function selectData(){
  console.log("selectData function called");

  get(child(ref(db), "Persons/"+rollbox.value))
  .then((snapshot) => {
    if(snapshot.exists()){
      namebox.value = snapshot.val().Name;
      sectionbox.value = snapshot.val().Section;
      genderbox.value = snapshot.val().Gender;
    }
    else{
      alert("No data found for the roll number:" +rollbox.value);
    }
  })

  .catch((error) =>{
    alert("Error in reading data:" + error);
  });
}

function updateData(){
  console.log("updateData function called");
  update(child(ref(db), "Persons/"+rollbox.value), {
    Name: namebox.value,
    Section: sectionbox.value,
    Gender: genderbox.value,
  })

  .then(() => {
    alert("Data updated for the roll number:" +rollbox.value);
  })

  .catch((error) =>{
    alert("Error in updating data:" +error);
  });

}

function deleteData(){
  console.log("deleteData function called");

  remove(child(ref(db), "Persons/" + rollbox.value))
  .then(() => {
    alert("Data removed for the roll number:" +rollbox.value);
  })
  
  .catch((error) =>{
    alert("Error in deleting data:" +error);
  });

}

insertbutton.addEventListener('click',insertData);
selectbutton.addEventListener('click',selectData);
updatebutton.addEventListener('click',updateData);
deletebutton.addEventListener('click',deleteData);







