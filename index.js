(function(){
	// Find external links
	var links = document.querySelectorAll('a[href^="http"]');
	// Loop through links
	for (var i = 0; i < links.length; i++) {
		// Add target attribute
		links[i].setAttribute('target', '_blank');
	}
})();