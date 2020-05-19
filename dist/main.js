// $(`.box-top-left`).on(`click`, async function(){
//     let synth = new Tone.Synth().toMaster()
//     synth.triggerAttackRelease('D4', '4n')
//     await Tone.start()

//     console.log('audio is ready')
// })



$(`.box-top-right`).on(`click`, async function(){
    var noiseSynth = new Tone.NoiseSynth().toMaster();
    noiseSynth.triggerAttackRelease("8n");
    await Tone.start()
	console.log('audio is ready')
})

$(`.box-bot-left`).on(`click`, async function(){
    var synth = new Tone.AMSynth().toMaster();
    synth.triggerAttackRelease("C4", "4n");
    await Tone.start()
	console.log('audio is ready')
})

$(`.box-bot-right`).on(`click`, async function(){

})