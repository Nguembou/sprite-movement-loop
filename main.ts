input.onButtonPressed(Button.A, function () {
    p2.change(LedSpriteProperty.X, 1)
    p2.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    p2.change(LedSpriteProperty.X, 1)
    p2.change(LedSpriteProperty.Y, 1)
    p2.turn(Direction.Left, 0)
})
let p2: game.LedSprite = null
let p1 = game.createSprite(0, 0)
p2 = game.createSprite(4, 0)
basic.forever(function () {
	
})
