import express from "express";
import cors from "cors";
import sequelize from "./db/sequelize.js";
import Product from "./db/Product.js";

const startServer = async () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.get("/", (req, res) => {
        try {
            res.send("Hello, World!");
        } catch (error) {
            res.status(500).json({ message: "Something went wrong." });
        }
    });

    app.post("/", (req, res) => {
        try {
            const { name, message } = req.body;

            if (!name || !message) {
                return res.status(400).json({ message: "Name and message are required." });
            }

            res.status(200).json({ message: `Hello, ${name}! Question: ${message}` });
        } catch (error) {
            res.status(500).json({ message: "Error processing your request." });
        }
    });

 
    app.get("/products", async (req, res) => {
        try {
            const products = await Product.findAll();
            res.json(products);
        } catch (error) {
            res.status(500).json({ message: "Error fetching products." });
        }
    });

    app.post("/products", async (req, res) => {
        try {
            const { name, price } = req.body;
            if (!name || !price) {
                return res.status(400).json({ message: "Name and price are required." });
            }

            const product = await Product.create({ name, price });
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ message: "Error creating product." });
        }
    });

    try {
        await sequelize.authenticate();
        console.log("Database connection successful.");
        await sequelize.sync();

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

startServer();
