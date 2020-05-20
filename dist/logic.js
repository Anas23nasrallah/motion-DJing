class Logic{
    constructor(){
        this.song = []
        this.save = false
    }


    setSave(val){this.save = val}
    saveSound(sound){this.song.push(sound)}
    isSave(){return this.save}
    saveSongInDB(name){
         $.post(`/song`, {src: this.song, name: name})
    }
    async getSongFromDB(name) {
        const song = await $.get(`/song/${name}`)
        console.log(song);
        // song[0].sequence.forEach(element => {
        //     let audioElement = new Audio(element)
        //     setTimeout(() => {
        //         audioElement.play()
        //     }, 3000)
        // });
        this.playSequence(song[0].sequence)
    }
    
    playSequence = (sounds) => {
        let audio = new Audio();
        let currentSoundIndex = 0;

        const playNextSound = () => {
          audio.src = sounds[currentSoundIndex++];
          audio.currentTime = 0;
          audio.play();
        };
      
        if (sounds.length) {  
          playNextSound();
      
          audio.addEventListener('ended', () => {
            if (currentSoundIndex < sounds.length) {
              playNextSound();
            }
          });
        }
      }
      
}