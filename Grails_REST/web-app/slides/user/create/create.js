steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'slides/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Slides.User.Create
 * @parent index
 * @inherits jQuery.Controller
 * Creates users
 */
$.Controller('Slides.User.Create',
/** @Prototype */
{
	init : function(){
		this.element.html(this.view());
	},
	submit : function(el, ev){
		ev.preventDefault();
		this.element.dialog('close');
		this.element.find('[type=submit]').val('Sincronizando...')
		var user = new Slides.Models.User(el.formParams());
		$([Slides.Models.User]).trigger("sync",user);
		this.element.find('[type=submit]').val('Sincronizar');
	},
	click : function(el, ev){
		var form = this.element.find('form');
		this.element.dialog({modal:true, height: 262, width: 276, resizable: false,
			buttons: { "Sincronizar": function(){form.submit()} } } );
	}
})

});