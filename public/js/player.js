engine.player = {};

engine.player.players = {};

engine.player.draw = function() {
    for (var key in engine.player.players) {
        var player = engine.player.players[key];
        var vx = (player.x * engine.pixelSize) - (engine.viewport.x * engine.pixelSize) + 1;
        var vy = (player.y * engine.pixelSize) - (engine.viewport.y * engine.pixelSize) - 4;

        engine.handle.drawImage(player.sprites[player.spriteIndex], vx, vy);
    }
};

engine.player.onKeyPress = function(key) {
    console.log(engine.player.players[engine.socket.id].moving);
    if (!engine.player.players[engine.socket.id].moving) {
        engine.socket.emit('playerMove', key);
    }
};

engine.player.parse = function(data) {
    var player = {};
    player.socketid = data.socketid;
    player.sprites = [];

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

    player.sprites[0]  = engine.sprite.retrieve('characters/'+data.sprite+'/n0.png');
    player.sprites[1]  = engine.sprite.retrieve('characters/'+data.sprite+'/n1.png');
    player.sprites[2]  = engine.sprite.retrieve('characters/'+data.sprite+'/n2.png');
    player.sprites[3]  = engine.sprite.retrieve('characters/'+data.sprite+'/e0.png');
    player.sprites[4]  = engine.sprite.retrieve('characters/'+data.sprite+'/e1.png');
    player.sprites[5]  = engine.sprite.retrieve('characters/'+data.sprite+'/e2.png');
    player.sprites[6]  = engine.sprite.retrieve('characters/'+data.sprite+'/s0.png');
    player.sprites[7]  = engine.sprite.retrieve('characters/'+data.sprite+'/s1.png');
    player.sprites[8]  = engine.sprite.retrieve('characters/'+data.sprite+'/s2.png');
    player.sprites[9]  = engine.sprite.retrieve('characters/'+data.sprite+'/w0.png');
    player.sprites[10] = engine.sprite.retrieve('characters/'+data.sprite+'/w1.png');
    player.sprites[11] = engine.sprite.retrieve('characters/'+data.sprite+'/w2.png');

    player.spriteIndex = engine.player.direction(data.direction);
    player.x = data.x;
    player.y = data.y;
    player.collidable = data.collidable;
    player.moving = false;

    engine.player.players[data.socketid] = player;
};

engine.player.parseAll = function(data) {
    for (var key in data) {
        var player = {};
        var playerData = data[key];
        player.socketid = key;
        player.sprites = [];

        // TODO: loop this
        engine.sprite.store('characters/'+playerData.sprite+'/n0.png');
        engine.sprite.store('characters/'+playerData.sprite+'/n1.png');
        engine.sprite.store('characters/'+playerData.sprite+'/n2.png');
        engine.sprite.store('characters/'+playerData.sprite+'/e0.png');
        engine.sprite.store('characters/'+playerData.sprite+'/e1.png');
        engine.sprite.store('characters/'+playerData.sprite+'/e2.png');
        engine.sprite.store('characters/'+playerData.sprite+'/s0.png');
        engine.sprite.store('characters/'+playerData.sprite+'/s1.png');
        engine.sprite.store('characters/'+playerData.sprite+'/s2.png');
        engine.sprite.store('characters/'+playerData.sprite+'/w0.png');
        engine.sprite.store('characters/'+playerData.sprite+'/w1.png');
        engine.sprite.store('characters/'+playerData.sprite+'/w2.png');

        player.sprites[0]  = engine.sprite.retrieve('characters/'+playerData.sprite+'/n0.png');
        player.sprites[1]  = engine.sprite.retrieve('characters/'+playerData.sprite+'/n1.png');
        player.sprites[2]  = engine.sprite.retrieve('characters/'+playerData.sprite+'/n2.png');
        player.sprites[3]  = engine.sprite.retrieve('characters/'+playerData.sprite+'/e0.png');
        player.sprites[4]  = engine.sprite.retrieve('characters/'+playerData.sprite+'/e1.png');
        player.sprites[5]  = engine.sprite.retrieve('characters/'+playerData.sprite+'/e2.png');
        player.sprites[6]  = engine.sprite.retrieve('characters/'+playerData.sprite+'/s0.png');
        player.sprites[7]  = engine.sprite.retrieve('characters/'+playerData.sprite+'/s1.png');
        player.sprites[8]  = engine.sprite.retrieve('characters/'+playerData.sprite+'/s2.png');
        player.sprites[9]  = engine.sprite.retrieve('characters/'+playerData.sprite+'/w0.png');
        player.sprites[10] = engine.sprite.retrieve('characters/'+playerData.sprite+'/w1.png');
        player.sprites[11] = engine.sprite.retrieve('characters/'+playerData.sprite+'/w2.png');

        player.spriteIndex = engine.player.direction(playerData.direction);
        player.x = playerData.x;
        player.y = playerData.y;
        player.collidable = playerData.collidable;
        player.moving = false;

        engine.player.players[key] = player;
    }
};

engine.player.move = function(player, direction) {
    var destX = player.x;
    var destY = player.y;
    var viewDestX = engine.viewport.x;
    var viewDestY = engine.viewport.y;
    var sprites;

    switch (direction) {
        case 'north':
            destY = player.y - 1;
            viewDestY = engine.viewport.y - 1;
            sprites = [0, 1, 0, 2, 0];
            break;
        case 'east':
            destX = player.x + 1;
            viewDestX = engine.viewport.x + 1;
            sprites = [3, 4, 3, 5, 3];
            break;
        case 'south':
            destY = player.y + 1;
            viewDestY = engine.viewport.y + 1;
            sprites = [6, 7, 6, 8, 6];
            break;
        case 'west':
            destX = player.x - 1;
            viewDestX = engine.viewport.x - 1;
            sprites = [9, 10, 9, 11, 9];
            break;
        default:
            return;
    }

    var transition = {
        object: player,
        duration: 1,
        originX: player.x,
        originY: player.y,
        destX: destX,
        destY: destY,
        completed: false,
        paused: false
    };



    engine.player.animate(player, sprites, (5/60) /2, false);
    engine.animate.transitions.push(transition);

    if (player.socketid == engine.socket.id) {
        console.log(viewDestX);
        var viewportTransition = {
            object: engine.viewport,
            duration: 1,
            originX: engine.viewport.x,
            originY: engine.viewport.y,
            destX: viewDestX,
            destY: viewDestY,
            completed: false,
            paused: false
        };

        engine.animate.transitions.push(viewportTransition);
    }
};

engine.player.animate = function(player, sprites, speed, loop) {
    var animation = {
        object: player,
        sprites: sprites,
        spriteIndex: 0,
        speed: speed,
        loop: loop,
        paused: false,
        completed: false,
    };

    engine.animate.animations.push(animation);
};

// returns the sprite id for the specified direction
engine.player.direction = function(direction) {
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
    Object playerData {
        Object socket
        String sprite
        String direction
        Integer x
        Integer y
        Boolean collidable
        Boolean moving
    }
 */