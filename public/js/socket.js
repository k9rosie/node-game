engine.socket = io.connect();

engine.socket.on('mapData', function(data) {
    engine.map.parse(data);
});

engine.socket.on('characterData', function (data) {
    engine.character.parse(data);
});

engine.socket.on('modelData', function (data) {
    engine.model.parse(data);
});

engine.socket.on('playerData', function (data) {
    engine.player.parseAll(data);
});

engine.socket.on('newPlayer', function (data) {
    engine.player.parse(data);
});

engine.socket.on('movePlayer', function(data) {
   engine.player.move(engine.player.players[data.player], data.direction);
});

engine.socket.on('playerDisconnect', function(data) {
    delete engine.player.players[data];
});