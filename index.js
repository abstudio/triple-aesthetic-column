define(['./template.html', "abstudio~mrsscroll@0.1.1",'./style.css'], function(html, mrsScroll) {
	
	Synthet.newComponent('triple-aesthetic-columns', html)
	.on('attached', function(element) {
		this.$.query('>div>div').forEach(function(el) {
			mrsScroll(el);
		});			
	})
	.register();
	
});