package main

import (
	"celebridades/database"
	"celebridades/models"
	"celebridades/routes"
	"fmt"
)

func main() {
	models.Personalidades = []models.Personalidade{
		{Id: 1, Nome: "Nome 1", Historia: "Historia 1"},
		{Id: 2, Nome: "Nome 2", Historia: "Historia 2"},
	}
	database.ConexaoBancoDeDados()
	fmt.Println("Iniciando servidor Rest em Go")
	routes.HandleRequests()
}
