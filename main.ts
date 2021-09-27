input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(85)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "up") {
        servos.P0.setAngle(85)
        basic.showIcon(IconNames.Cow)
    }
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(20)
})
radio.setGroup(1)
radio.setTransmitPower(1)
basic.showString("FUEL BEACON")
servos.P0.setAngle(20)
basic.forever(function () {
    radio.sendString("2")
    basic.pause(200)
})
