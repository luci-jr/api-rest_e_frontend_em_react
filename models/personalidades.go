package models

type Personalidade struct {
	Id       int    `json:"id"`
	Nome     string `json:"nome"`
	Historia string `json:"historia"`
}

var Personalidades = []Personalidade{
	{Id: 1, Nome: "Personalidade 01", Historia: "historia 01"},
	{Id: 2, Nome: "Personalidade 02", Historia: "historia 02"},
}
