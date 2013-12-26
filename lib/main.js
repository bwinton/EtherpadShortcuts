/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true,
strict:true, undef:true, unused:true, curly:true, browser:true, white:true,
moz:true, esnext:false, indent:2, maxerr:50, devel:true, node:true, boss:true,
globalstrict:true, nomen:false, newcap:false */

"use strict";

var prefs = require('sdk/simple-prefs');
var pageMod = require("sdk/page-mod");

exports.main = function () {
  // Your code here…
  pageMod.PageMod({
    include: "*.etherpad.mozilla.org",
    contentScript: 'document.body.onkeypress = function (event) {\n' +
                   '  if (event.shiftKey &&\n' +
                   '      (event.ctrlKey || event.metaKey) &&\n' + 
                   '      (event.key === "l" || event.charCode === "L".charCodeAt(0))) {\n' +
                   '    content.document.querySelectorAll(".editbarbutton a")[4].click();\n' +
                   '  }\n' +
                   '};\n'
  });
};

exports.onUnload = function () {
    // Your code here…
};