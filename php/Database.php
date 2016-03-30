<?php

include_once "db.php";
require_once "classes/Travma.php";
require_once "classes/News.php";
require_once "classes/Clinica.php";
require_once "classes/Semya.php";
require_once "classes/Zhizn.php";


class Database{

    private $mysql;

    public function __construct()
    {
        $this->mysql = new mysqli(HOST,USER,PASS,DB);
        $this->mysql->query('SET NAMES utf8');
    }
    public function __destruct()
    {
        $this->mysql->close();
    }





    /*===================================================ADMIN======================================================*/







    /*-------------------BLOK NEWS------------------------------------*/


    public function getIdKindNews($keyword){
        $rs = $this->mysql->query("select * from news_kind where keyword='".$keyword."'");
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");
        $row = $rs->fetch_assoc();
        $id = intval($row['id']);
        return $id;
    }

    public function getNewById($id){
        $rs = $this->mysql->query("select * from news where id=".$id);
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $row = $rs->fetch_assoc();
        $new = new News();
        $new->setNew($row);

        return $new;
    }

    public function pagesResultNews($type){
        $id_kind = $this->getIdKindNews($type);
        $res = $this->mysql->query("select COUNT(*) as cnt from news where id_kind=$id_kind")->fetch_assoc();
        return $res['cnt'];
    }

    public function getNewsAdmin($kewyord,$page){
        $id_kind = $this->getIdKindNews($kewyord);
        $limit = 40;
        $offset = ($page-1)*$limit;
        $rs = $this->mysql->query("select * from news where id_kind=$id_kind order by id DESC LIMIT $offset, $limit");
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $news = array();

        while(($row = $rs->fetch_assoc())!=false){
            $new = new News();
            $new->setNew($row);
            $news[] =  $new;
        }

        return $news;
    }

    public function addNewAdmin($data){
        $id_kind = $this->getIdKindNews($data['type']);
        $rs = $this->mysql->query("Insert into news (id_kind, nazva, text, image) VALUES ($id_kind,'{$data['nazva']}',
        '{$data['text']}','img/news/{$data['type']}/{$data['image']}')");

        return $rs;
    }

