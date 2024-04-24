import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import locomotiveScroll from "locomotive-scroll";
import "./styles.css";
import "./App.css";
import Features from "./Features";

function Scroll({ scrollRef }) {
  useEffect(() => {
    new locomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });
  }, [scrollRef]);

  return (
    <div className="App">
      <div className="scroll" ref={scrollRef}>
        {/* Your scrollable content goes here */}
        <Features/>
      </div>
    </div>
  );
}

export default Scroll;
