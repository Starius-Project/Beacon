input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(85)
    basic.showString("O")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "up") {
        servos.P0.setAngle(85)
        basic.showIcon(IconNames.Cow)
    }
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(20)
    basic.showString("C")
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showString("FUEL BEACON")
servos.P0.setAngle(20)
basic.forever(function () {
    radio.sendString("2")
    basic.showString("F")
    basic.pause(200)
})
