import * as fs from "node:fs/promises";
import path from "node:path";

const folderName = path.resolve("src", "myFolder");

// create Folder
try {
    await fs.mkdir(folderName);
    console.log("Folder created.");
} catch (err) {
    console.log("Folder already exists!");
}

// delete Folder
try {
    await fs.rmdir(folderName);
    console.log("Folder deleted.");
} catch (err) {
    console.error("Error deleting folder:", err.message);
}
