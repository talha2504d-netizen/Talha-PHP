<?php 
header("Content-type: text/plain");
// echo "Hello World";

$myvar = 5;


// var_dump(34654);
// var_dump(346.54);
// var_dump("Hello");


$is_student = TRUE;
$is_cat = FALSE;

// var_dump($is_cat);


var_dump(1, 3.2, "Amjad", TRUE, array(10, 6, 2));

var_dump(is_float(4));
var_dump(is_float("Welcome"));
$bool_var = TRUE;


echo $bool_var;
var_dump($bool_var);

echo "Hello\t";
echo "World\n";

$name = "Harry";
$str = "$name is displayed.\\t";
$str2 = "Byebye";
echo $str; 
echo $str2;

$fruits = array("Orange", "Grapes", "Apple");
echo count($fruits);