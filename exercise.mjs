import * as fs from "node:fs";

const fileName = "README.md";
const text = "This is a README.md file";

const handleDataResult = (error) => {
  if (error) {
    console.log(`There was an error: ${error}`);
    return;
  }
  console.log("File written succesfully\n");
};

fs.writeFile(fileName, text, handleDataResult);
