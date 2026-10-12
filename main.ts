input.onButtonPressed(Button.A, function () {
    Intento = randint(0, 5)
    basic.showNumber(Intento)
    if (Intento == Número_secreto) {
        basic.showIcon(IconNames.Heart)
    }
    if (true) {
    	
    } else {
        basic.showIcon(IconNames.No)
    }
})
let Intento = 0
let Número_secreto = 0
basic.showNumber(5)
Número_secreto = randint(0, 5)
Intento = 0
