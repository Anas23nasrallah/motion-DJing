const logic = new Logic()
const sound = new Sound()
const motion = new Motion()



const motionDetector = function () {

    $('.soundBox').on('motion', async function (ev, data) {
        $(this).off('motion')
        const $audio = $(this).find('audio')
        const audio = $audio.get(0)  //from jQuery element to DOM element
        audio.currentTime = 0
        audio.play()
        motion.addSpot(data)
    })

    setTimeout(motionDetector, 700)
}

motionDetector()