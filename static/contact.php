<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: Content-Type");
	require_once('./mail/class.phpmailer.php');
		
	if(!isset($_POST['name'])) die("Forbidden.");

	$subject = 'New message from '.$_POST['name'];
	$messageText =	'Name: '.$_POST['name'].'<br>'.
            'Phone: '.$_POST['phone'].'<br>'.
            'Mail: <a href="mailto:'.$_POST['email'].'">'.$_POST['email'].'</a><br>'.
            'MEssage: '.$_POST['question'].'<br>';
    
    sendMail($messageText, $subject);
    
    echo "success";

    function sendMail($body, $title){
        
		error_log("\n\n\n\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SENDING MAIL >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
		error_log("title:".$title);
		error_log("body:".$body);
		
		$mail = new PHPMailer();
		$mail->CharSet="UTF-8";
	    
		$mail->AddReplyTo("info@letsgrow.com.cn","info@letsgrow.com.cn");
		$mail->SetFrom('info@letsgrow.com.cn', "info@letsgrow.com.cn");
		//$mail->AddBCC("irving@appinchina.co" , "Irving Diaz");
		$mail->AddAddress('irving@appinchina.co');
		$mail->Subject    = $title;
		$mail->AltBody    = "To view the message properly, please use an HTML compatible email viewer.";
		$mail->MsgHTML($body);                                           
		$mail->Send();
    }
    
?>