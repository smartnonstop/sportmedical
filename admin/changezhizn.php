<?php

require_once "../php/Database.php";
$db = new Database();

if($_SERVER['REQUEST_METHOD']=="POST"){
    $type = $_POST['type'];
    $data = array();
    $data['nazva']=$_POST['nazva'];
    $data['description']=$_POST['description'];
    $data['id']=(int)$_POST['id'];
    $data['text']=$_POST['text'];
    $rs = $db->updateZhiznAdmin($data);

    header("Location:zhizn.php?type=$type");
}else{

    $type = isset($_GET['type'])? $_GET['type'] : die("Error, go back");
    $id = isset($_GET['id'])? $_GET['id'] : die("Error, go back");

    $zhizn = $db->getZhiznById($id);
    if(!$zhizn)die("Error, go back");

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
                <li class="active"><a href="zhizn.php">Здоровая жизнь</a></li>
                <li><a href="clinics.php">Клиники и центры</a></li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>

<div class="container">
    <a href="zhizn.php?type=pitanie" style="margin-right:10px;">Питанье</a>
    <a href="zhizn.php?type=fitness" style="margin-right:10px;">Фитнес</a>
    <h1><?php if($type=='pitanie')echo "Питанье";
        elseif ($type=='fitness')echo "Фитнес";
        else die("Error"); ?></h1>


</div>

<div class="container">
    <div class="row">
        <div class="col-md-6" >
            <form role="form" action="changezhizn.php?type=<?=$type;?>" method="post">
                <div class="form-group">
                    <label for="nazva">Название</label>
                    <input type="text" class="form-control" id="nazva" name="nazva" value="<?=$zhizn->getNazva();?>">
                </div>
                <input type="hidden" name="type" value="<?=$type;?>">
                <input type="hidden" name="id" value="<?=$id;?>">
                <div class="form-group">
                    <label for="description">Описание</label>
                    <textarea cols="60" rows="2" name="description" id="description"><?=$zhizn->getDescription();?></textarea>
                </div>
                <textarea cols="60" rows="15" name="text"><?=$zhizn->getText();?></textarea><br>
                <button type="submit" class="btn btn-default">Сохранить</button>
            </form>

        </div>

    </div>

</div>







</body>

</html>