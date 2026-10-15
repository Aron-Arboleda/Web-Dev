<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="index.php" method="post">
    <label for="country">Country: </label>
    <input type="text" name="country">
    <input type="submit">
  </form>
</body>
</html>
<?php
  // associative array = An array made of key=>value pairs

  $capitals = array(
    "USA"=>"Washington D.C.",         
    "Japan"=>"Tokyo", 
    "South Korea"=>"Seoul", 
    "India"=>"New Delhi"
  );

  // echo $capitals["India"];

  // $capitals["USA"] = "New York";
  // $capitals["Philippines"] = "Manila";
  // array_pop($capitals);
  // array_shift($capitals);

  // foreach ($capitals as $key => $value){
  //   echo "{$key}'s capital is {$value}. <br>";
  // }

  // echo "<br><br>";
  // $capitals_keys = array_keys($capitals);
  // foreach ($capitals_keys as $capitals_key){
  //   echo "{$capitals_key} <br>";
  // }

  // echo "<br><br>";
  // $capitals_values = array_values($capitals);
  // foreach ($capitals_values as $capitals_value){
  //   echo "{$capitals_value} <br>";
  // }

  // echo "<br><br>";
  // $capitals_flipped = array_flip($capitals);
  //  foreach ($capitals_flipped as $key => $value){
  //   echo "{$key} = {$value}. <br>";
  // }

  // echo "<br><br>";
  // $capitals_reversed = array_reverse($capitals);
  //  foreach ($capitals_reversed as $key => $value){
  //   echo "{$key} = {$value}. <br>";
  // }

  // echo "<br><br>";
  // echo count($capitals) . "<br>";

  $capital = $capitals[$_POST["country"]];
  echo $capital;
?>