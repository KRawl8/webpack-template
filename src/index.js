import "./styles.css";
import { greeting } from "./greeting.js";
import odinImage from "./odin.png";

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);

console.log(greeting);

// npx webpack serve (in command line) will host our web page on http://localhost:8080/, which we can open in our browser (Ctrl + alt + click link, or type in address)

// I have seperated the wepback files into development and production needing "npm run start" and "npm run build" respectively
// npm run start seems to have replaced npx webpack serve
