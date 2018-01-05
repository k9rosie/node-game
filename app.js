var express = require('express');
var http = require('http');
var socketio = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketio(server);

var host = process.env.IP || "0.0.0.0";
var port = process.env.PORT || 8080;
app.use('/static', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/html/index.html');
});

server.listen(port, host, function() {
	console.log("Listening on 8080");
});

var map = [
    [{bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}],
    [{bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}],
    [{bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}],
    [{bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}],
    [{bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}],
    [{bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}],
    [{bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}],
    [{bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}],
    [{bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}],
    [{bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}],
    [{bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'],                      collidable: false, bgIndex: 0            }, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}],
    [{bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}, {bgSprites: ['grass'], fgSprites: ['rock'], collidable: false, bgIndex: 0, fgIndex: 0}]
];

var players = {};
var characters = [
   /* {
        sprite: 'scientist',
        direction: 'east',
        x: 2,
        y: 4,
        collidable: false
    }*/
];
var models = [
    {
        sprites: ['sign'],
        spriteIndex: 0,
        x: 5,
        y: 4,
        collidable: false
    }
];

io.on('connection', function(socket) {
    console.log(socket.id + " connected");
    socket.emit('mapData', map);
    socket.emit('characterData', characters);
    socket.emit('modelData', models);

    var model = '';
    var randomNumber = Math.random() >= 0.5;
    if (randomNumber) {
        model = 'scientist';
    } else {
        model = 'officer';
    }

    var player = {
        socketid: socket.id,
        sprite: model,
        direction: 'east',
        x: 4,
        y: 4,
        collidable: true
    };

    players[socket.id] = player;

    socket.emit('playerData', players);
    socket.broadcast.emit('newPlayer', player);

    socket.on('playerMove', function(data) {
        switch(data) {
            case 'left':
                io.emit('movePlayer', {player: socket.id, direction: 'west'});
                players[socket.id].x--;
                break;
            case 'right':
                io.emit('movePlayer', {player: socket.id, direction: 'east'});
                players[socket.id].x++;
                break;
            case 'up':
                io.emit('movePlayer', {player: socket.id, direction: 'north'});
                players[socket.id].y--;
                break;
            case 'down':
                io.emit('movePlayer', {player: socket.id, direction: 'south'});
                players[socket.id].y++;
                break;
        }
    });

    socket.on('disconnect', function() {
        console.log(socket.id + " disconnected");
        delete players[socket.id];
        io.emit('playerDisconnect', socket.id);
    });
});

/*
    Object Player {
        Object socket
        String sprite
        String direction
        Integer x
        Integer y
        Boolean collidable
    }
 */