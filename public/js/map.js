engine.map = {};

engine.map.tiles = [];

engine.map.set = function (mapData) {
	
};

engine.map.draw = function() {
	for (var t in engine.map.tiles) {
		var tile = engine.map.tiles[t];
		
		var vx = (tile.x * engine.pixelSize) - (engine.viewport.x * engine.pixelSize);
		var vy = (tile.y * engine.pixelSize) - (engine.viewport.y * engine.pixelSize);

		var bgIndex = tile.bgIndex;
		var fgIndex = tile.fgIndex;
		engine.handle.drawImage(tile.bgSprites[bgIndex], vx, vy);
		if (tile.fgSprites) {
			engine.handle.drawImage(tile.fgSprites[fgIndex], vx, vy);
		}
	}
	
};

engine.map.parse = function(mapData) {

	for (var y = 0; y < mapData.length; y++) {
		for (var x = 0; x < mapData[y].length; x++) {
			var tile = {};
			var data = mapData[y][x];

			tile.bgSprites = [];
			

			for (var bgSprite in data.bgSprites) {
				engine.sprite.store('tiles/'+data.bgSprites[bgSprite]+'.png');
				tile.bgSprites.push(engine.sprite.retrieve('tiles/'+data.bgSprites[bgSprite]+'.png'));
			}

			tile.bgIndex = data.bgIndex;

			if (data.fgSprites) {
				tile.fgSprites = [];
				tile.fgIndex = data.fgIndex;
				for (var fgSprite in data.fgSprites) {
					engine.sprite.store('tiles/'+data.fgSprites[fgSprite]+'.png');
					tile.fgSprites.push(engine.sprite.retrieve('tiles/'+data.fgSprites[fgSprite]+'.png'));
				}
			}

			tile.x = x;
			tile.y = y;
			engine.map.tiles.push(tile);
		}
	}
}

/*
	Object mapData {
		String[] bgSprites[]
		String[] fgSprites[]
		Integer bgIndex
		Integer fgIndex
		Integer x
		Integer y
		Boolean collidable
	}
*/