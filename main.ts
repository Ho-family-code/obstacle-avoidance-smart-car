let val_R = 0
let val_L = 0
let strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
let distance = 0
basic.forever(function () {
    distance = k_Bit.ultra()
    val_L = k_Bit.obstacle(MotorObs.LeftSide)
    val_R = k_Bit.obstacle(MotorObs.RightSide)
    if (val_L == 0 && val_R == 0) {
        k_Bit.run(DIR.RunBack, 40)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(1000)
        k_Bit.run(DIR.TurnLeft, 20)
        basic.pause(200)
    } else if (val_L == 1 && val_R == 0) {
        k_Bit.run(DIR.TurnLeft, 20)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    } else if (val_L == 0 && val_R == 1) {
        k_Bit.run(DIR.TurnRight, 20)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (distance <= 10 && (val_L == 1 && val_R == 1)) {
        k_Bit.run(DIR.TurnRight, 20)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (distance > 10 && (val_L == 1 && val_R == 1)) {
        k_Bit.run(DIR.RunForward, 40)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
})
