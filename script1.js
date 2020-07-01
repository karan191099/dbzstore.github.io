$(function () {
	
	$(".navbar-toggle").blur(function(event) {

	var screenWidth = window.innerWidth;
	if (screenWidth < 768) {
		$("#myNavbar").collapse('hide');
	}
 });




var switchActionToActive = function () {

	var classes = document.querySelector("#navHomeButton").className;
	classes = classes.replace(new RegExp("active", "g"),"");
	document.querySelector("#navHomeButton").className = classes;

	classes = document.querySelector("#navActionButton").className;
	if (classes.indexOf("active") == -1) {
		classes +="active";
		document.querySelector("#navActionButton").className = classes;
	}
};

});
