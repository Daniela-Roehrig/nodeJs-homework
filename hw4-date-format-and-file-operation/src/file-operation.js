import * as fs from "node:fs/promises";
import "dotenv/config";

const filename = `src/${process.env.FILENAME}`;
const text = "I finish successlfully my homework ";

try {
// write
    await fs.writeFile(filename, text, "utf8");
    console.log(`I create & write my "${filename}"`);
// read
    const textContent = await fs.readFile(filename, "utf8");
    console.log("My text in this file:");
    console.log(textContent);
} catch (err) {
    console.error("Error working with the file:", err);
}