$(`.box-top-left`).on(`click`, async function(){
    let synth = new Tone.Synth().toMaster()
    synth.triggerAttackRelease('D4', '4n')
    await Tone.start()

    console.log('audio is ready')
})



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
    var instrument = new Tone.Instrument();
    instrument.sync()
//schedule 3 notes when the transport first starts
instrument.triggerAttackRelease('C4', '8n', 0)
instrument.triggerAttackRelease('E4', '8n', '8n')
instrument.triggerAttackRelease('G4', '8n', '4n')
//start the transport to hear the notes
// Transport.start()
    await Tone.start()
	console.log('audio is ready')
})
