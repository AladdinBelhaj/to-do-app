const express = require("express");
const cors = require("cors");
const multer = require("multer");
const upload = multer();
const connexion = require('./db').connexion;

const saveNote = (app) => {
  app.use(cors());

  app.post("/note", (req, res) => {
    const noteData = req.body; // Assuming you're sending the project data in the request body

    const insertQuery =
      "INSERT INTO note (title, description) VALUES (?, ?)";

    const values = [
        noteData.title,
        noteData.description
    ];

    connexion.query(insertQuery, values, (err, results) => {
      if (err) {
        console.error("Error saving project:", err);
        res.status(500).json({ message: "Error saving project" });
        return;
      }

      res.status(200).json({ message: "Note saved successfully" });
    });
  });

  app.get("/note", (req, res) => {
    // Handle retrieving notes
    const selectQuery = "SELECT * FROM note";

    connexion.query(selectQuery, (err, notes) => {
      if (err) {
        console.error("Error retrieving notes:", err);
        res.status(500).json({ message: "Error retrieving notes" });
        return;
      }

      res.status(200).json(notes);
    });
  });

  app.delete("/note/:id", (req, res) => {
    const noteId = req.params.id;

    const deleteQuery = "DELETE FROM note WHERE id = ?";

    connexion.query(deleteQuery, [noteId], (err, results) => {
      if (err) {
        console.error("Error deleting projet:", err);
        res.status(500).json({ message: "Error deleting note" });
        return;
      }

      console.log("note deleted successfully!");
      res.status(200).json({ message: "note deleted successfully" });
    });
  });
};
  

module.exports = saveNote;