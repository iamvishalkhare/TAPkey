<?php
include("PHPMailer/PHPMailerAutoload.php");
$mail= new PHPMailer;
$mail->isSMTP(); 
//$mail->SMTPDebug = 3;                                           
$mail->Host = 'smtp.gmail.com';           				
$mail->SMTPAuth = true;   					
$mail->Username = 'vishalkhare39@gmail.com';                    
$mail->Password = 'vi$h@l@2751992';                                  
$mail->Port =465;
$mail->SMTPSecure = 'ssl';
$mail->From='vishalkhare39@gmail.com';
$mail->FromName='Vishal Khare';
$mail->addReplyTo('vishalkhare39@gmail.com', 'Information');


?>