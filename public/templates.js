this["templates"] = this["templates"] || {};

this["templates"]["thing"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (thing) {
buf.push("<h2>Thing with guid: " + (jade.escape((jade_interp = thing.guid) == null ? '' : jade_interp)) + "</h2><form class=\"put\"><p><label>Name<br/><input type=\"text\" name=\"name\"" + (jade.attr("value", thing.name, true, false)) + " required=\"required\"/></label></p><p><label>Description<br/><textarea name=\"description\">" + (jade.escape(null == (jade_interp = thing.description) ? "" : jade_interp)) + "</textarea></label></p><p><button type=\"submit\">Save</button></p></form><form class=\"delete\"><p><button type=\"submit\">Delete</button></p></form>");}.call(this,"thing" in locals_for_with?locals_for_with.thing:typeof thing!=="undefined"?thing:undefined));;return buf.join("");
};

this["templates"]["things"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (things, undefined) {
buf.push("<h2>Things</h2><ul>");
// iterate things
;(function(){
  var $$obj = things;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var thing = $$obj[$index];

buf.push("<li><a" + (jade.attr("href", "#things/" + thing.guid, true, false)) + ">" + (jade.escape(null == (jade_interp = thing.name) ? "" : jade_interp)) + "</a><a href=\"#\"" + (jade.attr("data-delete-guid", thing.guid, true, false)) + ">×</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var thing = $$obj[$index];

buf.push("<li><a" + (jade.attr("href", "#things/" + thing.guid, true, false)) + ">" + (jade.escape(null == (jade_interp = thing.name) ? "" : jade_interp)) + "</a><a href=\"#\"" + (jade.attr("data-delete-guid", thing.guid, true, false)) + ">×</a></li>");
    }

  }
}).call(this);

buf.push("</ul><h3>Add a Thing</h3><form><p><label>Name<br/><input type=\"text\" name=\"name\" required=\"required\"/></label></p><p><label>Description<br/><textarea name=\"description\"></textarea></label></p><p><button type=\"submit\">Add</button></p></form>");}.call(this,"things" in locals_for_with?locals_for_with.things:typeof things!=="undefined"?things:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};