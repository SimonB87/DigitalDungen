musicObject = {
  musicElem: document.getElementById("myAudio"),
  volume: 0.1,
  autoplay: function(){
    this.musicElem.volume = this.volume;
  },
  play: function(){
    this.musicElem.play();
  },
  pause: function(){
    this.musicElem.pause();
  },
  volumeChange: function(num){
    num = parseFloat(num);
    this.volume = this.volume + num;
    this.musicElem.volume = this.volume;
  },
  mute: function(){
    this.volume = 0;
    this.musicElem.volume = this.volume;
  },
  trackNumberPlaying: 0,
  trackList: [
    {mp3: "sawsquarenoise_-_01_-_Valiesse.mp3", ogg: "sawsquarenoise_-_01_-_Valiesse.ogg"},
    {mp3: "sawsquarenoise_-_02_-_Fantasa_de_los_Pinos.mp3", ogg: "sawsquarenoise_-_02_-_Fantasa_de_los_Pinos.ogg"},
    {mp3: "sawsquarenoise_-_03_-_El_Paraso_de_los_Troncos.mp3", ogg: "sawsquarenoise_-_03_-_El_Paraso_de_los_Troncos.ogg"},
    {mp3: "sawsquarenoise_-_04_-_Fantasa_del_Bello_Alcazar.mp3", ogg: "sawsquarenoise_-_04_-_Fantasa_del_Bello_Alcazar.ogg"},
    {mp3: "sawsquarenoise_-_05_-_Rito_Oculto.mp3", ogg: "sawsquarenoise_-_05_-_Rito_Oculto.ogg"}
  ],
  playOtherTrack: function(changeToTrack){
    //redesign by: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/audioTracks
    this.trackNumberPlaying = this.trackNumberPlaying + changeToTrack;
    const numberOfTracksInList = this.trackList.length - 1;

    if (this.trackNumberPlaying > numberOfTracksInList) {
      this.trackNumberPlaying = 0;
    }
    if (this.trackNumberPlaying < 0) {
      this.trackNumberPlaying = numberOfTracksInList;
    }

    const mp3Source = document.getElementById("sourceMp3");
    const oggSource = document.getElementById("sourceOgg");

    const currentUrl = window.location.href;

    const mp3Src = currentUrl + "/music/" + this.trackList[this.trackNumberPlaying].mp3;
    const oggSrc = currentUrl + "/music/" + this.trackList[this.trackNumberPlaying].ogg;

    this.musicElem.pause();

    mp3Source.src = mp3Src;
    oggSource.src = oggSrc;

    this.musicElem.play();

  }
}

musicObject.autoplay();