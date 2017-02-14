engine.viewport = {};

engine.viewport.x = 0;
engine.viewport.y = 0;

engine.viewport.set = function(x, y) {
	engine.viewport.x = x;
	engine.viewport.y = y;
}

engine.viewport.transform = function (x, y) {
	engine.viewport.x += x;
	engine.viewport.y += y;
}