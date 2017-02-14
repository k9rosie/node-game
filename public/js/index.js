var socket = io.connect();

socket.on('mapData', function(data) {
   engine.map.parse(data);
});

engine.start();