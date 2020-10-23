<?php 
 require 'dbh.php';  

 
if (isset($_REQUEST['q'])) { 

$q = $_REQUEST['q'];

$hint = "";

if ($q !== "") {
 
	$hint = $q;

   $sql = "INSERT INTO users (todo) VALUES ('$q')"; 
   mysqli_query($conn, $sql);
} 
 
echo $hint === "" ? "no suggestions": $hint;     
mysqli_close($conn);
exit();
} else {
 echo "hi"; 
	exit();  
}
