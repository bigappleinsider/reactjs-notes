const fs = require('fs');//fs is a core module, there is no need to require it with npm


const fetchNotes = () => {
  try {
    const noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


const addNote = (title, body) => {
  let notes = fetchNotes();
  const note = {
    title,
    body
  };

  const duplicates = notes.filter((item) => item.title === note.title);
  if(duplicates.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};
const getAll = () => {
  let notes = fetchNotes();
  return notes;
};
const removeNote = (title) => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter((item) => (item.title!==title));
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};
const getNote = (title) => {
  let notes = fetchNotes();
  const note = notes.find((item) => (item.title===title));
  return note?note:undefined;
};

const logNote = (note) => {
  console.log('--');
  console.log(`Note: ${note.title} ${note.body}`);
};

module.exports = {
  addNote, getAll, removeNote, getNote, logNote
};
