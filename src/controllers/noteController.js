const note = require("../models/note");
const noteModel1 = require("../models/note")

const createNote = async (res, req) => {
    const { title, description } = req.body;

    const newNote = new noteModel1({
        title: title,
        description: description,
        userId: req.userId
    });
    try {
        await newNote.save();
        res.status(201).json(newNote)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went Wrong" });
    }
}

const updateNote = async (res, req) => {
    const id = req.params.id;
    const { title, description } = req.body;

    const newNote = {
        title: title,
        description: description,
        userId: req.userId
    }
    try {
        await noteModel1.findByIdAndUpdate(id, newNote, { new: true });

        res.status(200).json(newNote)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went Wrong" });
    }
}
const deleteNote = async (res, req) => {
    const id = res.params.id;

    try {
        const note = await noteModel1.findByIdAndRemove(id);

        res.status(200).json(note)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went Wrong" })
    }

}
const getNote = async (res, req) => {
    try {
        const notes = await noteModel1.find()
        res.status(200).json(notes)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Something went wrong" })
    }

}
module.exports = {
    createNote,
    updateNote,
    getNote,
    deleteNote
}