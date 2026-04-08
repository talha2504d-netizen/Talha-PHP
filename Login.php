<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="Login.php" method="POST">
        User Name: <input type="text" name="username"> <br>
        Age:  <input type="text" name="age"> <br>
        Phone:  <input type="text" name="Phone"> <br>
        Entry Ticket:  <input type="text" name="Entry_Ticket"> <br>
        <input type="submit" value="Login">
        <!-- <input type="submit" value="Signup"> -->
    </form>
</body>
</html>

<?php
    include("Form_Handler.php");
    // setcookie("username","Muhammad Talha", time() + 86400, "/");
    // setcookie("password","12345", time() + 86400, "/");
    // if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //     $username = $_POST["username"];
    //     $password = $_POST["password"];

    //     if ($_POST["username"] == $_COOKIE["username"] & $_POST["password"] == $_COOKIE["password"]) {
    //     echo "Login details correct. Login In...";
    //     } else {
    //     echo "Login details incorrect!";
    //     }
    // }
?>