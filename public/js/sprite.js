engine.sprite = {};

engine.sprite.sprites = {};

engine.sprite.store = function (imgSrc) {
	if (engine.sprite.sprites[imgSrc] !== undefined) {
		return;
	}
	var sprite = {image: new Image(), loaded: false};

	sprite.image.src = "/static/assets/" + imgSrc;
	sprite.image.onload = function() {
		sprite.loaded = true;
	}

	engine.sprite.sprites[imgSrc] = sprite;
};

engine.sprite.retrieve = function(imgSrc) {
	return engine.sprite.sprites[imgSrc].image;
}

engine.sprite.allLoaded = function() {
	for (var sprite in engine.sprite.sprites) {
		if (engine.sprite.sprites[sprite].loaded === false) {
			return false;
		}
	}

	return true;
}