<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="index.php" method="post">
    <label for="count_from">Enter a number to count down from:</label>
    <input type="text" name="count_from">
    <input type="submit" value="Count">
  </form> 
</body>
</html>

<?php
  // for loop = repeat some code a certain # of times
  $number = $_POST["count_from"];
  for ($i = $number; $i >= 1; $i--) {
    echo "{$i} <br>";
  }
?>