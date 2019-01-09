<?php
//echo json_encode($_POST['id']);

$id = $_POST['id'];
$path = "../chat-sessions/".$id;

$file = fopen($path,"w");
fwrite($file, $id);
fclose($file);

?>