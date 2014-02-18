var f = function(a, b) {
	var g = b.bind(f, 2);
	g();
	console.log(g);
}

f(1, function(x) {
	console.log(x);
})