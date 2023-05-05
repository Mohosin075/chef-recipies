/* eslint-disable no-unused-vars */
import React from "react";
// answer some important question
const Blog = () => {
  return (
    <section className="w-9/12 md:w-10/12 mx-auto my-5">
      <hr />
      <h1 className="text-center my-10 text-2xl md:text-4xl font-bold">
        Some <span className="text-purple-600">Important</span> Question
      </h1>
      <div>
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-bold">
            (1) Tell us the differences between uncontrolled and controlled
            components?
          </h3>
          <div className="text-sm md:text-xl py-3">
            <h3 className="text-lg md:text-xl font-semibold">
              Uncontrolled Components
            </h3>
            <p className="py-2">
              If you have gone through the above points and examples of the
              controlled component then you have already guessed how
              uncontrolled components work. Yes, they don’t use any states on
              input elements or any event handler. This type of component
              doesn’t care about an input element’s real-time value changes.
            </p>
            <h3 className="text-lg md:text-xl font-semibold">
              controlled Components
            </h3>
            <p className="py-2">
              As the name says, in the controlled component the form input
              element’s values and mutations are totally driven by event
              handlers and the value of the input element is always inferred
              from the state.
            </p>
          </div>
        </div>
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-bold">
            (2) How to validate React props using PropTypes?
          </h3>
          <div className="text-sm md:text-xl py-3">
            <p className="py-2">
              React provides a library called PropTypes to validate the props
              passed to a component. PropTypes allow you to specify the type of
              each prop and whether it is required or not. <br />
              PropTypes library provides a variety of validation options,
              including validation of data types, object shapes, and required
              props. Here are some of the commonly used PropTypes:
              <hr className="my-5" />
              <div className="text-sm">
                PropTypes.string <br /> PropTypes.number <br /> PropTypes.bool{" "}
                <br /> PropTypes.object
                <br />
                PropTypes.array <br /> PropTypes.func <br /> etc
              </div>
            </p>
          </div>
        </div>
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-bold">
            (3) Tell us the difference between nodejs and express js?
          </h3>
          <div className="text-sm md:text-xl py-3">
            <p className="py-2">
              Express is a minimal and flexible node. js web application
              framework, providing a robust set of features for building single
              and multi-page, and hybrid web applications. On the other hand,
              Node. js is detailed as A platform built on Chrome s JavaScript
              runtime for easily building fast, scalable network applications.
            </p>
          </div>
        </div>
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-bold">
            (4) What is a custom hook, and why will you create a custom hook?
          </h3>
          <div className="text-sm md:text-xl py-3">
            <p className="py-2">
              Custom React JS hooks offer reusability as when a custom hook is
              created, it can be reused easily, which makes the code cleaner and
              reduces the time to write the code. It also enhances the rendering
              speed of the code as a custom hook does not need to be rendered
              again and again while rendering the whole code..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
