<?php
$host_name = 'db5013817062.hosting-data.io';
$database = 'dbs11848487';
$user_name = 'dbu5563614';
$password = '1292523018@Mm';

$link = new mysqli($host_name, $user_name, $password, $database);

if ($link->connect_error) {
  die('<p>Connection to MySQL server failed: '. $link->connect_error .'</p>');
}
?>
