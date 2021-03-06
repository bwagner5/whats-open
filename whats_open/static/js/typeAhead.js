$.ajax({
    url: '/api/facilities/.json',
}).done(function (data) {
	//collecting list of facility names from server data	
	var rest_names = [];
	
	for (var i = 0; i < data.length; i++) {
		rest_names.push(data[i].name);
	};
	// For doumentation on jQuery's autocomplete: (api.jqueryui.com/autocomplete)     	 	
    $("#searchBar").autocomplete({  
    	source: rest_names,
    	//making it so the search result list doesn't physically appear 
    	messages: { 
        	noResults: '',
        	results: function(){} 
        },
        minLength: 0,
        response: function(event, ui) {
			//ui.content array contains all names that are returned from the search
            results = $.map(ui.content, function(r) { return r.value; });
            filtered = $.grep(facilities, function (r, idx) {
                    return ($.inArray(r.name, results) != -1);
            });
            construct_grid(filtered);
            // To prevent the page width from extending
            $('.ui-autocomplete').remove();
		}
	});
});
