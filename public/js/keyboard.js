engine.keyboard = {};

engine.keyboard.hooks = [];

engine.keyboard.keys = {
    37: 'left',
    39: 'right',
    38: 'up',
    40: 'down'
};

engine.keyboard.matchKey = function(keyCode) {
    return engine.keyboard.keys[keyCode];
};

engine.keyboard.onKeyPress = function(keyCode) {
    for (var i in engine.keyboard.hooks) {
        engine.keyboard.hooks[i](engine.keyboard.matchKey(keyCode));
    }
}

document.addEventListener('keydown', function(event) {
    engine.keyboard.onKeyPress(event.keyCode);
});