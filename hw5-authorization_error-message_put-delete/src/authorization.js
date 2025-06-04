import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  const authorization = req.headers["authorization"];

  if (!authorization) {
    res.status(401).type("text").send("Unauthorized");
  } else {
    res.status(200).type("text").send("Authorization header received");
  }
 
});

app.listen(3000, () => console.log("Server running on 3000 port"));
