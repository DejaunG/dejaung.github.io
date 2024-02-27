<?php
header('Content-Type: application/json');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = 'dejaung@acm.org';
    $email_content = "Name: " . $name . "\n";
    $email_content .= "Email: " . $email . "\n";
    $email_content .= "Subject: " . $subject . "\n";
    $email_content .= "Message: " . $message . "\n";

    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    if(mail($to, $subject, $email_content, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}
?>