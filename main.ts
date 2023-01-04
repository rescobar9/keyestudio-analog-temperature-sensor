let Centigrade_Temperature = 0
let ADC = 0
basic.clearScreen()
basic.forever(function () {
    serial.writeValue("temperature", pins.analogReadPin(AnalogPin.P0))
    ADC = pins.analogReadPin(AnalogPin.P0)
    Centigrade_Temperature = ADC * 75 / 1000 - 14
    basic.showNumber(Centigrade_Temperature)
    basic.pause(100)
})
