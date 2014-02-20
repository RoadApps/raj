/**
 * Raj v1.0.2 - RoadApps Async Javascript Loader
 * @license Copyright (c) 2013-2014, Road Apps All Rights Reserved.
 * Available via the MIT.
 * see: http://github.com/roadapps for details
 */

/*jslint plusplus: false, octal:false, strict: false */
/*global require: false, exports: false */

var Raj = function Raj(rsrc, cb) {

  var options = Raj.config || {
    baseUrl: '',
    paths: {}
  };

  // calling with config
  if(3 === arguments.length && typeof rsrc === 'object') {
    options.baseUrl = rsrc['baseUrl'] || '';
    options.paths = rsrc['paths'] || {};
    rsrc = cb;
    cb = arguments[2];
  }

  var i = 0, c, a, t = 0,
      m = rsrc.length, k = 'script',
      e = 'addEventListener',
      b = function(err, src) { // callback
        if(++t >= m)
          cb();
        else
          L(rsrc[++i]);
      },
      R = function(src) { // parse src
        var r = src.split('/');
        (typeof options.paths[r[0]] === 'string') &&
          (r[0] = options.paths[r[0]]);

        console.log(r);
        return ''.concat(options.baseUrl, r.join('/'))
      },
      L = function(j) { // loader
        var c = document.getElementsByTagName(k)[0];
            a = document.createElement(k);
        a.src = R(j);
        a[e] ? (
            a[e]("load", b.bind(this, null, R(j)), !1),
            a[e]("error", b.bind(this, true, R(j)), !1)
          ) :
          a.onreadystatechange = function() {
            a.readyState in {loaded:1, complete:1} && (a.onreadystatechange = null, b(R(j)));
          };
        c.parentNode.insertBefore(a, c);
      }
      L(rsrc[i]); // let the Raj begin
}
