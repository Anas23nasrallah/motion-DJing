const logic = new Logic()
const sound = new Sound()
const motion = new Motion()



const mainFunc = function(){
    
    $('.soundBox').on('motion', async function (ev, data) {
        $(this).off('motion')
        $audio = $(this).find('audio')
        $audio.get(0).play()     //from jQuery element to DOM element
        motion.addSpot(data)
    })

    setTimeout(mainFunc,2000)
}

mainFunc()