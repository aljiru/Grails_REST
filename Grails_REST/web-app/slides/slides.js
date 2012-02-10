steal(
	'steal/less',
	'./models/models.js',		// steals all your models
	//'./fixtures/fixtures.js',	// sets up fixtures for your models
	'slides/presentation/create',
	'slides/presentation/list',
	'slides/user/create',
	'slides/user/list'
	//'./plugins/jquery-1.7.1.min.js'
	).then(
	'./slides.less', 			// application CSS file
	'./css/smoothness/jquery-ui-1.8.17.custom.css',
	'./plugins/jquery-ui-1.8.17.custom.min.js',
	'./plugins/jquery.periodicalupdater.js',
	'./plugins/jquery.scrollTo.js',
	function(){					// configure your application
		
		// Se encarga de comunicarse con slides.js (libreria google)
		var lastSlide = -1; // para q solo se cambie cuando camba server
		var internalCurrentSlide = function(number) {
			// esto debe buscar o modificar el numero de slide actual
			if (typeof number == "undefined" ) {
				return curSlide;
			} else {
				console.log("movido a diapositiva " + number);
				if (lastSlide != number) { lastSlide = number; setCurSlide(number); }
			}
		}
		
		// Se calcula el tamaño de diapositivas
		var calculateZoom = function() {
			var width = $(window).width();
			width = width * 0.053;
			width = Math.floor(width, 50);
			width = Math.ceil(width, 100);
			console.log('calculate zoom width:' + $(window).width() + ', %:'+width);
			
			$('section.slides').css('zoom',width+"%");
		}
		
		//$('#presentations').slides_presentation_list();
		//$('#create-presentation').slides_presentation_create();
	    //$('#users').slides_user_list();
		//$('#create').slides_user_create();
		
		var configDialogSelector = '#config-dialog';
		$(configDialogSelector).slides_user_create();
		
		// Configura boton, delega click al usercer_create_controler y oculta
		$('#config-button').button({icons:{primary:"ui-icon-config"},text:false})
		                   .click(function(){$(configDialogSelector).click() });
		
		$('#left-button').button({icons:{primary:"ui-icon-left"},text:false})
		                   .click(function(){$(prevSlide())});                   	             
		$('#right-button').button({icons:{primary:"ui-icon-right"},text:false})
		                   .click(function(){$(nextSlide())});                   	             
		
		// Listen to user updates
		Slides.Models.User.bind('sync', function(ev, user){
			// A partir de aqui crear/sincronizar presentation
			$(configDialogSelector).dialog("close");
			if (user.type == "present") { // present
				var presentation = new Slides.Models.Presentation({
					name : user.session, currentSlide: internalCurrentSlide()
					});
				presentation.save(function(){
					steal.dev.log("saved presentation " + presentation.id);
					Slides.Models.Presentation.findAll({name: user.session}, function(saved){
						presentation.attr("id",saved[0].id);
					});
					});
				
				// Interceptamos las actualizaciones de curSlide
				$(document).on('slideenter', function(){
					presentation.update({'currentSlide': internalCurrentSlide()});
				});

			} else { // view
				// clase especial estilo view
				$('body').addClass('show-notes');
				// se eliminan los build porq los view no van por pasos
				$('.build').removeClass('build');
				$('.to-build').show().removeClass('to-build');
				$('#side-notes').load('https://docs.google.com/document/pub?id=1eX6pn1gBDpvYuNTNNVijoUMileOJhikopy9edf3ToHU', function(){
					$(this).fadeIn().find('img').each(function(){
						$(this).attr('src','https://docs.google.com/document/'+$(this).attr('src'));
						$(this).attr('height','');
						$(this).attr('width','');
					});
					
				});
				// se ocultan los botones
				$('button').hide();
				// se calcula el zoom
				$(window).resize(function(){calculateZoom()});calculateZoom();
				// Sincroniza el documento y slides
				$(document).on('slideenter', function(){
					$('#side-notes').scrollTo($('article.current').data('xref'),500);
				});
				
				// se activa la sincronizacion
				var interval = setInterval(function(){
					Slides.Models.Presentation.findAll({name: user.session}, 
						function(presentations){
							steal.dev.log(presentations);
							if (presentations.length == 0) {
								console.log("no presentation found");
								clearInterval(interval);
							} else {
								steal.dev.log("updated presentation " + presentations[0].name);
								internalCurrentSlide(presentations[0].currentSlide);
							}
						});
				},1000);
				
			}
			
		});
		
		// Activar el panel de configuracion
		//$(configDialogSelector).dialog({modal:true});
		
		
		
})