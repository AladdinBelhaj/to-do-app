// backend/controllers/note.controller.js
const Note = require('../models/note');

const saveNote = (app) => {
  app.post("/note", async (req, res) => {
    const noteData = req.body;

    try {
      // Save note using Sequelize
      await Note.create({
        title: noteData.title,
        description: noteData.description,
        date: noteData.date,
        color: noteData.color
      });

      res.status(200).json({ message: "Note saved successfully" });
    } catch (err) {
      console.error("Error saving note:", err);
      res.status(500).json({ message: "Error saving note" });
    }
  });

  app.get("/note", async (req, res) => {
    try {
      const notes = await Note.findAll();
      res.status(200).json(notes);
    } catch (err) {
      console.error("Error retrieving notes:", err);
      res.status(500).json({ message: "Error retrieving notes" });
    }
  });

  app.delete("/note/:id", async (req, res) => {
    const noteId = req.params.id;

    try {
      await Note.destroy({
        where: {
          id: noteId
        }
      });

      res.status(200).json({ message: "Note deleted successfully" });
    } catch (err) {
      console.error("Error deleting note:", err);
      res.status(500).json({ message: "Error deleting note" });
    }
  });
};

module.exports = saveNote;
