$(function() {

	$("a#submit").click(function() {
		var $q = $("input[name=q]");
		var qval = $q.val();
		var map = { "text" : qval };
		
		var url = "http://www.cnn.com/search/";
		
		var options = {
			url: url,
			map: map,
			method: "POST"
		};
		
		HiddenFormBuilder.create(options);
	});

});