<?php
    // function = write some code once, reuse when you need it
    //            type () after function name to invoke
    //            ex. add() subtract() multiply() divide()

    function happy_birthday(string $first_name, int $age){
      echo "Happy Birthday to you! <br>";
      echo "Happy Birthday to you! <br>";
      echo "Happy Birthday Dear {$first_name}! <br>";
      echo "Happy Birthday to you! <br>";
      echo "You are {$age} years old! <br><br>";
    }
    happy_birthday("Spongebob", 45);
    happy_birthday("Patrick", 40);
    happy_birthday("Squidward", 30);


    function is_even(int $number){
        return $number % 2 == 0;
    }
    echo is_even(9);

    function hypotenuse(int $a, int $b){
      return sqrt($a ** 2 + $b ** 2);
    }
    echo hypotenuse(3,4);

?>