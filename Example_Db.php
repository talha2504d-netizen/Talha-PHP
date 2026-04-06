<?php
    $conn = mysqli_connect("localhost", "root", "", "Users");


    if (!$conn) {
        die("Connection Failed: ". mysqli_connect_error());
    }


    // $sql = "CREATE DATABASE ExampleDB";

    // if (mysqli_query($conn, $sql)) {
    //     echo "Database Created";
    // } else {
    //     echo "Error Creating Database". mysqli_error($conn);
    // }


    $sql = "CREATE TABLE IF NOT EXISTS guests(
    guest_id INTEGER AUTO_INCREMENT,
    guest_name VARCHAR(40) NOT NULL, 
    age INT, 
    phone_number INT(13) NOT NULL,
    Entry_Ticket VARCHAR(8) NOT NULL,
    PRIMARY KEY (guest_id)
    );";


  if (mysqli_query($conn, $sql)) {
    echo "<br>Created Table : guests";
    } else {
    echo "<br>Failed to create table";
    }


    $sql = "INSERT INTO guests (guest_name, age, phone_number, Entry_Ticket)
                VALUES('Amjad', 25, 03432125677911, 'd12re457');";

                 mysqli_query($conn, $sql); 
?>