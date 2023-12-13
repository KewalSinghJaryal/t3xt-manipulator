import React, { useState } from "react";

export default function About(props) {
  return (
    <div
      className="container my-3"
      style={
        props.mode === "dark"
          ? { color: "white", backgroundColor: "black" }
          : { color: "black", backgroundColor: "white" }
      }
    >
      <h1>
        <b>About K3W4L Text Manipulator </b>
      </h1>
      <div className="accordion my-3" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
              style={
                props.mode === "dark"
                  ? { color: "white", backgroundColor: "black" }
                  : { color: "black", backgroundColor: "white" }
              }
            >
              What is T3xt Manipulat0r
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div
              className="accordion-body"
              style={
                props.mode === "dark"
                  ? { color: "white", backgroundColor: "black" }
                  : { color: "black", backgroundColor: "white" }
              }
            >
              <strong>Its is a free text manipulating tool </strong> Here you
              can convert text to uppercase , lowercase,capitalized,hybridtext,
              remove spaces, lower hybrid, reverse and hear you text. convert
              them as you require and copy it and use it where ever you want..
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
              style={
                props.mode === "dark"
                  ? { color: "white", backgroundColor: "black" }
                  : { color: "black", backgroundColor: "white" }
              }
            >
              WHY TEXT MANIPULATOR WAS CREATED
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div
              className="accordion-body"
              style={
                props.mode === "dark"
                  ? { color: "white", backgroundColor: "black" }
                  : { color: "black", backgroundColor: "white" }
              }
            >
              <strong>HI MY NAME IS KEWAL</strong> I created this app as my
              first project for my learning journey of
              <code> REACT JS </code>as a fun project hope you all like it .
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
              style={
                props.mode === "dark"
                  ? { color: "white", backgroundColor: "black" }
                  : { color: "black", backgroundColor: "white" }
              }
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div
              className="accordion-body"
              style={
                props.mode === "dark"
                  ? { color: "white", backgroundColor: "black" }
                  : { color: "black", backgroundColor: "white" }
              }
            >
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
