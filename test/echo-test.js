$(function() {

	$("a#submit").click(function() {

		var params = [];
		var $q = $("input[name=q]");
		$q.each(function() {
			var val = $(this).val();
			params[params.length] = {
				"name": "q",
				"value": val
			};
		});
		
		var url = "http://scooterlabs.com/echo";
		
		var options = {
			url: url,
			params: params,
			method: "POST"
		};
		
		HiddenFormBuilder.create(options);
	});

});