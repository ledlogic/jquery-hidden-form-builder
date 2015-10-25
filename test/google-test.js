$(function() {

	$("a#submit").click(function() {
		var $q = $("input[name=q]");
		var qval = $q.val();
		var map = { "q" : qval };
		
		var url = "http://maps.google.com/maps";
		
		var options = {
			url: url,
			map: map,
			method: "GET"
		};
		
		HiddenFormBuilder.create(options);
	});

});