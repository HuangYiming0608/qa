let question = [
"Is INT_MAX 2147483647?",
"Is INT_MIN -2147483647?",
"Is KDE a DE?",
"Is X.org a DE?",
"Is Fedora an OS?",
"Is Gentoo an OS?",
"Is Wayland an OS?"
]
let point = 0
let answer = [
1,
0,
1,
0,
1,
1,
0
]
for (let index = 0; index <= 4; index++) {
    basic.showString("" + (question[index]))
    basic.clearScreen()
    if (input.buttonIsPressed(Button.A)) {
        if (answer[index] == 1) {
            point += 1
        }
        if (input.buttonIsPressed(Button.B)) {
            if (answer[index] == 0) {
                point += 1
            }
        }
    }
}
basic.clearScreen()
basic.pause(1000)
basic.showNumber(point)
