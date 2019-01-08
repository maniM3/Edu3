import React, { Component } from "react";
import Uppernav from "../UpperNav/component";
import Carousel from "../Carousel/component";
import BucketComponent from "./components/Bucket";
import Profile from "../Landing/Student/component";
import "./conveyance.css";

class conveyance extends Component {
  //  state = {  }
  render() {
    // let { taraTimeline } = this.props.viantResponse;
    let taraTimeline = "Process";

    return (
      <div>
        <Uppernav />
        <Carousel />
        <br />
        <br />
        <div className="container">
          <Profile />
          <div className="flow">
            <span className="legend-label">
              <i className="fas in_complete fa-circle notranslate" />
              Incomplete
            </span>
            <span className="legend-label">
              <i className="fas in_progress fa-circle notranslate" />
              In Progress
            </span>
            <span className="legend-label">
              <i className="fas fa-check-circle done notranslate" />
              Done
            </span>
            <span className="legend-label">
              <i className="fas fa-arrow-alt-circle-right done notranslate" />
              Automatic
            </span>
          </div>
          <br />

          <div className="process-title">
            <h2> Process Stages </h2>
          </div>
          <section className="conveyance-diagram">
            <BucketComponent />
            <BucketComponent />
            <BucketComponent taraTimeline={taraTimeline} />
          </section>
        </div>
      </div>
    );
  }
}

export default conveyance;
