package org.inftel.rest.server

class Post {

	String content
	Date dateCreated

	static constraints = {
		content(blank: false)
		dateCreated()
	}

	static belongsTo = [ user : User ]
}
