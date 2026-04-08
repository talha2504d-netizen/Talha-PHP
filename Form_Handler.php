<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_name = $_POST["username"];
    $age = intval($_POST["age"]);
    $phone = intval($_POST["Phone"]);
    $Ticket = $_POST["Entry_Ticket"];

    $conn = mysqli_connect(
        "localhost","root","","users"
    );

    $sql = "
        INSERT INTO 
        guests (guest_name, age, phone_number, entry_ticket)
        VALUES 
        ('$user_name', $age, $phone, '$Ticket');
    ";

    mysqli_query($conn, $sql);
}
?>