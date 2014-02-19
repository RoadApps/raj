/**
 * Raj v1.0.1- RoadApps Async Javascript Loader
 * @license Copyright (c) 2013-2014, Road Apps All Rights Reserved.
 * Available via the MIT.
 * see: http://github.com/roadapps for details
 */

/*jslint plusplus: false, octal:false, strict: false */
/*global require: false, exports: false */

var Raj = function Raj(rsrc, cb) {
  var i = 0, c, a, t = 0,
      m = rsrc.length, k = 'script',
      e = 'addEventListener',
      b = function(err, src) {
        if(++t >= m) 
        	cb();
      	else
      		L(rsrc[++i]);
      },
      L = function(j) {
		    var c = document.getElementsByTagName(k)[0];
		    		a = document.createElement(k);
		    a.src = j;
		    a[e] ? (
		        a[e]("load", b.bind(this, null, j), !1), 
		        a[e]("error", b.bind(this, true, j), !1)
		      ) :
		      a.onreadystatechange = function() {
		        a.readyState in {loaded:1, complete:1} && (a.onreadystatechange = null, b(j));
		      };
		    c.parentNode.insertBefore(a, c);
      }
      L(rsrc[i]);
}