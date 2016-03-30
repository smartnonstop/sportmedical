<?php


class Travma{

    private $id;
    private $id_kind;
    private $nazva;
    private $text;

    public function setTravma($row){
        $this->id = intval($row['id']);
        $this->id_kind = (int)$row['id_kind'];
        $this->nazva = $row['nazva'];
        $this->text = $row['text'];
    }

    public function setNazva($nazva)
    {
        $this->nazva = $nazva;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getIdKind()
    {
        return $this->id_kind;
    }

    public function getNazva()
    {
        return $this->nazva;
    }

    public function getText()
    {
        return $this->text;
    }

    public function setId($id)
    {
        $this->id = (int)$id;
    }

    public function setIdKind($id_kind)
    {
        $this->id_kind = (int)$id_kind;
    }

    public function setText($text)
    {
        $this->text = $text;
    }





}