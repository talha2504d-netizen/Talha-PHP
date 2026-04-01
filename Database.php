<?php
    $server_name = "localhost";
    $user_name = "root";
    $password = "";
    $database_name = "test";

    $conn = mysqli_connect($server_name, $user_name, $password, $database_name);

    if ($conn) {
        echo "Connected to Database";
    } else {
        echo "Not Connected";
    }
?>