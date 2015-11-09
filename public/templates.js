this["templates"] = this["templates"] || {};

this["templates"]["things"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (things, undefined) {
buf.push("<table>");
// iterate things
;(function(){
  var $$obj = things;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var thing = $$obj[$index];

buf.push("<tr><td><a" + (jade.attr("href", "/things/" + thing.guid, true, false)) + ">" + (jade.escape(null == (jade_interp = thing.name) ? "" : jade_interp)) + "</a></td><td><a href=\"#\">×</a></td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var thing = $$obj[$index];

buf.push("<tr><td><a" + (jade.attr("href", "/things/" + thing.guid, true, false)) + ">" + (jade.escape(null == (jade_interp = thing.name) ? "" : jade_interp)) + "</a></td><td><a href=\"#\">×</a></td></tr>");
    }

  }
}).call(this);

buf.push("</table>");}.call(this,"things" in locals_for_with?locals_for_with.things:typeof things!=="undefined"?things:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
};