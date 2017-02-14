engine.model = {};

engine.model.models = [];

engine.model.draw = function() {
	for (var m in engine.model.models) {
		var model = engine.model.models[m];
		var vx = (model.x * engine.pixelSize) - (engine.viewport.x * engine.pixelSize);
		var vy = (model.y * engine.pixelSize) - (engine.viewport.y * engine.pixelSize);

		var spriteIndex = model.spriteIndex;
		engine.handle.drawImage(model.sprites[spriteIndex], vx, vy);
	}
};

engine.model.parse = function (modelData) {
	for (var m in modelData) {
		var model = {};
		var data = modelData[m];

		model.sprites = [];

		for (var sprite in data.sprites) {
			engine.sprite.store('models/'+data.sprites[sprite]+'.png');
			model.sprites.push(engine.sprite.retrieve('models/'+data.sprites[sprite]+'.png'));
		}
	
		model.spriteIndex = data.spriteIndex;
		model.x = data.x;
		model.y = data.y;
		model.collidable = data.collidable;

		engine.model.models.push(model);
	}
};

/*
	Object modelData {
		String[] sprites[]
		Integer spriteIndex
		Integer x
		Integer y
		Boolean collidable
	}
*/