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

Handlebars.registerHelper('liner', function(options) {
  var ret = "";

  for(var i=1, j=5; i<j; i++) {
    ret = ret + "<li>" + i + "</li>";
  }

  return ret;
});

/*
* Generate the style for our track hovers
*/



// For each track div, on hover
// 0. get the track's height & width
// 1. create a new div with those specs plus additional 40px to the left

// IN CSS: set z-index to overlay it on top of everything, set opacity <1
// (OPTIONAL) For each track div, extend the hoverable area 40px to the right
