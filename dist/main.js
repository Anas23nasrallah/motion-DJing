
const logic = new Logic()
const sound = new Sound()
const motion = new Motion()

$(`.btn btn2`).on(`click`, function () {
motion.startMotion()
})

$(`.btn btn0`).on(`click`, function(){

})
$('.box-top-left').on('motion', function (ev, data) {
    sound.makeSound(`D4`, `4n`)
    motion.addSpot(data)
})

$('.box-top-right').on('motion', function (ev, data) {
    sound.makeSound(`D5`, `4n`)
    motion.addSpot(data)
})
$('.box-bot-left').on('motion', function (ev, data) {
    sound.makeSound(`C1`, `4n`)
    motion.addSpot(data)
})
$('.box-bot-right').on('motion', function (ev, data) {
    sound.makeSound(`C4`, `4n`)
    motion.addSpot(data)
})
