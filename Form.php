<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="<?php echo $_SERVER["PHP_SELF"] ?>" method="POST">
        Name: <input type="text" name="name"> <br>
        E-mail: <input type="text" name="email"> <br>
        Website: <input type="text" name="website">
        Comment: <textarea name="comment" rows="5" cols="40"></textarea> <br>

    Gender:
    <input type="radio" name="gender" value="female">Female
    <input type="radio" name="gender" value="male">Male
    <input type="radio" name="gender" value="other">Other

    <input type="submit" value="Submit">
    </form>
</body>
</html>

<?php
    function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = test_input($_POST["name"]);
        $email = test_input($_POST["email"]);
        $website = test_input($_POST["website"]);
        $comment = test_input($_POST["comment"]);
        $gender = test_input($_POST["gender"]);
    }
    // echo htmlspecialchars($_POST["name"]), "<br>";
    // echo htmlspecialchars($_POST["email"]);

    echo $name, "<br>";
    echo $email, "<br>";
    echo $website, "<br>";
    echo $comment, "<br>";
    echo $gender, "<br>";

?>
