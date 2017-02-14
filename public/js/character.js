engine.character = {};

engine.character.characters = [];

engine.character.draw = function() {
	for (var m in engine.character.characters) {
		var character = engine.character.characters[m];
		var vx = (character.x * engine.pixelSize) - (engine.viewport.x * engine.pixelSize) + 1;
		var vy = (character.y * engine.pixelSize) - (engine.viewport.y * engine.pixelSize) - 4;

		engine.handle.drawImage(character.sprites[character.spriteIndex], vx, vy);
	}
};

engine.character.move = function(character) {
	
}

engine.character.animate = function(character, direction) {

}

engine.character.transform = function(character, x, y) {
	character.x += x;
	character.y += y;
}

engine.character.teleport = function(character, x, y) {
	character.x = x;
	character.y = y;
}


engine.character.parse = function(characterData) {
	for (var c in characterData) {
		var character = {};
		var data = characterData[c];
		character.sprites = [];

		engine.sprite.store('characters/'+data.sprite+'/n0.png');
		engine.sprite.store('characters/'+data.sprite+'/n1.png');
		engine.sprite.store('characters/'+data.sprite+'/n2.png');
		engine.sprite.store('characters/'+data.sprite+'/e0.png');
		engine.sprite.store('characters/'+data.sprite+'/e1.png');
		engine.sprite.store('characters/'+data.sprite+'/e2.png');
		engine.sprite.store('characters/'+data.sprite+'/s0.png');
		engine.sprite.store('characters/'+data.sprite+'/s1.png');
		engine.sprite.store('characters/'+data.sprite+'/s2.png');
		engine.sprite.store('characters/'+data.sprite+'/w0.png');
		engine.sprite.store('characters/'+data.sprite+'/w1.png');
		engine.sprite.store('characters/'+data.sprite+'/w2.png');

		character.sprites[0]  = engine.sprite.retrieve('characters/'+data.sprite+'/n0.png');
		character.sprites[1]  = engine.sprite.retrieve('characters/'+data.sprite+'/n1.png');
		character.sprites[2]  = engine.sprite.retrieve('characters/'+data.sprite+'/n2.png');
		character.sprites[3]  = engine.sprite.retrieve('characters/'+data.sprite+'/e0.png');
		character.sprites[4]  = engine.sprite.retrieve('characters/'+data.sprite+'/e1.png');
		character.sprites[5]  = engine.sprite.retrieve('characters/'+data.sprite+'/e2.png');
		character.sprites[6]  = engine.sprite.retrieve('characters/'+data.sprite+'/s0.png');
		character.sprites[7]  = engine.sprite.retrieve('characters/'+data.sprite+'/s1.png');
		character.sprites[8]  = engine.sprite.retrieve('characters/'+data.sprite+'/s2.png');
		character.sprites[9]  = engine.sprite.retrieve('characters/'+data.sprite+'/w0.png');
		character.sprites[10] = engine.sprite.retrieve('characters/'+data.sprite+'/w1.png');
		character.sprites[11] = engine.sprite.retrieve('characters/'+data.sprite+'/w2.png');

		character.spriteIndex = engine.character.direction(data.direction);
		character.x = data.x;
		character.y = data.y;
		character.collidable = data.collidable;

		engine.character.characters.push(character);
	}
}

// returns the sprite id for the specified direction
engine.character.direction = function(direction) {
	switch (direction) {
		case 'north':
			return 0;
		case 'east':
			return 3;
		case 'south':
			return 6;
		case 'west':
			return 9;
		default:
			return 0;
	}
}

/*
	Object characterData {
		String sprite
		String direction
		Integer x
		Integer y
		Boolean collidable
	}
*/