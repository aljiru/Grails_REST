import org.inftel.rest.server.Presentation

class BootStrap {

    def init = { servletContext ->
		new Presentation(name: 'inftel', currentSlide: 0).save()
		new Presentation(name: 'presentacion-prueba', currentSlide: 1).save()
    }
    def destroy = {
    }
}
