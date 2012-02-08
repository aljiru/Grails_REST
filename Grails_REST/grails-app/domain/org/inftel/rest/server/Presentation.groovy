package org.inftel.rest.server

class Presentation {

	String name
	Integer currentSlide
	Date dateCreated
	Date lastUpdated
	
	static constraints = {
		name (size:3..100, unique: true)
	}
}
