const router = require('express').Router();
const fs = require('fs');
let db = require('./db/db.json');

// 3001/api/
router.get('/notes',(req, res) => {
    res.json(db);
})
// 3001/api/notes (for a post)
router.post('/notes', (req, res) => {
let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: Math.random()
}    
db.push(newNote);
fs.writeFileSync('./db/db.json', JSON.stringify(db));

res.json(db)
});

module.exports = router;