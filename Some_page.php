<?php
session_start();
echo "Some Page" . "<br>";

echo $_SESSION["student_name"] . "<br>";
echo $_SESSION["id"] . "<br>";
?>