<?php

require_once "../php/Database.php";

$db = new Database();
$id = isset($_GET['id'])? $_GET['id'] : die("Error, go back");
$type = isset($_GET['type'])? $_GET['type'] : die("Error, go back");

$db->deleteClinicaAdmin($id);
header("Location:clinics.php?type=$type");


