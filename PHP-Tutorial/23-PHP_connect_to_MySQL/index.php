<?php
  include("database.php");
  
  $username = "Cedrick Pogi";
  $password = "ughughugh";
  $hashed_password = password_hash($password, PASSWORD_DEFAULT);

  $sql = "INSERT INTO users (user, password)
          VALUES ('$username', '$hashed_password')";

  try {
    mysqli_query($conn, $sql);
  } catch (\Throwable $th) {
    echo "Error on Query.";
  }


  mysqli_close($conn);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  Hello <br>
</body>
</html>