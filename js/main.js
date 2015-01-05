/*
 * Fetch our data,
 * pass it to our pre-compiled template,
 * attach the result to our main container
 */

$.getJSON('data/tracks.json', function(data) {
    // Give it a (weak) random shuffle before printing
    data.tracks.sort(function() {
        return Math.random() - 0.5;
    });
    $("#main").html(template.block(data));
});


/*
 * Generate & inject margin line numbers for every track
 */

Handlebars.registerHelper('liner', function(options) {

    // Set a variable to hold our list items
    var lineList = "";
    // Configure the number of lines per track div
    var n = 4;
    // Make the list
    for (var i = 1; i <= n; i++) {
        // Get the index number for the current track
        var index = options.data.index;
        // Use the index to capture the right line numbers in a list of size n
        lineList += "<li>" + (n * index + i) + "</li>";
    }
    // Print the list
    return lineList;
});
