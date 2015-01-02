this["template"] = this["template"] || {};
this["template"]["block"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "    <li class=\"track\">\n    		<div class=\"margin\">\n    				"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\n    		</div>\n    		<div class=\"content\">\n    				<p class=\"keyword\">the</p>\n    				<a href=\""
    + escapeExpression(((helper = (helper = helpers.trackUrl || (depth0 != null ? depth0.trackUrl : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"trackUrl","hash":{},"data":data}) : helper)))
    + "\" class=\"tracktitle\" target=\"_blank\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "_Track</a>\n    				<p>Author: <a href=\""
    + escapeExpression(((helper = (helper = helpers.authorUrl || (depth0 != null ? depth0.authorUrl : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"authorUrl","hash":{},"data":data}) : helper)))
    + "\" class=\"authorlink\" target=\"_blank\">"
    + escapeExpression(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"author","hash":{},"data":data}) : helper)))
    + "</a></p>\n    		</div>\n    </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<ul class=\"wrapper\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.tracks : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul>\n";
},"useData":true});;