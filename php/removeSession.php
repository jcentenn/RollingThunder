<?php
//echo json_encode($_POST['id']);

$id = $_POST['id'];

$dir = "../chat-sessions/";
$fileName = $dir.$id;
@unlink($fileName);

?>