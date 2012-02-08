steal('jquery/model', function(){

/**
 * @class Slides.Models.Presentation
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend presentation services.  
 */
$.Model('Slides.Models.Presentation',
/* @Static */
{
	findAll: "../presentations",
  	findOne : "../presentations/{id}", 
  	create : "../presentations",
 	update : "../presentations/{id}",
  	destroy : "../presentations/{id}"
},
/* @Prototype */
{});

})