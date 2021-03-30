<?php
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$semail = $_POST['semail'];
if (!empty($fname) || !empty($lname) || !empty($semail)) {
 $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "pcleader_pcpsforms";
    //create connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
    if (mysqli_connect_error()) {
     die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    } else {
     $SELECT = "SELECT semail From pcleader_pcpsforms Where semail = ? Limit 3";
     $INSERT = "INSERT Into pcleader_pcpsforms (fname, lname, semail) values(?, ?, ?, ?, ?, ?)";
     //Prepare statement
     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $semail);
     $stmt->execute();
     $stmt->bind_result($semail);
     $stmt->store_result();
     $stmt->store_result();
     $stmt->fetch();
     $rnum = $stmt->num_rows;
     if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("ssssii", $fname, $lname, $semail);
      $stmt->execute();
      echo "Your response has been submitted sucessfully.";
     } else {
      echo "Email already used more than three times. Please contact your teacher for any assistance. Do not enter your personal email address.";
     }
     $stmt->close();
     $conn->close();
    }
} else {
 echo "All fields are required";
 die();
}
?>