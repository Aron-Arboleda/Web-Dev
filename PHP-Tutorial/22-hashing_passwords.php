<?php
    // hashing = transforming sensitive data (password)
    //           into letters, numbers, and/or symbols
    //           via a mathematical process. (similar to encr
    //           Hides the original data from 3rd parties.

    $password = "hello1234";
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    echo $hashed_password . "<br>";

    if (password_verify($password, $hashed_password)){
        echo "You are Logged in.";
    } else {
        echo "You are not logged in.";
    }
?>