radio.onReceivedNumber(function (receivedNumber) {
    Opp2 = receivedNumber
    basic.showNumber(Opp2)
    if (hand > Opp2) {
        music.playMelody("C5 - C5 C5 C5 - - - ", 159)
    }
})
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (hand == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
    if (hand == 3) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (hand == 1) {
        hand = 4
    }
    radio.sendNumber(hand)
})
let hand = 0
let Opp2 = 0
radio.setGroup(1)
basic.forever(function () {
	
})
