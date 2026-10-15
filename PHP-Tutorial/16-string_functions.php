<?php
    $username = "Aron Rez Arboleda";
    $for_implode = array("Aron", "Rez", "Arboleda");
    $phone = "1234-567-8990";
    // $username = strtolower($username);
    // $username = strtoupper($username);
    // $username = trim($username);
    // $username = str_pad($username, 20, "-");
    // $phone = str_replace("-", "/", $phone);
    // $username = strrev($username);
    // $username = str_shuffle($username);
    // $equals = strcmp($username, $username); // 0 means they're the same
    // $count = strlen($username); 
    // $index = strpos($username, " "); 
    // $firstname = substr($username, 0, 4); 
    // $lastname = substr($username, 5); 
    // $fullname = explode(" ", $username); 
    $for_implode = implode(" ", $for_implode); 

    echo $for_implode;
?>