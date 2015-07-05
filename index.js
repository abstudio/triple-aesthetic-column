define(['template.html',"abstudio~mrsScroll@0.1.0"], function(html, mrsScroll) {
	return function() {
		Synthet.newComponent('triple-aesthetic-columns', html)
		.on('attached', function(element) {
			this.$.query('>div>div').each(function(el) {
				mrsScroll(el);
			});			
		});
	}
});