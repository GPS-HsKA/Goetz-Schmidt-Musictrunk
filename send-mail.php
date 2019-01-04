<?php

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$to = "info@goetz-schmidt.de";
$subject = "DJ Anfrage!";
$name = $_POST['name'];
$date = $_POST['date'];
$email = $_POST['email'];
$text = $_POST['text'];
$message = 'Neue DJ Anfrage von ' . $name . ' --- ' . $email . ' --- ' . $text . ' --- ' . 'Veranstaltung am: ' . $date;
$from = "info@goetz-schmidt.de";
$headers = "From: $from";
mail($to,$subject,$message,$headers);
echo "Vielen Dank, deine Nachricht wurde gesendet.";

?>
