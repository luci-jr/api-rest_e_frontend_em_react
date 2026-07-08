package routes

import (
	"celebridades/controllers"
	"log"
	"net/http"
	"github.com/gorilla/mux"
)

func HandleRequests() {
	r := mux.NewRouter()
	r.HandleFunc("/", controllers.Home)
	r.HandleFunc("/api/personalidades", controllers.TodasPersonalidades).Methods("Get")
	r.HandleFunc("/api/personalidades/{id}", controllers.RetornoDePersonalidade).Methods("Get")
	log.Fatal(http.ListenAndServe(":8000", r))
}
