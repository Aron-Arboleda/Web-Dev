<?php
  $db_server = "localhost";
  $db_user = "root";
  $db_pass = "";
  $db_name = "businessdb";

  $conn = "";

  try {
    $conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name);
    if ($conn){
      echo "Database Connected! <br>";
    } else {
      echo "Could not connect to the database <br>";
    }
  } catch (\Throwable $th) {
      echo "Could not connect to the database <br>";
  }
?>