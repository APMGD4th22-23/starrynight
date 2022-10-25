let projectile: Sprite = null
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 1 5 . . . . . . . 
        . . . . . 5 5 1 5 5 . . . . . . 
        . . . . . 5 5 1 5 5 . . . . . . 
        . . . . . . 5 1 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-90, -30), randint(0, scene.screenHeight()))
    projectile.setFlag(SpriteFlag.Ghost, true)
})
