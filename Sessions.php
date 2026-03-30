<?php
    session_start();

    $_SESSION["student_name"] = "Ali";
    $_SESSION["id"] = "3456";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    echo $_SESSION["student_name"] . "<br>";
    echo $_SESSION["id"] . "<br>";
?>

    <a href="Some_page.php">Click Here to go another page and see session variables</a>
</body>
</html>