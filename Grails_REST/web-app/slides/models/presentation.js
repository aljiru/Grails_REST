steal('jquery/model', function() {

	/**
	 * @class Slides.Models.Presentation
	 * @parent index
	 * @inherits jQuery.Model
	 * Wraps backend presentation services.
	 */
	$.Model('Slides.Models.Presentation',
	/* @Static */
	{
		findAll : "http://ifgup.cloudfoundry.com/presentations",
		findOne : "http://ifgup.cloudfoundry.com/presentations/{id}",
		create : "http://ifgup.cloudfoundry.com/presentations",
		update : "http://ifgup.cloudfoundry.com/presentations/{id}",
		destroy : "http://ifgup.cloudfoundry.com/presentations/{id}",
		poll : function(startIndex, success, error) {
			// similar to findAll but polls the server and returns array of 'MyApp.Models.Notification objects
		}
	},
	/* @Prototype */
	{
		// id, currentSlide, dateCreated, lastUpdated, version
	});

})