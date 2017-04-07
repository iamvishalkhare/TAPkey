<?php
$servername = "localhost";
$username = "root";
$dbname = "TAPkey";
$pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

?>