input.onButtonPressed(Button.A, function () {
    nombre += 1
})
let nombre = 1
let etat_actuel = 0
let etat_passe = 0
basic.forever(function () {
    etat_actuel = pins.digitalReadPin(DigitalPin.P16)
    if (etat_actuel != etat_passe) {
        if (etat_actuel == 1) {
            if (nombre == 1) {
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    . # # # .
                    # # # # #
                    . . # . .
                    `)
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    . # # # .
                    # # # # #
                    . . . # .
                    `)
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    . # # # .
                    # # # # #
                    . . # . .
                    `)
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    . # # # .
                    # # # # #
                    . # . . .
                    `)
                nombre = -1
            }
        }
    }
    basic.clearScreen()
})
