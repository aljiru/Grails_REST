package org.inftel.rest.server

class Presentation {

	String id 
	Integer currentSlide
	Date dateCreated
	
	static constraints = {
		id (size:3..100, unique: true) 
	}
}
