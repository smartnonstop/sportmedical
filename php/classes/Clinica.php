<?php


class Clinica{

    private $id;
    private $id_kind;
    private $nazva;
    private $image;
    private $phone;
    private $adress;
    private $website;
    private $text;
    private $visited;

    public function setClinica($row){
        $this->id = (int)$row['id'];
        $this->id_kind = (int)$row['id_kind'];
        $this->nazva = $row['nazva'];
        $this->image = $row['image'];
        $this->phone = $row['phone'];
        $this->adress = $row['adress'];
        $this->website = $row['website'];
        $this->text = $row['text'];
        $this->visited = (int)$row['visited'];
    }

    public function setImage($image)
    {
        $this->image = $image;
    }

    public function getImage()
    {
        return $this->image;
    }

    public function setText($text)
    {
        $this->text = $text;
    }

    public function getId()
    {
        return $this->id;
    }

    public function setIdKind($id_kind)
    {
        $this->id_kind = (int)$id_kind;
    }

    public function setNazva($nazva)
    {
        $this->nazva = $nazva;
    }

    public function getIdKind()
    {
        return $this->id_kind;
    }

    public function setId($id)
    {
        $this->id = (int)$id;
    }

    public function getText()
    {
        return $this->text;
    }

    public function getAdress()
    {
        return $this->adress;
    }

    public function getNazva()
    {
        return $this->nazva;
    }

    public function getPhone()
    {
        return $this->phone;
    }

    public function getVisited()
    {
        return $this->visited;
    }

    public function getWebsite()
    {
        return $this->website;
    }

    public function setAdress($adress)
    {
        $this->adress = $adress;
    }

    public function setPhone($phone)
    {
        $this->phone = $phone;
    }

    public function setVisited($visited)
    {
        $this->visited = (int)$visited;
    }

    public function setWebsite($website)
    {
        $this->website = $website;
    }




}