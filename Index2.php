<?php
// function test() {
//     define("Greeting", "Welcome to W3Schools.com!");
// }


// test();
// echo "<br>";
// echo Greeting;


// const myvar = "WATERMELON";
// echo "<br>";
// echo myvar;


// echo "<br>";
// echo __DIR__;


// echo "\n";
// echo __FILE__;



// $x = 5;
// $y = 10;

// echo "<br>";
// echo ($x <=> $y);

// $x = 10;
// $y = 10;

// echo "<br>";
// echo ($x <=> $y);


// $x = 15;
// $y = 10;

// echo "<br>";
// echo ($x <=> $y);


// $fname = "Talha";
// $lname = "Arham";

// echo "<br>" . 145679023 . "<br>";

// echo $fname . $lname . "<br>";

// echo $fname . " " . $lname;

// $age = 20;
// $person = $age >= 18 ? "Adult" : "Teen";

// echo "<br>" . $person;


if (5 > 3) {
    echo "<br>". "Have a good day!";
}

$a = 200;
$b = 33;
$c = 500;

if ($a > $b and $a < $c) {
    echo "<br>". "Both conditions are true";
}

date_default_timezone_set('Asia/Karachi');

$t = date("H");
echo $t;

if ($t < "20") {
    echo "<br>". "Have a good day!";
} else {
    echo "<br>". "Have a good night!";
}

if ($t < "20") {
    echo  "<br>". "Have a good day!";
}

else {
    echo "<br>". "Have a good night!";
}

$age = 18;

echo $age > 18 ? "<br>" . "You can get driving license" :"<br>" . "You are underage";

$number = 45;

echo $number > 33 ? "<br>" . "Number is greater" : "<br>" . "Number is lesser";

$weight = 55;

if ($age >= 25) {
    if ($weight > 79) {
    echo "<br>" . "You are eligible for swimming";
    } else {
        echo "<br>" . "You are not eligible for swimming";
    }
} else {
    echo "<br>" . "You are not eligible for swimming";
}

