<?php

$id = $_POST['TKK'];
$dir = "../configstore/";


        
$fileName = $dir.'google-translate-api';
$file = fopen($fileName, "w");
fwrite($file, $id);
fclose($file);

// echo  json_encode(array_values($existingSessions));
?>