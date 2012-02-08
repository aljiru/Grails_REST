// map fixtures for this application

steal("jquery/dom/fixture", function(){
	
	$.fixture.make("presentation", 5, function(i, presentation){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "presentation "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
})