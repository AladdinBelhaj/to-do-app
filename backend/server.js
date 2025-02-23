// backend/server.js

const express = require("express");
const cors = require("cors");
const sequelize = require("./models"); // Import sequelize instance for DB connection
const saveNote = require("./controllers/note.controller");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test the database connection before starting the server
sequelize.authenticate()
  .then(() => {
    console.log("Database connected successfully!");

    // If the DB connection is successful, set up routes
    saveNote(app); // Add routes for notes (created in controllers/note.controller.js)

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
    process.exit(1); // Exit the process if DB connection fails
  });
