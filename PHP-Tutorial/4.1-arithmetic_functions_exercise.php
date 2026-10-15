<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="index.php" method="post">
    <label for="radius">radius: </label>
    <input type="text" name="radius"><br>
    <input type="submit" value="Submit">
  </form>
  
</body>
</html>

<?php
  $radius = $_POST["radius"];

  $C = round(2 * pi() * $radius, 2);
  $A = round(pi() * $radius ** 2, 2);
  $V = round((4 * pi() * $radius ** 3) / 3, 2);

  echo "Circumference: {$C}cm <br>";
  echo "Area: {$A}cm^2 <br>";
  echo "Volume: {$V}cm^3";
?>