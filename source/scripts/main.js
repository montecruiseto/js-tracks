/*
* Generate & inject margin line numbers
*/
Handlebars.registerHelper('liner', function(context, options) {
  var out = "", data;

  for (var i=1; i<=(context.length*4); i++) {
    if (options.data) {
      data = Handlebars.createFrame(options.data || {});
      data.index = i;
    }

    out += "<li>" + options.fn(context[i], { data: data }) + "</li>";
  }

  return out;
});

/*
* Fetch our data, pass it to our pre-compiled template and attach the
* result to our main container
*/

$.getJSON('data/tracks.json', function(data) {
    $("#main").html(template.block(data));
});
