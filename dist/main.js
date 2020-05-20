const logic = new Logic()
const motion = new Motion()
let currName

const loadMenu = async function(){
    const names = await logic.getAllNames()
    names.forEach(element => {
        const sorce = $(`#songs-template`).html()
        const template = Handlebars.compile(sorce)
        const newHtml = template({name: element.name})
        $(`#drop-down`).append(newHtml)
    });
    
}
$(`.btn2`).on(`click`, function(){//save
    currName = prompt("name for song:")  
    logic.setSave(true)

    const sorce = $(`#songs-template`).html()
    const template = Handlebars.compile(sorce)
    const newHtml = template({name: currName})
    $(`#drop-down`).append(newHtml)
})
$("select").change(function() {
    const name = $(`select option:selected`).data().id
    logic.getSongFromDB(name)
})

$(`.btn4`).on(`click`, function(){//stop
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
loadMenu()
