this["template"] = this["template"] || {};
this["template"]["block"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression, buffer = "        <li class=\"track\">\n            <ul class=\"liner\">\n                ";
  stack1 = ((helper = (helper = helpers.liner || (depth0 != null ? depth0.liner : depth0)) != null ? helper : helperMissing),(options={"name":"liner","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.liner) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n            </ul>\n            <div class=\"content\">\n                <div class=\"line1\">\n                    <p class=\"keyword\">the</p>\n                    <a href=\""
    + escapeExpression(((helper = (helper = helpers.trackUrl || (depth0 != null ? depth0.trackUrl : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"trackUrl","hash":{},"data":data}) : helper)))
    + "\" class=\"tracktitle\" target=\"_blank\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "_Track</a>\n                    ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.tag : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                </div>\n                <div class=\"line2\">\n                    <p class=\"bracket\">{</p>\n                    <p class =\"author\">Author: <a href=\""
    + escapeExpression(((helper = (helper = helpers.authorUrl || (depth0 != null ? depth0.authorUrl : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"authorUrl","hash":{},"data":data}) : helper)))
    + "\" class=\"authorlink\" target=\"_blank\">"
    + escapeExpression(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"author","hash":{},"data":data}) : helper)))
    + "</a></p>\n                    <p class=\"bracket\">}</p>\n                </div>\n            </div>\n        </li>\n";
},"2":function(depth0,helpers,partials,data) {
  return "";
},"4":function(depth0,helpers,partials,data) {
  return "<p class=\"new\">/* new */</p>";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<ul class=\"wrapper\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.tracks : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul>\n\n\n\n\n";
},"useData":true});;