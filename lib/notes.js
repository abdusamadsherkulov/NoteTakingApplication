const fs = require('fs');
const path = require('path');

//Function to add new notes created to db.json file
const createNewNote = (body, notesArray) => {
    //set body to note const for clarity
    const note = body;

    //pushed object to array
    notesArray.push(note);

    //writes updated array to db.json file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
};

//function to delete object from db.json
const deleteNote = (id, notesArray) => {
    //makes copy of array for editing
    let updateNotes = notesArray;

    //finds index number of item to be deleted in array
    let indx = updateNotes.findIndex(notes => notes.id === id);

    //splice method used to remove object from array, based on index from requested object
    //Leave removed unused since we do not need to use deleted items
    let removed = updateNotes.splice(indx, 1);

    //writes updated array to db.json file
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: updateNotes }, null, 2)
    );
    return updateNotes;
};

module.exports = {
    createNewNote, 
    deleteNote
}