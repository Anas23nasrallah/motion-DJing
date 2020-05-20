const logic = new Logic()
const sound = new Sound()
const motion = new Motion()

$('.soundBox').on('motion', async function (ev, data) {
    $audio = $(this).find('audio')
    $audio.get(0).play()     //from jQuery element to DOM element
    motion.addSpot(data)
})