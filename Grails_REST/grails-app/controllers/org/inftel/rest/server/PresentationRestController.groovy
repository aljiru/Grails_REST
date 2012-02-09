package org.inftel.rest.server

import org.apache.commons.logging.LogFactory;

import grails.converters.JSON

class PresentationRestController {
	private static final log = LogFactory.getLog(this)
	def findAll() {
		log.info("Buscando todos: " + params)
		if (params.containsKey("name")) {
			def ps = []
			Presentation p = Presentation.findByName(params.name)
			ps << p
			render ps as JSON
		} else {
			render Presentation.list() as JSON
		} 
	}

	def findOne() {
		log.info("Buscando uno: " + params)
		Presentation p = Presentation.get(params.id)
		render p as JSON
	}

	def create() {
		log.info("Añadiendo: " + params)
		Presentation p = new Presentation(params)
		p.save(flush: true)
		render p as JSON
	}

	def update() {
		log.info("Actualizando: " + params)
		Presentation p = Presentation.get(params.id)
		p.merge(params)
		p.save()
		log.info(p)
		render ""
	}

	def destroy() {
		log.info("Eliminando: " + params)
		Presentation p = Presentation.get(params.id)
		p.delete()
		render ""
	}
}
