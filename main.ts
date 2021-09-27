radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 5) {
        servos.P0.setAngle(85)
        done = 1
        basic.showIcon(IconNames.Cow)
    }
})
input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(85)
    basic.showString("O")
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(20)
    basic.showString("C")
})
let done = 0
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showString("FUEL BEACON")
servos.P0.setAngle(20)
done = 0
basic.forever(function () {
    if (done == 0) {
        radio.sendString("2")
        basic.showString("F")
        basic.pause(200)
    }
})
