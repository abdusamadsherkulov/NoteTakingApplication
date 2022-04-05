const { createNewNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');
const req = require('express/lib/request');
const router = require('express').Router();

//GET request to send existing data in db
router.get('/notes', (req, res) => {
    let results = notes;
    return res.json(results);
});

//POST request to input data to db.
//Pseudo-validation existant in index.js file for HTML page
router.post('/notes', (req, res) => {

    //UUID used to set unique ID to every object entered
    req.body.id = uuidv4();

    //Runs req.body through createNewNote function
    const note = createNewNote(req.body, notes);
    return res.json(note);
});

//UPDATE request
router.post('/update/:id', (req, res) => {
    let query = req.params.id

    const result = updateNote(query, notes)
    return res.json(result);
})

//DELETE request to remove items from db
router.delete('/notes/:id', (req, res) => {

    let query = req.params.id;

    const result = deleteNote(query, notes);
    return res.json(result);
});

module.exports = router;