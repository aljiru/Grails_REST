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
	},
	/* @Prototype */
	{
		// id, currentSlide, dateCreated, lastUpdated, version
		serialize : function() {
			var data = this._super();
			delete data.dateCreated;
			delete data.lastUpdated;
			return data;
		}
	});

})