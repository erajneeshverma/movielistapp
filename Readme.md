#A backend Application for Listing movies based on different criterias.


A backend Application for Listing movies based on different criterias.


{
	"info": {
		"_postman_id": "a0af28ef-a243-4a95-9bff-323cb06cdf97",
		"name": "MovieListApp",
		"description": "A collection for listing movies based on different criterias. plus add movie deletemovie,and update movie feature are included.",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "31287750"
	},
	"item": [
		{
			"name": "Add Movie",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n   \"title\":\"Iron Man 3\",\r\n   \"director\":\"George Catar\",\r\n   \"releaseyear\": \"2019\",\r\n   \"language\": \"English, Hindi\",\r\n   \"rating\":\"8.4\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/api/v1/movie/add",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"v1",
						"movie",
						"add"
					]
				}
			},
			"response": []
		},
		{
			"name": "get All movies",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": []
				},
				"url": {
					"raw": "http://localhost:5000/api/v1/movie/movies",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"v1",
						"movie",
						"movies"
					]
				}
			},
			"response": []
		},
		{
			"name": "Update a movie",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n   \"title\":\"DeadPool\",\r\n   \"director\":\"Tim Miller\",\r\n   \"releaseyear\": \"2016\",\r\n   \"language\": \"English, Hindi\",\r\n   \"rating\":\"8.9\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:5000/api/v1/movie/65b94faf40847e4fe36e80d1",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"v1",
						"movie",
						"65b94faf40847e4fe36e80d1"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete a movie",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:5000/api/v1/movie/65b94faf40847e4fe36e80d1",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"v1",
						"movie",
						"65b94faf40847e4fe36e80d1"
					]
				}
			},
			"response": []
		},
		{
			"name": "Search a movie",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:5000/api/v1/movie/search?q=iron man",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"v1",
						"movie",
						"search"
					],
					"query": [
						{
							"key": "q",
							"value": "iron man"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "filter by name",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:5000/api/v1/movie/filter?name=iron man",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"v1",
						"movie",
						"filter"
					],
					"query": [
						{
							"key": "name",
							"value": "iron man"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Filter by Director",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:5000/api/v1/movie/filterbydirector?director=Tim",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"v1",
						"movie",
						"filterbydirector"
					],
					"query": [
						{
							"key": "director",
							"value": "Tim"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Filter by release ear",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "filter by rating",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "Get Movie by id",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:5000/api/v1/movie/65b95f3f40c805697fdda444",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "5000",
					"path": [
						"api",
						"v1",
						"movie",
						"65b95f3f40c805697fdda444"
					]
				}
			},
			"response": []
		},
		{
			"name": "count and get result based on language",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		}
	]
}