const musicContainer = document.getElementById('music-container');
const progressContainer = document.getElementById('progress-container');
const cover = document.getElementById('cover');
const cover = document.getElementById('tetle');
const cover = document.getElementById('progress');
const cover = document.getElementById('audio');

const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Song titles
const songs = ['hey','summer','ukulele'];

// keep track of song
let songIndex = 2;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function