<?php 
 require 'dbh.php';  

 
if (isset($_REQUEST['q'])) { 

$q = $_REQUEST['q'];

$hint = "";

if ($q !== "") {
 
	$hint = $q;

   $sql = "delete from users where todo=('$q')";  
   mysqli_query($conn, $sql); 
} 
 
echo $hint === "" ? "no suggestions": $hint; 
echo " deleted";   
mysqli_close($conn); 
exit();
} else {
 echo "hi"; 
	exit();  
}