## Raj v.1.0.2 - RoadAppsJavascript
---

#### Fast and lightweight Javascript async loader with preloader.



**Simple example**:

```javascript
Raj(['assets/1.js', 'assets/2.js', 'assets/something.js'], function() {
  console.log('hell done');
});
```

**With config**

```javascript
Raj({
	baseUrl: 'http://localhost/',
	paths: {
		a: 'assets',
		lib: 'assets/js/libs'
	}
},
['lib/underscore.js', 'a/1.js', 'a/2.js', 'a/something.js'], function() {
	// 'lib/underscore.js' === 'http://localhost/assets/js/libs/underscore.js'
	console.log('hell done');
});

// pre-config

Raj.config = { baseUrl: '/assets/js' };

Raj(['jquery.js', 'bootstrap.js'], function() { console.log('ilovejs'); });

```

##### Using with bower

**Installing**
```bash
$ sudo npm -g i bower
$ cd your-project
$ bower install raj
```

*Copyright (C) 2014, RoadApps.net*
