<?php
  $name = "Aron Rez";
  $food = "Pizza";
  $email = "arboleda.aronrez@gmail.com";

  $age = 21;
  $users = 2;
  $quantity = 3;

  $gpa = 2.5;
  $price = 4.99;
  $tax_rate = 5.1;

  $employed = true;
  $online = false;
  $for_sale = true;
  
  echo $name;
  echo "<br> Hello, {$name}";
  echo "<br> You like {$food}";
  echo "<br> You're email is {$email}";

  echo "<br><br> You are {$age} years old";
  echo "<br> There are {$users} users online";
  echo "<br> You would like to buy {$quantity} items";

  echo "<br><br> You're GPA is {$gpa}";
  echo "<br> You're pizza is \${$price}";
  echo "<br> The sale tax rate is: {$tax_rate}%";

  echo "<br><br> Online status: {$online}";

  $total = null;

  echo "<br><br> You have ordered {$quantity} x {$food}";
  $total = $quantity * $price;
  echo "<br><br> Total cost: \${$total}";

?> 