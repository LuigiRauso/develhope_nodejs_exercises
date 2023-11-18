import figlet from "figlet";

const inputText = "Welcome!";

const fontOptions = {
  font: "big",
  horizontalLayout: "default",
  verticalLayout: "default",
  width: 80,
  whitespaceBreak: true,
};

function handleData(err, data) {
  if (err) {
    console.log(`Something went wrong: ${err}`);
    return;
  }
  console.log(data);
}

figlet.text(inputText, fontOptions, handleData);
