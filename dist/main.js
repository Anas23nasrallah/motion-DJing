const logic = new Logic()
const motion = new Motion()
let currName

$(`.btn2`).on(`click`, function(){
    console.log(`in main.js: save button`);
    currName = prompt("name for song:")  
    logic.setSave(true)
})

$(`.btn1`).on(`click`, function(){ 
    let name = prompt("name for song:") 
    logic.getSongFromDB(name)
})
$(`.btn4`).on(`click`, function(){
    logic.setSave(false)
    logic.saveSongInDB(currName)
})
const motionDetector = function () {

    $('.soundBox').on('motion', async function (ev, data) {
        $(this).off('motion')
        const $audio = $(this).find('audio')
        const audio = $audio.get(0) 
        audio.currentTime = 0
        audio.play()
        motion.addSpot(data)
        if (logic.isSave()){
            logic.saveSound($audio.get(0).src)
        }
    })

    setTimeout(motionDetector, 800)
}

motionDetector()
