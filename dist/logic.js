class Logic{
    constructor(){
        this.songs = []
    }

    async getSongsFromDB() {
        const songs = await $.get(`/songs`)        
        this.songs = songs
        return this.songs
    }
}