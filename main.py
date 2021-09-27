def on_button_pressed_a():
    pins.servo_set_pulse(AnalogPin.P8, 1500)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

pins.servo_write_pin(AnalogPin.P8, 60)

def on_forever():
    pass
basic.forever(on_forever)
