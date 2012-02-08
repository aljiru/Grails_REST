import org.inftel.rest.server.Presentation

class BootStrap {

    def init = { servletContext ->
		new Presentation(id: 'inftel', currentSlide: 0).save()
		new Presentation(id: 'presentacion-prueba', currentSlide: 1).save()
    }
    def destroy = {
    }
}
