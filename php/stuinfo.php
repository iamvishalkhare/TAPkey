<?php
session_start();
if(!isset($_SESSION['id']))
{
	header('Location: http://www.scanitjsr.org/tapkey');
	exit();
}
include("connection.php");
$name = $_GET['name'];
$email= $_GET['email'];
$phone= $_GET['phone'];
$room = $_GET['room'];
$per10= $_GET['per10'];
$year10= $_GET['year10'];
$board10= $_GET['board10'];
$per12 = $_GET['per12'];
$year12= $_GET['year12'];
$board12= $_GET['board12'];
$gradper= $_GET['gradper'];
$gradyear= $_GET['gradyear'];
$graduni= $_GET['graduni'];
$mcacgpa  = $_GET['mcacgpa'];
$lastupdated = date("l jS \of F Y h:i:s A");
$id=$_SESSION['id'];
$stmt3 = $pdo->prepare("UPDATE stu_tbl SET name = :name, email = :email, phone = :phone, room = :room, 10per = :per10, 10year = :year10, 10board = :board10, 12per = :per12, 12year = :year12, 12board = :board12, gradper = :gradper, gradyear = :gradyear, graduni = :graduni, mcacgpa = :mcacgpa, lastupdated = :lastupdated WHERE username = :id");

if($stmt3->execute(array(':name' => $name, ':email' => $email, ':phone' => $phone, ':room' => $room, ':per10' => $per10, ':year10' => $year10, ':board10' => $board10, ':per12' => $per12, ':year12' => $year12, ':board12' => $board12,  ':gradper' => $gradper, ':gradyear' => $gradyear, ':graduni' => $graduni, ':mcacgpa' => $mcacgpa, ':lastupdated' => $lastupdated, ':id' => $id)))
{
	echo "success";
	exit();
}
else
{
	echo "error";
	exit();
}
?>