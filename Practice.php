<?php 
$numbers = array(10, 20, 30, 40, 50);

function average($arr){
    $sum = 0;
    $i = 0;

    while($i < count($arr)){
        $sum += $arr[$i];
        $i++; 
    }
    return $sum / count($arr);
}

echo "Average = " . average($numbers);

// $i = 1;

// while($i <= 10){
//     echo "5 * $i = " . (5 * $i) . "<br>";
//     $i++;
// }
?>