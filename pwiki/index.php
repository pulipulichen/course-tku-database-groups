<?php

$CONFIG_USER = "";

# ===============================

$file_path = "./.pwiki_data/title.txt";
$PAGE_TITLE = "pwiki";

if (file_exists($file_path)) {
  $PAGE_TITLE = file_get_contents($file_path);
} 

$file_path = "./.pwiki_data/content.txt";
$PAGE_CONTENT = "pwiki";

if (file_exists($file_path)) {
  $PAGE_CONTENT = file_get_contents($file_path);
}

?>

