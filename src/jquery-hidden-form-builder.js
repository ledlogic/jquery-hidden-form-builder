/*!
 * jQuery hidden form builder plugin 0.1.0
 * https://github.com/ledlogic/jquery-hidden-form-builder
 *
 * Copyright 2015 Jeff Conrad
 * Released under the MIT license
 */

var HiddenFormBuilder = {
	create: function(options) {
		var url = options.url,
			params = options.params,
			map = options.map,
			callback = options.callback,
			method = options.method ? options.method : "POST"
			submit = options.submit ? options.submit : true
		;

		var $form = $("<form></form>")
			.attr("action", url)
			.attr("method", method)
			.css("visibility", "hidden");
		;
	
		if (map) {
			for (var name in map) {
				var $input = $("<input/>")
					.attr("type", "hidden")
					.attr("name", name)
					.attr("value", map[name])
				;
				$form.append($input);
			}
		}
		
		if (params) {
			for (var i=0; i< params.length; i++) {
				var $input = $("<input/>")
					.attr("type", "hidden")
					.attr("name", params[i].name)
					.attr("value", params[i].value)
				;
				$form.append($input);
			}
		}
	
		$form.appendTo($("body"));
	
		if(submit) {
			$form.submit();
		}
	
		if (typeof callback != "undefined") {
			callback();
		}
	
		return $form;
	}
};
