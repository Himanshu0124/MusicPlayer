const music = document.querySelector("audio");
    const img = document.querySelector("img");
    const play = document.getElementById("play");
    const artist = document.getElementById("artist");
    const title = document.getElementById("title"); 
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    const songs = [
    {
      name: "Mehrama",
      title: "Mehrama",
      artist: "Arjit Singh",
    },
    {
        name: "LabonKo",
        title: "LabonKo",
        artist: "Gajender Verma",
      },
      {
        name: "InDino",
        title: "InDino",
        artist: "Armaan Malik",
      },
      {
        name: "Heartless",
        title: "Heartless",
        artist: "Boy Badsha",
      },
      {
        name: "tiktok",
        title: "tiktok",
        artist: "Artist Unknown",
      },
]
    let isPlaying = false;

    const playMusic =  ()=> {
        isPlaying = true;
        music.play(); 
        play.classList.replace("fa-play" ,"fa-pause");
        img.classList.add("anime");
    };

    const pauseMusic =  ()=> {
        isPlaying = true;
        music.pause(); 
        play.classList.replace("fa-pause" , "fa-play");
        img.classList.remove("anime");
    };

    play.addEventListener('click' , ()=> {
          isPlaying ? pauseMusic() : playMusic();
    });

    //Changing the Music data 

    const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = songs.name + ".mp3";
    img.src =  songs.name+".jpg";

    }
    songIndex = 0;

    const nextSong = () => {
        songIndex = (songIndex+1)%songs.length;
         
        loadSong(songs[songIndex]);
        playMusic();
    };
    const prevSong = () => {
        songIndex = (songIndex-1+songs.length)%songs.length;        
        loadSong(songs[songIndex]);
        pauseMusic();
    };
    next.addEventListener("click",nextSong);
    prev.addEventListener("click",prevSong);

 