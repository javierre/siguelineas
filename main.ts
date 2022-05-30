let strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 120)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 120)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 120)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 120)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 120)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
})
