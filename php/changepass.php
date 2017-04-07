<?php
session_start();
if(!isset($_SESSION['id']))
{
	header('Location: http://www.scanitjsr.org/tapkey');
	exit();
}
include("connection.php");
$curpass=$_GET['curpass'];
$pass=$_GET['pass'];
$id=$_SESSION['id'];
$stmt = $pdo->prepare("SELECT * from stu_tbl WHERE username = :id");
$stmt->execute(array(':id' => $id));
$result=$stmt->fetch(PDO::FETCH_ASSOC);
if(!password_verify($curpass, $result['password']))
{
	echo "wrongpassword";
	exit();
}
else
{
	$newpass = password_hash($pass, PASSWORD_BCRYPT);
	$stmt2 = $pdo->prepare("UPDATE stu_tbl SET password = :pass WHERE username = :id");
	if($stmt2->execute(array(':pass' => $newpass, ':id' => $id)))
	{
		echo "success";
		exit();
	}
	else
	{
		echo "failed";
		exit();
	}
}
?>