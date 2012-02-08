package org.inftel.rest.server

import grails.converters.JSON

class PresentationRestController {

	def findAll() {
		if (params.name) {
			Presentation p = Presentation.findByName(params.name)
			render p.all as JSON
		} else {
			render Presentation.list() as JSON
		} 
	}

	def findOne() {
		Presentation p = Presentation.get(params.id)
		render p as JSON
	}

	def save() {
	}

	def update() {
	}

	def destroy() {
	}
}
