// //Form response 1

// const btn = document.querySelector('button');

// function sendData( data ) {
//   console.log( 'Sending data' );

//   const XHR = new XMLHttpRequest();

//   let urlEncodedData = "",
//       urlEncodedDataPairs = [],
//       name;

//   // Turn the data object into an array of URL-encoded key/value pairs.
//   for( name in data ) {
//     urlEncodedDataPairs.push( encodeURIComponent( name ) + '=' + encodeURIComponent( data[name] ) );
//   }

//   // Combine the pairs into a single string and replace all %-encoded spaces to
//   // the '+' character; matches the behavior of browser form submissions.
//   urlEncodedData = urlEncodedDataPairs.join( '&' ).replace( /%20/g, '+' );

//   // Define what happens on successful data submission
//   XHR.addEventListener( 'load', function(event) {
//     alert( 'Thank You! Your response has been recorded:)' );
//   } );

//   // Define what happens in case of error
//   XHR.addEventListener( 'error', function(event) {
//     alert( 'Oops! Something went wrong. Please try again.' );
//   } );

//   // Set up request
//   XHR.open( 'POST', 'https://example.com/cors.php' );

//   // Add the required HTTP header for form data POST requests
//   XHR.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );

//   // Send data.
//   XHR.send( urlEncodedData );
// }

// btn.addEventListener( 'click', function() {
//   sendData( {test:'ok'} );
// } )

// //end of form response 1

// //adblock detector
// var adBlockEnabled = false;
// var testAd = document.createElement('div');
// testAd.innerHTML = '&nbsp;';
// testAd.className = 'adsbox';
// document.body.appendChild(testAd);
// window.setTimeout(function() {
//   if (testAd.offsetHeight === 0) {
//     adBlockEnabled = true;
//   }
//   testAd.remove();
//   console.log('Status of adblock', adBlockEnabled)
// }, 100);
// //end of adblock detector

// //confirmprint
// function confirmprint() {
//   alert("You are about to print this document.\nPress OK to continue.");
// }
// //end of confirmprint

// //printing
// function printing() {
//   alert("This document is now being printed");
// }
// //end of printing

// //window.print()
// function print() {
//   window.print();
// }
// //end of window.print()

// //cookie greeting
// function setCookie(cname,cvalue,exdays) {
//   var d = new Date();
//   d.setTime(d.getTime() + (exdays*24*60*60*1000));
//   var expires = "expires=" + d.toGMTString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//   var name = cname + "=";
//   var decodedCookie = decodeURIComponent(document.cookie);
//   var ca = decodedCookie.split(';');
//   for(var i = 0; i < ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

// function checkCookie() {
//   var user=getCookie("username");
//   if (user != "") {
//     alert("Welcome again, " + user);
//   } else {
//      user = prompt("Please enter your name. Your data will be stored as cookies.","Name");
//      if (user != "" && user != null) {
//        setCookie("username", user, 30);
//      }
//   }
// }
// //end of cookie greeting
