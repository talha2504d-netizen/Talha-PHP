<?php

setcookie("Favourite_car","Mercedes",time() + 40, "/");
setcookie("Username", "TestUser124", time() + 86400 * 4, "/");
setcookie("Userpassword", "TestUser124password", time() + 86400 * 4, "/");

echo $_COOKIE["Favourite_car"], "<br>";
echo $_COOKIE["Username"], "<br>";


if (isset($_COOKIE["Username"])) {
    echo "Username Exists";

} else {
    echo "User does not exist";
}

?>