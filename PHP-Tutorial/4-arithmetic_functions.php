<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="index.php" method="post">
    <label for="x">x: </label>
    <input type="text" name="x"><br>
    <label for="y">y: </label>
    <input type="text" name="y"><br>
    <label for="z">z: </label>
    <input type="text" name="z"><br>
    <input type="submit" value="Total">
  </form>
  
</body>
</html>

<?php
  $x = $_POST["x"];
  $y = $_POST["y"];
  $z = $_POST["z"];
  //$total = abs($x);
  // $total = round($x); // To round off
  //$total = floor($x); // To always round down
  //$total = ceil($x); // To always round up
  // $total = pow($x, $y); // Exponent
  // $total = sqrt($x); // Square Root
  // $total = max($x, $y, $z); // To get the maximum number
  //$total = min($x, $y, $z); // To get the minimum number
  // $total = pi(); // To the pi
  $total = rand(1, 6); // To get a random number, rand(min, max)
  
  echo $total;
?>