    public function updateNewAdmin($data){
        $rs = $this->mysql->query("UPDATE news SET nazva='{$data['nazva']}', text='{$data['text']}',
        image='{$data['image']}' WHERE id={$data['id']}");
        return $rs;
    }

    public function deleteNewAdmin($id){
        $rs = $this->mysql->query("DELETE FROM news WHERE id=$id");
        return $rs;
    }







/*-----------------------BLOCK TRAVMI----------------------------------------*/

    public function getIdKindTravmi($keyword){
        $rs = $this->mysql->query("select * from travmi_kind where keyword='".$keyword."'");
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");
        $row = $rs->fetch_assoc();
        $id = intval($row['id']);

        return $id;
    }

    public function getTravmaById($id){
        $rs = $this->mysql->query("select * from travmi where id=".$id);
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $row = $rs->fetch_assoc();
        $travma = new Travma();
        $travma->setTravma($row);

        return $travma;

    }

    public function pagesResultTravmi($type){
        $id_kind = $this->getIdKindTravmi($type);
        $res = $this->mysql->query("select COUNT(*) as cnt from travmi where id_kind=$id_kind")->fetch_assoc();
        return $res['cnt'];
    }

    public function getTravmiAdmin($kewyord,$page){
        $id_kind = $this->getIdKindTravmi($kewyord);
        $limit = 40;
        $offset = ($page-1)*$limit;
        $rs = $this->mysql->query("select * from travmi where id_kind=$id_kind order by id DESC LIMIT $offset, $limit");
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $travmi = array();

        while(($row = $rs->fetch_assoc())!=false){
            $travma = new Travma();
            $travma->setTravma($row);
            $travmi[] =  $travma;
        }

        return $travmi;
    }


    public function addTravmaAdmin($data){
        $id_kind = $this->getIdKindTravmi($data['type']);

        $rs = $this->mysql->query("INSERT INTO travmi (id_kind, nazva, text) VALUES ($id_kind,'{$data['nazva']}','{$data['text']}')");

        return $rs;
    }

    public function updateTravmaAdmin($data){
        $rs = $this->mysql->query("UPDATE travmi SET nazva='{$data['nazva']}', text='{$data['text']}' where id={$data['id']}");
        return $rs;
    }

    public function deleteTravmaAdmin($id){
        $rs = $this->mysql->query("DELETE FROM travmi WHERE id=$id");
        return $rs;
    }






/*--------------------------------BLOCK CLINICA-------------------------------*/

    public function getIdKindClinica($keyword){
        $rs = $this->mysql->query("select * from clinics_kind where keyword='".$keyword."'");
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");
        $row = $rs->fetch_assoc();
        $id = intval($row['id']);

        return $id;
    }

    public function getClinicaById($id){
        $rs = $this->mysql->query("select * from clinics where id=".$id);
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $row = $rs->fetch_assoc();
        $clinica = new Clinica();
        $clinica->setClinica($row);

        return $clinica;
    }

    public function pagesResultClinica($type){
        $id_kind = $this->getIdKindClinica($type);
        $res = $this->mysql->query("select COUNT(*) as cnt from clinics where id_kind=$id_kind")->fetch_assoc();
        return $res['cnt'];
    }

    public function getClinicsAdmin($kewyord,$page){
        $id_kind = $this->getIdKindClinica($kewyord);
        $limit = 40;
        $offset = ($page-1)*$limit;
        $rs = $this->mysql->query("select * from clinics where id_kind=$id_kind order by id DESC LIMIT $offset, $limit");
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $clinics = array();

        while(($row = $rs->fetch_assoc())!=false){
            $clinica = new Clinica();
            $clinica->setClinica($row);
            $clinics[] =  $clinica;
        }

        return $clinics;
    }

    public function addClinicaAdmin($data){
        $id_kind = $this->getIdKindClinica($data['type']);
        $rs = $this->mysql->query("Insert into clinics (id_kind, nazva, image, phone, adress, website, text) VALUES
        ($id_kind,'{$data['nazva']}','img/clinics/{$data['type']}/{$data['image']}','{$data['phone']}','{$data['adress']}','{$data['website']}','{$data['text']}')");

        return $rs;
    }


    public function updateClinicaAdmin($data){
        $rs = $this->mysql->query("UPDATE clinics SET nazva='{$data['nazva']}', image='{$data['image']}', phone='{$data['phone']}',
        adress='{$data['adress']}', website='{$data['website']}', text='{$data['text']}' WHERE id={$data['id']}");
        return $rs;
    }

    public function deleteClinicaAdmin($id){
        $rs = $this->mysql->query("DELETE FROM clinics WHERE id=$id");
        return $rs;
    }





/*-------------------------------------BLOCK SEMYA-----------------------------------------------*/



    public function getIdKindSemya($keyword){
        $rs = $this->mysql->query("select * from semya_kind where keyword='".$keyword."'");
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");
        $row = $rs->fetch_assoc();
        $id = intval($row['id']);

        return $id;
    }

    public function getSemyaById($id){
        $rs = $this->mysql->query("select * from semya where id=".$id);
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $row = $rs->fetch_assoc();
        $semya = new Semya();
        $semya->setSemya($row);

        return $semya;
    }

    public function pagesResultSemya($type){
        $id_kind = $this->getIdKindSemya($type);
        $res = $this->mysql->query("select COUNT(*) as cnt from semya where id_kind=$id_kind")->fetch_assoc();
        return $res['cnt'];
    }

    public function getSemyasAdmin($kewyord,$page){
        $id_kind = $this->getIdKindSemya($kewyord);
        $limit = 40;
        $offset = ($page-1)*$limit;
        $rs = $this->mysql->query("select * from semya where id_kind=$id_kind order by id DESC LIMIT $offset, $limit");
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $semyas = array();

        while(($row = $rs->fetch_assoc())!=false){
            $semya = new Semya();
            $semya->setSemya($row);
            $semyas[] = $semya;
        }

        return $semyas;
    }

    public function addSemyaAdmin($data){
        $id_kind = $this->getIdKindSemya($data['type']);
        $rs = $this->mysql->query("Insert into semya (id_kind, nazva, description, text) VALUES
        ($id_kind,'{$data['nazva']}','{$data['description']}','{$data['text']}')");
        return $rs;
    }

    public function updateSemyaAdmin($data){
        $rs = $this->mysql->query("update semya set nazva='{$data['nazva']}', description='{$data['description']}',
        text='{$data['text']}' WHERE id={$data['id']}");
        return $rs;
    }

    public function deleteSemyaAdmin($id){
        $rs = $this->mysql->query("DELETE FROM semya WHERE id=$id");
        return $rs;
    }





/*-----------------------------------------BLOCK ZHIZN----------------------------------------------*/



    public function getIdKindZhizn($keyword){
        $rs = $this->mysql->query("select * from zhizn_kind where keyword='".$keyword."'");
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");
        $row = $rs->fetch_assoc();
        $id = intval($row['id']);

        return $id;
    }

    public function getZhiznById($id){
        $rs = $this->mysql->query("select * from zhizn where id=".$id);
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $row = $rs->fetch_assoc();
        $zhizn = new Zhizn();
        $zhizn->setZhizn($row);

        return $zhizn;
    }

    public function pagesResultZhizn($type){
        $id_kind = $this->getIdKindZhizn($type);
        $res = $this->mysql->query("select COUNT(*) as cnt from zhizn where id_kind=$id_kind")->fetch_assoc();
        return $res['cnt'];
    }

    public function getZhizniAdmin($kewyord,$page){
        $id_kind = $this->getIdKindZhizn($kewyord);
        $limit = 40;
        $offset = ($page-1)*$limit;
        $rs = $this->mysql->query("select * from zhizn where id_kind=$id_kind order by id DESC LIMIT $offset, $limit");
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $zhizni = array();

        while(($row = $rs->fetch_assoc())!=false){
            $zhizn = new Zhizn();
            $zhizn->setZhizn($row);
            $zhizni[] = $zhizn;
        }

        return $zhizni;
    }

    public function addZhiznAdmin($data){
        $id_kind = $this->getIdKindZhizn($data['type']);
        $rs = $this->mysql->query("Insert into zhizn (id_kind, nazva, description, text) VALUES
        ($id_kind,'{$data['nazva']}','{$data['description']}','{$data['text']}')");
        return $rs;
    }

    public function updateZhiznAdmin($data){
        $rs = $this->mysql->query("update zhizn set nazva='{$data['nazva']}', description='{$data['description']}',
        text='{$data['text']}' WHERE id={$data['id']}");
        return $rs;
    }

    public function deleteZhiznAdmin($id){
        $rs = $this->mysql->query("DELETE FROM zhizn WHERE id=$id");
        return $rs;
    }













/*=====================================================USER============================================================*/



/*----------------------------------------------TRAVMI--------------------------------------------*/

    public function getNameTravmiById($id){
        $rs = $this->mysql->query("select * from travmi_kind where id=".$id);
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $row = $rs->fetch_assoc();
        return $row;
    }

    public function getNameTravmiByType($type){
        $rs = $this->mysql->query("select * from travmi_kind where keyword='".$type."'");
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $row = $rs->fetch_assoc();
        return $row;
    }

    public function getTravmi($kewyord,$page){
        $id_kind = $this->getIdKindTravmi($kewyord);
        $limit = 20;
        $offset = ($page-1)*$limit;
        $rs = $this->mysql->query("select * from travmi where id_kind=$id_kind order by id DESC LIMIT $offset, $limit");
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $travmi = array();

        while(($row = $rs->fetch_assoc())!=false){
            $travma = new Travma();
            $travma->setTravma($row);
            $travmi[] =  $travma;
        }

        return $travmi;
    }




    /*----------------------------------------------CLINIKA--------------------------------------------*/


    public function getNameClinicsById($id){
        $rs = $this->mysql->query("select * from clinics_kind where id=".$id);
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $row = $rs->fetch_assoc();
        return $row;
    }

    public function getNameClinicsByType($type){
        $rs = $this->mysql->query("select * from clinics_kind where keyword='".$type."'");
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $row = $rs->fetch_assoc();
        return $row;
    }

    public function getClinics($kewyord,$page){
        $id_kind = $this->getIdKindClinica($kewyord);
        $limit = 12;
        $offset = ($page-1)*$limit;
        $rs = $this->mysql->query("select * from clinics where id_kind=$id_kind order by id DESC LIMIT $offset, $limit");
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $clinics = array();

        while(($row = $rs->fetch_assoc())!=false){
            $clinica = new Clinica();
            $clinica->setClinica($row);
            $clinics[] =  $clinica;
        }

        return $clinics;
    }




    /*---------------------------------NEWS------------------------------------------*/

    public function getNameNewsByType($type){
        $rs = $this->mysql->query("select * from news_kind where keyword='".$type."'");
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $row = $rs->fetch_assoc();
        return $row;
    }

    public function getNews($kewyord,$page){
        $id_kind = $this->getIdKindNews($kewyord);
        $limit = 13;
        $offset = ($page-1)*$limit;
        $rs = $this->mysql->query("select * from news where id_kind=$id_kind order by id DESC LIMIT $offset, $limit");
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $news = array();

        while(($row = $rs->fetch_assoc())!=false){
            $new = new News();
            $new->setNew($row);
            $news[] = $new;
        }

        return $news;
    }





    /*---------------------------------SEMYA---------------------------------------------*/


    public function getNameSemyaByType($type){
        $rs = $this->mysql->query("select * from semya_kind where keyword='".$type."'");
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $row = $rs->fetch_assoc();
        return $row;
    }

    public function getSemyas($kewyord,$page){
        $id_kind = $this->getIdKindSemya($kewyord);
        $limit = 20;
        $offset = ($page-1)*$limit;
        $rs = $this->mysql->query("select * from semya where id_kind=$id_kind order by id DESC LIMIT $offset, $limit");
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $semyas = array();

        while(($row = $rs->fetch_assoc())!=false){
            $semya = new Semya();
            $semya->setSemya($row);
            $semyas[] = $semya;
        }

        return $semyas;
    }




/*----------------------------------------ZHIZN---------------------------------------*/

    public function getNameZhiznByType($type){
        $rs = $this->mysql->query("select * from zhizn_kind where keyword='".$type."'");
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $row = $rs->fetch_assoc();
        return $row;
    }

    public function getZhizni($kewyord,$page){
        $id_kind = $this->getIdKindZhizn($kewyord);
        $limit = 20;
        $offset = ($page-1)*$limit;
        $rs = $this->mysql->query("select * from zhizn where id_kind=$id_kind order by id DESC LIMIT $offset, $limit");
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $zhizni = array();

        while(($row = $rs->fetch_assoc())!=false){
            $zhizn = new Zhizn();
            $zhizn->setZhizn($row);
            $zhizni[] = $zhizn;
        }

        return $zhizni;
    }



/*----------------------------------------NEWSALL--------------------------------------------------*/


    public function getNewsAll($page){

        $limit = 13;
        $offset = ($page-1)*$limit;
        $rs = $this->mysql->query("select * from news  order by id DESC LIMIT $offset, $limit");
        if(!isset($rs))die("Bad");
        if(empty($rs))die("Bad");

        $news = array();

        while(($row = $rs->fetch_assoc())!=false){
            $new = new News();
            $new->setNew($row);
            $news[] = $new;
        }

        return $news;
    }

    public function pagesResultNewsAll(){
        $res = $this->mysql->query("select COUNT(*) as cnt from news")->fetch_assoc();
        return $res['cnt'];
    }




























}