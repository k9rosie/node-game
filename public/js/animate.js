/*global engine*/

engine.animate = {};

engine.animate.animations = [];

engine.animate.nextFrame = function(animation) {
    if (animation.spriteIndex == animation.sprites.length-1) { // if the sprite index reaches the last sprite in the animation sprite array
        if (animation.loop) {
            animation.spriteIndex = 0;
        }
    } else {
        animation.spriteIndex++;
    }
    
    animation.object.spriteIndex = animation.sprites[animation.spriteIndex];
};

engine.animate.animate = function(animation, delta) {

    if (animation.timePassed == undefined) {
        animation.timePassed = 0;
    }
    if (animation.timePassed >= animation.speed) {
        engine.animate.nextFrame(animation);
        animation.timePassed = 0;
    } else {
        animation.timePassed += delta;
    }
};

/*
    Object animation {
        Object object // the object to be animated
        Integer[] sprites // list of sprite indicies in the object's sprite array to switch to
        Integer spriteIndex // the current index in the animation sprite array
        Integer speed // the speed of the animation
        Integer timePassed // the time passed between an animation
        Boolean loop // should an animation play again after it's finished
    }
*/