<?php

require_once "../php/Database.php";

$type = isset($_GET['type'])? $_GET['type'] : die("Error, go back");

if($_SERVER['REQUEST_METHOD']=="POST"){

    $data = array();
    $data['nazva'] = $_POST['nazva'];
    $data['image'] = $_POST['image'];
    $data['phone'] = $_POST['phone'];
    $data['adress'] = $_POST['adress'];
    $data['website'] = $_POST['website'];
    $data['text'] = $_POST['text'];
    $data['type'] = $_POST['type'];

    $db = new Database();

    $db->addClinicaAdmin($data);
    header("Location:clinics.php?type=$type");

}







?>



<!doctype html>
<html>
<head>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <meta charset="utf-8">
</head>
<body>
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Brand</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li><a href="news.php">Новости</a></li>
                <li><a href="travmi.php">Травмы</a></li>
                <li><a href="semya.php">Здоровая семья</a></li>
                <li><a href="zhizn.php">Здоровая жизнь</a></li>
                <li class="active"><a href="clinics.php">Клиники и центры</a></li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>

<div class="container">
    <a href="clinics.php?type=medicina" style="margin-right:10px;">Мед центры</a>
    <a href="clinics.php?type=clinics" style="margin-right:10px;">Клиники</a>
    <a href="clinics.php?type=sport" style="margin-right:10px;">Спорт клубы</a>
    <a href="clinics.php?type=bassein" style="margin-right:10px;">Бассейны</a>
    <a href="clinics.php?type=zarybezh" style="margin-right:10px;">Зарубежные центры</a>
    <h1><?php if($type=='medicina')echo "Мед центры";
        elseif ($type=='clinics')echo "Клиники";
        elseif ($type=='sport')echo "Спорт клубы";
        elseif ($type=='bassein')echo "Бассейны";
        elseif ($type=='zarybezh')echo "Зарубежные центры";
        else die("Error"); ?></h1>

</div>

<div class="container">
    <div class="row">
        <div class="col-md-6" >
            <form role="form" action="addclinics.php?type=<?=$type;?>" method="post">
                <div class="form-group">
                    <label for="nazva">Название</label>
                    <input type="text" class="form-control" id="nazva" name="nazva">
                </div>
                <div class="form-group">
                    <label for="image">Картинка</label>
                    <input type="text" class="form-control" id="image" name="image">
                </div>
                <div class="form-group">
                    <label for="phone">Телефон</label>
                    <input type="text" class="form-control" id="phone" name="phone">
                </div>
                <div class="form-group">
                    <label for="adress">Адрес</label>
                    <input type="text" class="form-control" id="adress" name="adress">
                </div>
                <div class="form-group">
                    <label for="website">Веб-сайт</label>
                    <input type="text" class="form-control" id="website" name="website">
                </div>
                <input type="hidden" name="type" value="<?=$type;?>">
                <textarea cols="60" rows="15" name="text"></textarea><br>
                <button type="submit" class="btn btn-default">Сохранить</button>
            </form>

        </div>

    </div>

</div>







</body>

</html>