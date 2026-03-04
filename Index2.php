<?php
function test() {
    define("Greeting", "Welcome to W3Schools.com!");
}


test();
echo "<br>";
echo Greeting;


const myvar = "WATERMELON";
echo "<br>";
echo myvar;


echo "<br>";
echo __DIR__;


echo "\n";
echo __FILE__;



$x = 5;
$y = 10;

echo "<br>";
echo ($x <=> $y);

$x = 10;
$y = 10;

echo "<br>";
echo ($x <=> $y);


$x = 15;
$y = 10;

echo "<br>";
echo ($x <=> $y);


$fname = "Talha";
$lname = "Arham";

echo "<br>" . 145679023 . "<br>";

echo $fname . $lname . "<br>";

echo $fname . " " . $lname;

$age = 20;
$person = $age >= 18 ? "Adult" : "Teen";

echo "<br>" . $person;