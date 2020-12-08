// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB_PDCznF-Qa3PkL3yqRfL27oZEyvXavNA",
    authDomain: "le-ddk-db.firebaseapp.com",
    projectId: "le-ddk-db",
    storageBucket: "le-ddk-db.appspot.com",
    messagingSenderId: "441552335864",
    appId: "1:441552335864:web:984accfe8c692a45cedc0d",
    measurementId: "G-RJT9G2KGH2"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference message collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);
console.log("clicked");

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal("myName");
    var email = getInputVal("myEmail");
    var phone = getInputVal("myPhone");
    var message = getInputVal("myMessage");

    // Save message
    saveMessage(name, email, phone, message);

    // Show alert
    document.querySelector(".alertMessage").style.display = "block";

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector(".alertMessage").style.display = "none";
    }, 3000);

    // Clear form
    // document.getElementById("contactForm").reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message,
    });
}
