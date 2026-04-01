<?php
    echo readfile("Names.txt");

    $my_file =fopen("Names.txt", "r");

    // echo fread($my_file, filesize("Names.txt"));
    echo fgets($my_file);

    fclose($my_file);
?>