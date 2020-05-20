class Sound{
    constructor(){
        console.log(`in sound.js`);
        
    }
    async makeSound(d, n){
        let synth = new Tone.Synth().toMaster()
		synth.triggerAttackRelease(d, n)
		await Tone.start()
    }
}