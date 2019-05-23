window.onload = function () {
	if (window.innerWidth >= 1100) {
		$(document).ready(function() {
			$('#fullpage').fullpage({
				//options here
				autoScrolling:true,
				navigation: true,
				dragAndMove: true,
			});
		
			//methods
			$.fn.fullpage.setAllowScrolling(true);
		});
	}
};