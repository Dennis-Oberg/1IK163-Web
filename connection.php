<?php
$mysqli = new mysqli("localhost","admin","admin","hemsida");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}
?>
