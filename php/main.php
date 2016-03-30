<?php

require_once "Database.php";


$db = new Database();
header('Content-Type: text/html; charset=utf-8');
echo  $db->getTravmaById(3)->getNazva();