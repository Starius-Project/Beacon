input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(180)
    control.waitMicros(2000)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(0)
    control.waitMicros(2000)
})
radio.setGroup(1)
radio.setTransmitPower(1)
servos.P0.setRange(0, 90)
basic.forever(function () {
	
})
