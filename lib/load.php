<?php 
 require 'dbh.php';  

 
if (isset($_REQUEST['q'])) { 

$q = $_REQUEST['q'];

$hint = "";

if ($q !== "") {
 
	$hint = $q;

   $sql = "UPDATE `users` SET `done` = '1' WHERE `users`.`todo` =('$q')";     
   mysqli_query($conn, $sql);
} 
 
echo $hint === "" ? "no suggestions": $hint; 
echo " done";     
mysqli_close($conn);
exit();
} else {
 echo "hi"; 
	exit();   
}