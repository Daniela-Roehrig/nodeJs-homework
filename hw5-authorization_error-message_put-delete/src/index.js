import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.put('/', (req, res) => {
  res.status(200).type('text/plain').send('PUT-запрос обработан');
});

app.delete('/', (req, res) => {
  res.status(200).type('text/plain').send('DELETE-запрос обработан');
});

app.listen(3050, () => console.log("server running on port 3050"))


