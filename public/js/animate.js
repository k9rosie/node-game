/*global engine*/

engine.animate = {};

engine.animate.animations = [];

engine.animate.transitions = [];

engine.animate.nextStep = function(transition) {
    var distanceX = (transition.destX - transition.originX) / engine.pixelSize;
    var distanceY = (transition.destY - transition.originY) / engine.pixelSize;
    var speedX = distanceX/transition.duration;
    var speedY = distanceY/transition.duration;

    transition.object.x += speedX;
    transition.object.y += speedY;

}

engine.animate.transition = function(transition) {

    if (transition.completed == true) {
        return;
    }

    if (transition.object.moving == false) {
        transition.object.moving = true;
    }

    if (!transition.paused) {
        var x, y;

        if (transition.destX <= transition.originX) {
            x = Math.ceil(transition.object.x);
        }

        if (transition.destY <= transition.originY) {
            y = Math.ceil(transition.object.y);
        }

        if (transition.destX >= transition.originX) {
            x = Math.floor(transition.object.x);
        }

        if (transition.destY >= transition.originY) {
            y = Math.floor(transition.object.y);
        }

        if (x != transition.destX || y != transition.destY) {
            engine.animate.nextStep(transition);
        } else {
            // set the object's x and y to the destX and destY just to be save
            transition.object.x = transition.destX;
            transition.object.y = transition.destY;
            transition.completed = true;
        }
    }
}

engine.animate.nextFrame = function(animation) {
    if (animation.spriteIndex == animation.sprites.length-1) { // if the sprite index reaches the last sprite in the animation sprite array
        if (animation.loop) {
            animation.spriteIndex = 0;
        } else {
            animation.completed = true;
        }
    } else {
        animation.spriteIndex++;
    }
    
    animation.object.spriteIndex = animation.sprites[animation.spriteIndex];

};

engine.animate.animate = function(animation, delta) {
    if (animation.completed == true) {
        return;
    }

    if (!animation.paused) {
        if (animation.timePassed == undefined) {
            animation.timePassed = 0;
        }
        if (animation.timePassed >= animation.speed) {
            engine.animate.nextFrame(animation);
            animation.timePassed = 0;
        } else {
            animation.timePassed += delta;
        }
    }
};

engine.animate.animateAll = function(delta) {
    for (var i in engine.animate.animations) {
        engine.animate.animate(engine.animate.animations[i], delta);

        if (engine.animate.animations[i].completed == true) {
            engine.animate.animations.splice(i, 1);
        }
    }
};

engine.animate.transitionAll = function() {
    for (var i in engine.animate.transitions) {
        engine.animate.transition(engine.animate.transitions[i]);

        if (engine.animate.transitions[i].completed == true) {
            engine.animate.transitions[i].object.moving = false;
            engine.animate.transitions.splice(i, 1);
        }
    }
}

/*
    Object animation {
        Object object // the object to be animated
        Object movement // the movement object
        Integer[] sprites // list of sprite indicies in the object's sprite array to switch to
        Integer spriteIndex // the current index in the animation sprite array
        Integer speed // the speed of the animation (the time in between frames)
        Integer timePassed // the time passed between an animation
        Boolean loop // should an animation play again after it's finished
        Boolean paused // is the animation paused
        Boolean completed // is the animation completed
    }
*/

/*
    Object transition {
        Object object // the object to be transitioned
        Integer duration // how long the transition should last
        Integer originX // the origin X
        Integer originY // the origin Y
        Integer destX // the destination X
        Integer destY // the destination Y
        boolean completed // is the movement completed
        boolean paused // is the movement paused
 */