<?php
require_once "../php/Database.php";
$db = new Database();

$type = isset($_GET['type'])? $_GET['type'] : "pitanie";
$page = isset($_GET['p'])? intval($_GET['p']) : 1;

$zhizni = $db->getZhizniAdmin($type,$page);
$pages_result = $db->pagesResultZhizn($type);
$pages = ceil($pages_result/40);

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
        else die("Error"); ?> <a href="addzhizn.php?type=<?=$type;?>">+</a></h1>


    <table class="table" style="margin-top:50px;">
        <thead>
        <tr>
            <th>id</th>
            <th>Название</th>
            <th>Описание</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        <?php foreach($zhizni as $zhizn):?>
            <tr>
                <td><?=$zhizn->getId();?></td>
                <td><?=$zhizn->getNazva();?></td>
                <td><?=$zhizn->getDescription();?></td>
                <td><a href="changezhizn.php?id=<?=$zhizn->getId();?>&type=<?=$type;?>">Изменить</a> <a href="deletezhizn.php?id=<?=$zhizn->getId();?>&type=<?=$type;?>">Удалить</a></td>
            </tr>
        <?php endforeach;?>
        </tbody>
    </table>


    <div style="border-top: 1px dashed grey;padding:10px;">
        <?php if($page!=1):?>
            <a href="semya.php?p=<?=$page-1;?>">назад</a>
        <?php endif;?>
        <?=$page;?> из <?=$pages;?>
        <?php if($page!=$pages):?>
            <a href="semya.php?p=<?=$page+1;?>">вперед</a>
        <?php endif;?>
    </div>

</div>


</body>

</html>