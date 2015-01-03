/*
* Fetch our data, pass it to our pre-compiled template and attach the
* result to our main container
*/

$.getJSON('data/tracks.json', function(data) {
    $("#main").html(template.block(data));
});


/*
* Generate & inject margin line numbers
*/

Handlebars.registerHelper('liner', function(options) {
  var ret = "";

  for(var i=1, j=5; i<j; i++) {
    ret = ret + "<li>" + (options.data.index + i) + "</li>";
  }

  return ret;
});

// Handlebars.registerHelper('liner', function(context, options) {
//   var out = "", data;

//   for (var i=0; i<=(context.length); i++) {

//     if (options.data) {

//       data = Handlebars.createFrame(options.data || {});
//       data.index = i;
//     }

//     out += "<li>" + options.fn(context[i], { data: data }) + "</li>";

//   }

//   return out;
// });




