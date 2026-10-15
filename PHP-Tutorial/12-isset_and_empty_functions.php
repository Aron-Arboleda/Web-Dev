<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="index.php" method="post">
    <label for="username">username: </label>
    <input type="text" name="username">
    <label for="password">password: </label>
    <input type="password" name="password">
    <input type="submit" name="login" value="Log In">
  </form>
</body>
</html>

<?php
  // isset() = Returns TRUE if a variable is declared and not null
  // empty() = Returns TRUE if a variable is not declared, false, null, ""

  // $username = "Weh";

  // // echo isset($username);

  // if (isset($username)){
  //   echo "This variable is set.";
  // } else {
  //   echo "This variable is not set.";
  // }

  // echo "<br><br>";

  // if (empty($username)){
  //   echo "This variable is empty.";
  // } else {
  //   echo "This variable is not empty.";
  // }


  foreach ($_POST as $key => $value){
    echo "{$key} => {$value} <br>";
  }


  if (isset($_POST["login"])){
    $username = $_POST["username"];
    $password = $_POST["password"];
    if (empty($username)){
      echo "username is missing";
    } elseif(empty($password)) {
      echo "password is missing";
    } else {
      echo "Hello {$username}";
    }
  }
?>