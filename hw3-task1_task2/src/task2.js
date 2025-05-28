import fs from "node:fs";
import path from "node:path";


const fileName = path.resolve("src", "info.txt");
const text = "Node.js is awesome!";

// write file
fs.writeFile(fileName, text, (err) => {
    if (err) {
        console.error("Error writing file:", err.message);
    } else {
        console.log("File successfully written.");

        // read file
        fs.readFile(fileName, "utf-8", (err, data) => {
            if (err) {
                console.error("Error reading file:", err.message);
            } else {
                console.log("File text:");
                console.log(data);
            }
        });
    }
});
