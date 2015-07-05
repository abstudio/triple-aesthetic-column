define(['./template.html',"abstudio~synthet@0.0.2", "abstudio~mrsscroll@0.1.0",'./style.css'], function(html, Synthet, mrsScroll) {
	
	Synthet.newComponent('triple-aesthetic-columns', html)
	.on('attached', function(element) {
		this.$.query('>div>div').forEach(function(el) {
			mrsScroll(el);
		});			
	})
	.register();
	
});