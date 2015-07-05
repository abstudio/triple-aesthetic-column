define(['./template.html',"abstudio~synthet@0.0.4", "abstudio~mrsscroll@0.1.1",'./style.css'], function(html, Synthet, mrsScroll) {
	
	Synthet.newComponent('triple-aesthetic-columns', html)
	.on('attached', function(element) {
		this.$.query('>div>div').forEach(function(el) {
			mrsScroll(el);
		});			
	})
	.register();
	
});