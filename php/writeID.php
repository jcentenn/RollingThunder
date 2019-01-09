<?php
 
$path = "path/to/new/text/file.txt";
 
$file = fopen($path,"w");
 
echo fwrite($file,"");
 
fclose($file);
 
?>