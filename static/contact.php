<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: Content-Type");
	require_once('./mail/class.phpmailer.php');
		
	$data = json_decode(file_get_contents('php://input'), true);

	$subject = 'New message from '.$data['name'];
	$messageText =	'Name: '.$data['name'].'<br>'.
            'Phone: '.$data['phone'].'<br>'.
            'Mail: <a href="mailto:'.$data['email'].'">'.$data['email'].'</a><br>'.
            'Message: '.$data['question'].'<br>';
    
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