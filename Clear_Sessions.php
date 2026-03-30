<?php
    session_start();

    echo "Finish all work and close";
    session_unset();

    echo "Session Variables:";
    echo $_SESSION["student_name"] . "<br>";
    echo $_SESSION["id"] . "<br>";
?>