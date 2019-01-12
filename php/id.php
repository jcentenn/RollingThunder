<?php
//echo json_encode($_POST['id']);

$id = $_POST['id'];
$dir = "../chat-sessions/";


$existingSessions = array_filter(scandir($dir), function($item) {
    return !is_dir($item);
});
        
$fileName = $dir.$id;
$file = fopen($fileName, "w");
fwrite($file, $id);
fclose($file);

echo  json_encode(array_values($existingSessions));
?>