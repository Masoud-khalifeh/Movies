<?php
require_once("./db_config.php");
$email=$_POST["email"];
$name=$_POST["name"];
$hashedPassword=$_POST["password"];
$reHashedPassword=password_hash($hashedPassword,PASSWORD_DEFAULT);

$sql="INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$reHashedPassword');";
$res=mysqli_query($link,$sql);
if($res){
    echo "$res ;l'l;'";
}else{
    echo "Error";
} 

$link->close();
