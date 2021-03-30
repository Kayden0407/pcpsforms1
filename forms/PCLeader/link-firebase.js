  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDo1vyaNQFALs8CMtnb2t-l3i9QxjlmXaI",
    authDomain: "pcpsforms.firebaseapp.com",
    projectId: "pcpsforms",
    storageBucket: "pcpsforms.appspot.com",
    messagingSenderId: "90585428224",
    appId: "1:90585428224:web:d28a3201d6c1cc7548c3e5",
    measurementId: "G-K384X037PX"
  };

  // Reference messages collection
  var messagesRef = firebaseConfig.database().ref('messages');


  // Initialize Firebase
  firebaseConfig.initializeApp(firebaseConfig);
  firebaseConfig.analytics();

// Listen for form submit
document.getElementById('pcleaderForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    // Get values
    var fname = getInputVal('fname');
    var lname = getInputVal('lname');
    var semail = getInputVal('semail');

    // Save message
    saveMessage(fname, lname, semail);

    
}

// Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, lname, semail){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        fname: fname,
        lname: lnamme,
        semail, semail
    });
}