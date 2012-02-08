class UrlMappings {

	static mappings = {
		"/$controller/$action?/$id?"{
		}
		
		"/presentations"(controller: "presentationRest") {
			action = [ GET: "findAll", POST: "save" ]
		}

		"/presentations/$id"(controller: "presentationRest") {
			action = [ GET: "findOne", PUT: "update", DELETE: "delete" ]
		}

		"/"(view:"/index")
		"500"(view:'/error')
	}
}
