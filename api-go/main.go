package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"database/sql"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
)

type Posts struct {
	Id      string `form:"id" json:"id"`
	Title   string `form:"title" json:"title"`
	Content string `form:"content" json:"content"`
	Status  string `form:"status" json:"status"`
}

type Response struct {
	Status  int    `json:"status"`
	Message string `json:"message"`
	Data    []Posts
}

func returnAllPosts(w http.ResponseWriter, r *http.Request) {
	var posts Posts
	var arr_user []Posts
	var response Response

	db := connect()
	defer db.Close()

	rows, err := db.Query("select id,title,content,status from posts")
	if err != nil {
		log.Print(err)
	}

	for rows.Next() {
		if err := rows.Scan(&posts.Id, &posts.Title, &posts.Content, &posts.Status); err != nil {
			log.Fatal(err.Error())

		} else {
			arr_user = append(arr_user, posts)
		}
	}

	response.Status = 1
	response.Message = "Success"
	response.Data = arr_user

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)

}

// func insertUsersMultipart(w http.ResponseWriter, r *http.Request) {
// 	// var posts Posts
// 	// var arr_user []Posts
// 	var response Response

// 	db := connect()
// 	defer db.Close()

// 	err := r.ParseMultipartForm(4096)
// 	if err != nil {
// 		panic(err)
// 	}

// 	title := r.FormValue("title")
// 	content := r.FormValue("content")
// 	status := r.FormValue("status")

// 	_, err = db.Exec("INSERT INTO posts (title, content,status) values (?,?)",
// 		title,
// 		content,
// 		status,
// 	)

// 	if err != nil {
// 		log.Print(err)
// 	}

// 	response.Status = 1
// 	response.Message = "Success Add"
// 	log.Print("Insert data to database")

// 	w.Header().Set("Content-Type", "application/json")
// 	json.NewEncoder(w).Encode(response)

// }

func insertPosts(w http.ResponseWriter, r *http.Request) {
	// var posts Posts
	// var arr_user []Posts
	var response Response

	db := connect()
	defer db.Close()

	err := r.ParseForm()
	if err != nil {
		panic(err)
	}
	title := r.Form.Get("title")
	content := r.Form.Get("content")
	category := r.Form.Get("category")
	// created_date := r.Form.Get("created_date")
	// updated_date := r.Form.Get("updated_date")
	status := r.Form.Get("status")

	_, err = db.Exec("INSERT INTO posts (title, content,category,status) values (?,?,?,?)",
		title,
		content,
		category,
		status,
	)

	if err != nil {
		log.Print(err)
	}

	response.Status = 1
	response.Message = "Success Add"
	log.Print("Insert data to database")

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)

}

func updatePostsMultipart(w http.ResponseWriter, r *http.Request) {

	var response Response

	db := connect()
	defer db.Close()

	err := r.ParseMultipartForm(4096)
	if err != nil {
		panic(err)
	}

	id := r.FormValue("id")
	title := r.Form.Get("title")
	content := r.Form.Get("content")
	category := r.Form.Get("category")
	status := r.Form.Get("status")

	_, err = db.Exec("UPDATE posts set title = ?, content = ?, category= ?, status= ? where id = ?",
		title,
		content,
		category,
		status,
		id,
	)

	if err != nil {
		log.Print(err)
	}

	response.Status = 1
	response.Message = "Success Update Data"
	log.Print("Update data to database")

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)

}

func deletePostsMultipart(w http.ResponseWriter, r *http.Request) {
	var response Response

	db := connect()
	defer db.Close()

	err := r.ParseMultipartForm(4096)
	if err != nil {
		panic(err)
	}

	id := r.FormValue("id")

	_, err = db.Exec("DELETE from posts where id = ?",
		id,
	)

	if err != nil {
		log.Print(err)
	}

	response.Status = 1
	response.Message = "Success Delete Data"
	log.Print("Delete data to database")

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)

}

func connect() *sql.DB {
	db, err := sql.Open("mysql", "root:@tcp(localhost:3306)/cdatabase")

	if err != nil {
		log.Fatal(err)
	}

	return db
}

func main() {

	router := mux.NewRouter()
	router.HandleFunc("/posts", returnAllPosts).Methods("GET")
	router.HandleFunc("/posts", insertPosts).Methods("POST")
	router.HandleFunc("/posts", updatePostsMultipart).Methods("PUT")
	router.HandleFunc("/posts", deletePostsMultipart).Methods("DELETE")
	http.Handle("/", router)
	fmt.Println("Connected to port 1234")
	log.Fatal(http.ListenAndServe(":1234", router))

}
