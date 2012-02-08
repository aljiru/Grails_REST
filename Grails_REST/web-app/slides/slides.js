steal(
	'./slides.css', 			// application CSS file
	'./models/models.js',		// steals all your models
	//'./fixtures/fixtures.js',	// sets up fixtures for your models
	'slides/presentation/create',
	'slides/presentation/list',
	function(){					// configure your application
		$("#presentations").slides_presentation_list();
		$("#create").slides_presentation_create();
		$('#presentations').slides_presentation_list();
		$('#create').slides_presentation_create();
})