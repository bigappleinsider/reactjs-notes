const fs = require('fs');

var originalNote = {
  title: 'dsafs',
  body: 'fvdfvdfdv'
};
const originalNoteString = JSON.stringify(originalNote);
console.log(originalNoteString);


fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);
console.log(note);
