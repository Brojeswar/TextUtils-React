import React, { useState } from "react";

export default function About(props) {
  const [collapseState, setCollapseState] = useState({
    accordion1: "collapsed",
    accordion2: "collapsed",
    accordion3: "collapsed",
  });

  let aboutStyle = {
    color: props.mode === "dark" ? "white" : "#28282B",
    backgroundColor: props.mode === "dark" ? "#28282B" : "white",
  };

  const toggleAccordian = (e) => {
    if (e.target.dataset.bsTarget === "#collapseOne") {
      setCollapseState({
        accordion1: e.target.classList.contains("collapsed") ? "collapsed" : "",
        accordion2: "collapsed",
        accordion3: "collapsed",
      });
    } else if (e.target.dataset.bsTarget === "#collapseTwo") {
      setCollapseState({
        accordion1: "collapsed",
        accordion2: e.target.classList.contains("collapsed") ? "collapsed" : "",
        accordion3: "collapsed",
      });
    } else if (e.target.dataset.bsTarget === "#collapseThree") {
      setCollapseState({
        accordion1: "collapsed",
        accordion2: "collapsed",
        accordion3: e.target.classList.contains("collapsed") ? "collapsed" : "",
      });
    }
  };

  return (
    <div className="container rounded">
      <h2
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        About Us
      </h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button ${props.mode} ${collapseState.accordion1}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              onClick={toggleAccordian}
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={aboutStyle}>
              TextUtils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or minutes read
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button ${props.mode} ${collapseState.accordion2}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              onClick={toggleAccordian}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={aboutStyle}>
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtils reports the number of words and characters. Thus it is
              suitable for writing text with word or character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className={`accordion-button ${props.mode} ${collapseState.accordion3}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              onClick={toggleAccordian}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={aboutStyle}>
              This word counter software works in any web browser such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
