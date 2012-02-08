class UrlMappings {

	static mappings = {
		"/$controller/$action?/$id?"{
		}
		
		"/presentations"(controller: "presentationRest") {
			action = [ GET: "findAll", POST: "create" ]
		}

		"/presentations/$id"(controller: "presentationRest") {
			action = [ GET: "findOne", PUT: "update", DELETE: "destroy" ]
		}

		"/"(view:"/index")
		"500"(view:'/error')
	}
}
