const audio = document.querySelector('audio');
const keys = ['key-c','key-d','key-e','key-f','key-g','key-a','key-b','key-cs'];

const notes = [];
keys.forEach(function(key) {
    notes.push(document.getElementById(key));
});

for(let i=0; i<notes.length;i++) {
    notes[i].value = keys[i];
}

function keydown(event) {
    audio.src = './resources/'+ event.target.value +'.mp3';
}

notes.forEach(function(note) {
    note.addEventListener('mousedown',keydown);
});
