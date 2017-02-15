var engine = {};
engine.consoleHandle = document.getElementById('console');
engine.canvas = document.getElementById('canvas');
engine.handle = engine.canvas.getContext('2d');

engine.framerate = 60;
engine.pixelSize = 16;

engine.start = function() {
	engine.log("initialized.");
	
	/* testing */
	engine.model.parse([
	{
		sprites: ['sign'],
		spriteIndex: 0,
		x: 5,
		y: 4,
		collidable: false
	}]);

	engine.character.parse([{
		sprite: 'scientist',
		direction: 'east',
		x: 2,
		y: 4,
		collidable: false
	},
	{
		sprite: 'scientist',
		direction: 'east',
		x: 4,
		y: 4,
		collidable: false
	},
	{
		sprite: 'scientist',
		direction: 'south',
		x: 4,
		y: 2,
		collidable: false
	}]);
	
	engine.animate.animations.push({
		object: engine.character.characters[0],
		spriteIndex: 0,
		sprites: [3, 4, 3, 5],
		loop: true,
		speed: 0.1
	});
	
	/* end testing */
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
	engine.animate.animate(engine.animate.animations[0], delta);
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
	}
};

engine.clear = function() {
	engine.handle.clearRect(0, 0, engine.canvas.width, engine.canvas.height);
};

engine.log = function(message) {
	engine.consoleHandle.innerHTML += '<br />' + message;
};