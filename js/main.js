/*
 * Fetch our data,
 * pass it to our pre-compiled template,
 * attach the result to our main container
 */

$.getJSON('data/tracks.json', function(data) {
    $("#main").html(template.block(data));
});


/*
 * Generate & inject margin line numbers for every track
 */

Handlebars.registerHelper('liner', function(options) {
    console.log(this);
    // Set a variable to hold our list items
    var lineList = "";
    // Set the number of lines in one track here
    var n = 4;

    for (var i = 1; i <= n; i++) {
        // Get the index number for each track
        var index = options.data.index;
        // Capture the line numbers starting with the right number for each track
        lineList += "<li>" + (n * index + i) + "</li>";
    }

    return lineList;
});
