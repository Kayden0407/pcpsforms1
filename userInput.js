function userInput(e) {
    e.preventDefault()
    var userInput = document.getElementById('userInput').value.toLowerCase();
    console.log(userInput)
     switch(userInput) {
         case 'pcleader':
             window.location.replace('file:///C:/Users/User/Desktop/Org_PCPS%20Forms/Org_PCPS%20Forms/forms/PCLeader/pcleader_28Eb3M+Gn_dL$tCyQwATQg&Sankvk_z%25Qd6BwMS3q9L@SbwB3g%5EUXgEa%5ExBFd5xB-%5E8%5ERGCKMnM9_s%23ca!uL57qC929p3Q_7m.html');
             break;
         case 'keyword2':
             window.location.replace('page2.html');
             break;
         default:
             window.alert("The server sent an invalid response\nPlease enter a valid form code");
             break; 
     }


 }

//  function userInput(event) {
//     log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
//     event.preventDefault();
//   }
  
  const form = document.getElementById('formName');
  const log = document.getElementById('log');
//   form.addEventListener('submit', userInput);
form.addEventListener('submit, userInput');