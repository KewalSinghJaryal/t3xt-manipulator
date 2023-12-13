import React, { useState } from "react";

export default function Textform(props) {
  const handleUpperCase = function () {
    let newtext = Text.toUpperCase();
    setText(newtext);
    props.showAlert("Text is converted UPPERCASE", "danger");
  };
  const handleLowerCase = function () {
    let newtext = Text.toLowerCase();
    setText(newtext);
    props.showAlert("Text is converted lowercase", "primary");
  };
  const Capitalization = function () {
    let sentences = Text.split(". ");

    for (let i = 0; i < sentences.length; i++) {
      sentences[i] =
        sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
    }

    let resultString = sentences.join(". ");

    setText(resultString);
    props.showAlert("Text is Capitalized", "warning");
  };

  const hybridtext = function () {
    console.log("hybrid is clicked");

    let inputtext = Text.toLowerCase();
    let hybridtext = inputtext
      .replace("i", 1)
      .replace("e", 3)
      .replace("a", 4)
      .replace("o", 0)
      .replace("s", 5)
      .toUpperCase();
    let newtext = hybridtext;
    setText(newtext);
    props.showAlert("Text is converted HyBR1D T3xT", "secondary");
  };

  const ExtraSpaces = () => {
    let words = Text.split(" ");
    let joinedWords = "";
    words.forEach((elem) => {
      if (elem[0] !== undefined) {
        joinedWords += elem + " ";
      }
    });
    setText(joinedWords);
    props.showAlert("EXtra..........Space removed", "success");
  };

  const copyText = () => {
    navigator.clipboard.writeText(Text);
    props.showAlert("Text is Copied to Clipboard", "info");
  };
  const clearText = function () {
    setText("");
    props.showAlert("Cleared Text", "danger");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = Text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking................", "primary");
  };

  const handleOnChange = function (event) {
    setText(event.target.value);
  };

  const [Text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>T3XT M4N1PULAT0R</h1>
        <div className="mb-3">
          <textarea
            className="form-control my-3"
            value={Text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={
              props.mode === "dark"
                ? { color: "black", backgroundColor: "grey" }
                : { color: "grey", backgroundColor: "white" }
            }
            placeholder="Enter your text here............"
          ></textarea>
          <span className="badge text-bg-secondary mx-2">
            {" "}
            {
              Text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            Words
          </span>
          <span className="badge text-bg-secondary  mx-2">
            {Text.length} Characters
          </span>
          <span className="badge text-bg-secondary  mx-2">
            {0.008 *
              Text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            Minutes to Read
          </span>
        </div>
        <button
          type="button"
          disabled={Text.length === 0}
          className="btn btn-outline-danger  mx-3  my-3"
          onClick={handleUpperCase}
        >
          TO UPPER CASE
        </button>
        <button
          type="button"
          disabled={Text.length === 0}
          className="btn btn-outline-primary  mx-3  my-3"
          onClick={handleLowerCase}
        >
          to lower case
        </button>
        <button
          type="button"
          disabled={Text.length === 0}
          className="btn btn-outline-warning  mx-3  my-3"
          onClick={Capitalization}
        >
          Capitalization
        </button>
        <button
          type="button"
          disabled={Text.length === 0}
          className="btn btn-outline-secondary  mx-3  my-3"
          onClick={hybridtext}
        >
          HyBR1D T3xT
        </button>
        <button
          type="button"
          disabled={Text.length === 0}
          className="btn btn-outline-success mx-3  my-3"
          onClick={ExtraSpaces}
        >
          Remove Extra Space
        </button>
        <button
          type="button"
          disabled={Text.length === 0}
          className="btn btn-outline-info  mx-3  my-3"
          onClick={copyText}
        >
          Copy Text
        </button>

        <button
          type="button"
          disabled={Text.length === 0}
          className="btn btn-outline-danger  mx-3  my-3"
          onClick={clearText}
        >
          Clear Text
        </button>

        <button
          type="button"
          disabled={Text.length === 0}
          className="btn btn-outline-primary  mx-3  my-3"
          onClick={speak}
        >
          Text to Speech
        </button>
      </div>
      <div className="container">
        <h2> Text Preview </h2>
        <p>{Text.length > 0 ? Text : "Enter something to preview it Here"}</p>
      </div>
    </>
  );
}

// notes to diabled button use disabled keyword in the classname section div
