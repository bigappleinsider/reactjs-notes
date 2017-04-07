const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');


console.log(_.isString(true));
console.log(_.isString('Hello'));

const filteredArray = _.uniq(['Vlad', 'Jim', 'Jim', 'Vlad']);
console.log(filteredArray);
/*
console.log('Process', process.argv);
console.log('Yargs', yargs.argv);
*/
const command = yargs.argv._[0];

const title =  {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const body = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {title, body})
  .command('list', 'List all notes')
  .command('read', 'Read a note', {title})
  .command('remove', 'Remove a note', {title})
  .help()
  .argv;

if (command === 'list') {
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
}
else if (command === 'add' ){
  const note = notes.addNote(argv.title, argv.body);
  if (note){
    notes.logNote(note);
  }
  else{
    console.log("Could not create a note");
  }
}
else if (command === 'read' ){
  const note = notes.getNote(argv.title);
  if(note){
    notes.logNote(note);
  }
  else{
    console.log("Not found");
  }
}
else if (command === 'remove' ){
  const removedNote = notes.removeNote(argv.title);
  if(removedNote){
    console.log(`${yargs.argv.title} Removed`);    
  }
  else{
    console.log(`${yargs.argv.title} Not Found`);
  }
}
else{
  console.log('command not recognized');
}
