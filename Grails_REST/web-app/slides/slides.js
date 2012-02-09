steal(
	'./slides.css', 			// application CSS file
	'./models/models.js',		// steals all your models
	//'./fixtures/fixtures.js',	// sets up fixtures for your models
	'slides/presentation/create',
	'slides/presentation/list',
	'slides/user/create',
	'slides/user/list'
	//'./plugins/jquery-1.7.1.min.js'
	).then(
	'./css/smoothness/jquery-ui-1.8.17.custom.css',
	'./plugins/jquery-ui-1.8.17.custom.min.js',
	'./plugins/jquery.periodicalupdater.js',
	function(){					// configure your application
		
		var internalCurrentSlide = function(number) {
			// esto debe buscar o modificar el numero de slide actual
			if (typeof number == "undefined" ) {
				return curSlide;
			} else {
				// set current slide
				console.log("movido a diapositiva " + number);
				if (curSlide != number) {
					setCurSlide(number);
				}
			}
		}
		
		//$('#presentations').slides_presentation_list();
		//$('#create-presentation').slides_presentation_create();
	    //$('#users').slides_user_list();
		//$('#create').slides_user_create();
		
		var user = new Slides.Models.User();
		
		var configDialogSelector = '#config-dialog';
		$(configDialogSelector).slides_user_create(user);
		
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
				});
				Slides.Models.Presentation.findAll({name: user.session}, function(saved){
					presentation.attr("id",saved[0].id);
				});
				
				
				// Interceptamos las actualizaciones de curSlide
				$(document).on('slideenter', function(){
					presentation.update({'currentSlide': internalCurrentSlide()});
				});

			} else { // view
				
				var interval = setInterval(function(){
					Slides.Models.Presentation.findAll({name: user.session}, 
						function(presentations){
							console.log(presentations);
							if (presentations.length == 0) {
								console.log("no presentation found");
								clearInterval(interval);
							} else {
								console.log("updated presentation " + presentations[0].name);
								internalCurrentSlide(presentations[0].currentSlide);
							}
						});
				},1000);
				
			}
			
		});
		$(configDialogSelector).dialog({modal:true});
		
		
		
})