var engine = {};
engine.consoleHandle = document.getElementById('console');
engine.canvas = document.getElementById('canvas');
engine.handle = engine.canvas.getContext('2d');

engine.framerate = 60;
engine.pixelSize = 16;

engine.start = function() {
	engine.log("initialized.");
	engine.keyboard.hooks.push(engine.player.onKeyPress);

	engine.loop();
};

engine.loop = function() {
	var time = new Date().getTime();
	setInterval(function() {
		time = new Date().getTime() - time;
		engine.update(time / 1000);
		engine.clear();
		engine.draw();
		time = new Date().getTime();
	}, 1000 / engine.framerate);
};


engine.update = function(delta) {
    engine.animate.animateAll(delta);
    engine.animate.transitionAll(delta);
};

engine.draw = function() {
	if (engine.sprite.allLoaded() === false) {
		setTimeout(function() {
			engine.draw();
		}, 100);
	} else {
		engine.map.draw();
		engine.model.draw();
		engine.character.draw();
		engine.player.draw();
	}
};

engine.clear = function() {
	engine.handle.clearRect(0, 0, engine.canvas.width, engine.canvas.height);
};

engine.log = function(message) {
	engine.consoleHandle.innerHTML += '<br />' + message;
};
