import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const convertTextToUpperCase = () => {
    if (text !== null && text !== "") {
      setText(text.toUpperCase());
      props.showAlert("Converted to uppercase", "success");
    } else {
      props.showAlert("Please enter any text", "warning");
    }
  };

  const convertTextToLowerCase = () => {
    if (text !== null && text !== "") {
      setText(text.toLowerCase());
      props.showAlert("Converted to lowercase", "success");
    } else {
      props.showAlert("Please enter any text", "warning");
    }
  };

  const convertTextToProperCase = () => {
    if (text !== null && text !== "") {
      let newWords = [];
      const words = text.split(" ");
      words.forEach((word) => {
        let newWordFirstChar = word.charAt(0).toUpperCase();
        let newWordChars = word.substring(1, word.length).toLowerCase();
        newWords.push(newWordFirstChar + newWordChars);
      });
      setText(newWords.join(" "));
      props.showAlert("Converted to propercase", "success");
    } else {
      props.showAlert("Please enter any text", "warning");
    }
  };

  const removeExtraSpace = () => {
    if (text !== null && text !== "") {
      const nexText = text.split(/[ ]+/).join(" ");
      setText(nexText);
      props.showAlert("Removed extra spaces", "success");
    } else {
      props.showAlert("Please enter any text", "warning");
    }
  };

  const copyToClipboard = () => {
    if (text !== null && text !== "") {
      document.getElementById("myBox").select();
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to clipboard", "success");
    } else {
      props.showAlert("Please enter any text", "warning");
    }
  };

  const resetText = () => {
    setText("");
    props.hideAlert();
  };

  return (
    <>
      <div
        className="container my-2"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className={`form-control placeholder-${props.mode} === "light" ? "black" : "white"`}
            id="myBox"
            rows="8"
            placeholder="Enter text here"
            value={text}
            onChange={handleTextChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#28282B",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={convertTextToUpperCase}>
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={convertTextToLowerCase}
        >
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={convertTextToProperCase}>
          Convert to Propercase
        </button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary" onClick={copyToClipboard}>
          Copy To Clipboard
        </button>
        <button className="btn btn-secondary mx-2" onClick={resetText}>
          Reset
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text !== "" ? text.split(" ").filter((word) => word).length : 0}{" "}
          words and {text.length} characters
        </p>
        <p>
          {text !== ""
            ? (text.split(" ").filter((word) => word).length * 0.008).toFixed(3)
            : 0}{" "}
          minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the above textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
