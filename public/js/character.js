/*global engine*/

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

engine.character.move = function(character, direction) {
    var destX = character.x;
    var destY = character.y;
    var sprites;

    switch (direction) {
        case 'north':
            destY = character.y - 1;
            sprites = [0, 1, 0, 2, 0];
            break;
        case 'east':
            destX = character.x + 1;
            sprites = [3, 4, 3, 5, 3];
            break;
        case 'south':
            destY = character.y + 1;
            sprites = [6, 7, 6, 8, 6];
            break;
        case 'west':
            destX = character.x - 1;
            sprites = [9, 10, 9, 11, 9];
            break;
        default:
            return;
    }

    var transition = {
        object: character,
        duration: 1,
        originX: character.x,
        originY: character.y,
        destX: destX,
        destY: destY,
        completed: false,
        paused: false
    };

    engine.character.animate(character, sprites, (5/60) /2, false);
    engine.animate.transitions.push(transition);
};

engine.character.animate = function(character, sprites, speed, loop) {
	var animation = {
		object: character,
		sprites: sprites,
        spriteIndex: 0,
		speed: speed,
		loop: loop,
        paused: false,
        completed: false,
	};
	
	engine.animate.animations.push(animation);
};

engine.character.transform = function(character, x, y) {
	character.x += x;
	character.y += y;
};

engine.character.teleport = function(character, x, y) {
	character.x = x;
	character.y = y;
}

// parses data passed in json from the server
engine.character.parse = function(data) {
	for (var i in data) {
		var character = {};
		var characterData = data[i];
		character.sprites = [];

		// TODO: loop this
		engine.sprite.store('characters/'+characterData.sprite+'/n0.png');
		engine.sprite.store('characters/'+characterData.sprite+'/n1.png');
		engine.sprite.store('characters/'+characterData.sprite+'/n2.png');
		engine.sprite.store('characters/'+characterData.sprite+'/e0.png');
		engine.sprite.store('characters/'+characterData.sprite+'/e1.png');
		engine.sprite.store('characters/'+characterData.sprite+'/e2.png');
		engine.sprite.store('characters/'+characterData.sprite+'/s0.png');
		engine.sprite.store('characters/'+characterData.sprite+'/s1.png');
		engine.sprite.store('characters/'+characterData.sprite+'/s2.png');
		engine.sprite.store('characters/'+characterData.sprite+'/w0.png');
		engine.sprite.store('characters/'+characterData.sprite+'/w1.png');
		engine.sprite.store('characters/'+characterData.sprite+'/w2.png');

		character.sprites[0]  = engine.sprite.retrieve('characters/'+characterData.sprite+'/n0.png');
		character.sprites[1]  = engine.sprite.retrieve('characters/'+characterData.sprite+'/n1.png');
		character.sprites[2]  = engine.sprite.retrieve('characters/'+characterData.sprite+'/n2.png');
		character.sprites[3]  = engine.sprite.retrieve('characters/'+characterData.sprite+'/e0.png');
		character.sprites[4]  = engine.sprite.retrieve('characters/'+characterData.sprite+'/e1.png');
		character.sprites[5]  = engine.sprite.retrieve('characters/'+characterData.sprite+'/e2.png');
		character.sprites[6]  = engine.sprite.retrieve('characters/'+characterData.sprite+'/s0.png');
		character.sprites[7]  = engine.sprite.retrieve('characters/'+characterData.sprite+'/s1.png');
		character.sprites[8]  = engine.sprite.retrieve('characters/'+characterData.sprite+'/s2.png');
		character.sprites[9]  = engine.sprite.retrieve('characters/'+characterData.sprite+'/w0.png');
		character.sprites[10] = engine.sprite.retrieve('characters/'+characterData.sprite+'/w1.png');
		character.sprites[11] = engine.sprite.retrieve('characters/'+characterData.sprite+'/w2.png');

		character.spriteIndex = engine.character.direction(characterData.direction);
		character.x = characterData.x;
		character.y = characterData.y;
		character.collidable = characterData.collidable;
		character.moving = false;

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
};

/*
	Object characterData {
		String sprite
		String direction
		Integer x
		Integer y
		Boolean collidable
		Boolean moving
	}
*/