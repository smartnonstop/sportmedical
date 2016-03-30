<?php


class News{

    private $id;
    private $id_kind;
    private $nazva;
    private $text;
    private $image;
    private $date;



    public function setNew($row){
        $this->id = (int)$row['id'];
        $this->id_kind = (int)$row['id_kind'];
        $this->nazva = $row['nazva'];
        $this->text = $row['text'];
        $this->image = $row['image'];
        $this->date = $row['date'];
    }

    public function setNazva($nazva)
    {
        $this->nazva = $nazva;
    }

    public function setText($text)
    {
        $this->text = $text;
    }

    public function setIdKind($id_kind)
    {
        $this->id_kind = (int)$id_kind;
    }

    public function setId($id)
    {
        $this->id = (int)$id;
    }

    public function getText()
    {
        return $this->text;
    }

    public function setDate($date)
    {
        $this->date = $date;
    }

    public function getNazva()
    {
        return $this->nazva;
    }

    public function getIdKind()
    {
        return $this->id_kind;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getDate()
    {
        return $this->date;
    }

    public function getImage()
    {
        return $this->image;
    }

    public function setImage($image)
    {
        $this->image = $image;
    }




}