<?php


class Semya{

    private $id;
    private $id_kind;
    private $nazva;
    private $description;
    private $text;

    public function setSemya($row){
        $this->id = (int)$row['id'];
        $this->id_kind = (int)$row['id_kind'];
        $this->nazva = $row['nazva'];
        $this->description = $row['description'];
        $this->text = $row['text'];
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

    public function setNazva($nazva)
    {
        $this->nazva = $nazva;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function getNazva()
    {
        return $this->nazva;
    }

    public function setDescription($description)
    {
        $this->description = $description;
    }





}