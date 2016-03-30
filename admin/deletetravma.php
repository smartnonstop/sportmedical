<?php

require_once "../php/Database.php";

$db = new Database();
$id = isset($_GET['id'])? $_GET['id'] : die("Error, go back");
$type = isset($_GET['type'])? $_GET['type'] : die("Error, go back");

$db->deleteTravmaAdmin($id);
header("Location:travmi.php?type=$type");


