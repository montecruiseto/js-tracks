/*
* Fetch our data, pass it to our pre-compiled template and attach the
* result to the HTML element with id "main"
*/

$.getJSON('tracks.json', function(data) {
    $("#main").html(template.block(data));
});

