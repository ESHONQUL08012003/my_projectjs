import React from "react";
import "./Main.scss";
function Main() {
  return (
    <section
      id="hero"
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <div class="hero-container" data-aos="fade-in">
        <h1>Alex Smith</h1>
        <p>
          I'magnam
          <span
            class="typed"
            data-typed-items="Designer, Developer, Freelancer, Photographer"
          ></span>
        </p>
      </div>
    </section>
  );
}

export default Main;
