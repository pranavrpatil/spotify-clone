console.log("Welcome to spotify");

// Initialize the variable
let songIndex = 0;
let audioElement = new Audio('./Music/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif');
let songItems =Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {
        songName : "Vijeta",
        filePath : "./Music/1.mp3",
        coverPath: "covers/1.jpg"
    },
    {
        songName : "Deko Kareeb Se",
        filePath : "./Music/2.mp3",
        coverPath: "covers/2.jpg"
    },
    {
        songName : "Har Pal Har Lamha",
        filePath : "./Music/3.mp3",
        coverPath: "covers/3.jpg"
    },
    {
        songName : "Memories",
        filePath : "./Music/4.mp3",
        coverPath: "covers/4.jpg"
    },
    {
        songName : "KGF",
        filePath : "./Music/5.mp3",
        coverPath: "covers/5.jpg"
    },
    {
        songName : "Koi Puche ",
        filePath : "./Music/6.mp3",
        coverPath: "covers/6.jpg"
    },
    {
        songName : "O Khuda",
        filePath : "./Music/7.mp3",
        coverPath: "covers/7.jpg"
    },
    {
        songName : "Maiya Teri Jai ",
        filePath : "./Music/8.mp3",
        coverPath: "covers/8.jpg"
    },
    {
        songName : "Rab Vi Khel ",
        filePath : "./Music/9.mp3",
        coverPath: "covers/9.jpg"
    },
    {
        songName : "Meri Tarha",
        filePath : "./Music/10.mp3",
        coverPath: "covers/10.jpg"
    }
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});



// Handle play -pause click

masterPlay.addEventListener('click' ,()=>{

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        console.log('Song Paused');
    }
})

// Listen to event 
audioElement.addEventListener('timeupdate' , ()=>{
    
    // update SeekBar
    if (audioElement.duration){
        progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
        myProgressBar.value =progress;
    }
   
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime =myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Music/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
    })    
})

// Next button 
document.getElementById('next').addEventListener('click',()=>{
   if(songIndex >=9){
    songIndex = 0;
   }else{
    songIndex += 1;
   } 
   audioElement.src = `Music/${songIndex + 1}.mp3`;
   masterSongName.innerText = songs[songIndex].songName;
   audioElement.currentTime = 0;
   audioElement.play();
   gif.style.opacity = 1;
   masterPlay.classList.remove('fa-circle-play');
   masterPlay.classList.add('fa-pause-circle');
   
})

// Previous Button
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
     songIndex = 0;
    }else{
     songIndex -= 1;
    } 
    audioElement.src = `Music/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause-circle');
 
 })