import express from "express";
import cors from "cors";
import App from "./db/App.js";


const startServer = ()=> {
    const app = express();

    app.use(cors());
    app.use(express.json());
    
   app.get("/apps", async (req, res) => {
    try {
      const apps = await App.findAll();
      res.json(apps);
    } catch (error) {
      res.status(500).json({ error: "Error fetching apps" });
    }
  });

  app.post("/apps", async (req, res) => {
    try {
      const { name, size } = req.body;
      const newApp = await App.create({ name, size });
      res.status(201).json(newApp);
    } catch (err) {
      res.status(500).json({ error: "Error creating the app" });
    }
  });

    const port = process.env.PORT || 3000;
    
    app.listen(port, () => console.log("Server running on 3000 port"));
}

export default startServer;