import express from "express";
import cors from "cors";
import * as fs from "node:fs/promises";

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  try {
    throw new Error("error from express");
  } catch (err) {
    const errorMessage = `[${new Date().toISOString()}] ${err.stack}\n`;
    fs.appendFile('errors.log', errorMessage, (fsError) => {
      if (fsError) console.error("error write in errors.log:", fsError);
    });

    res.status(500).type('text/plain').send('Internal Server Error');
  }
});


app.listen(3005, () => console.log("server running on port 3005"))
