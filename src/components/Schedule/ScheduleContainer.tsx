import React, { useState } from "react";
// import React, { useCallback, useEffect, useRef, useState } from "react";

import styled from "styled-components";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#ff0000", "#ffff00"];
// const delay = 2500;

function ScheduleContainer() {
  const [index, setIndex] = useState(0);
  // const timeoutRef = useRef<null>(null);

  // const resetTimeout = useCallback(() => {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  // }, [timeoutRef]);

  // const setTimeOut = useCallback(() => {
  //   timeoutRef.current = setTimeout(
  //     () =>
  //       setIndex((prevIndex) =>
  //         prevIndex === colors.length - 1 ? 0 : prevIndex + 1
  //       ),
  //     delay
  //   );
  // }, []);
  // console.log("=============================");
  // useEffect(() => {
  //   resetTimeout();
  //   setTimeOut();
  //   return () => {
  //     resetTimeout();
  //   };
  // }, [index, resetTimeout, setTimeOut]);

  return (
    <MainSlider>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors?.map((backgroundColor) => (
            <div
              className="slide"
              key={backgroundColor}
              style={{ backgroundColor }}
            />
          ))}
        </div>

        <div className="slideshowDots">
          {colors?.map((_, colorIndex) => (
            <div
              role="presentation"
              className={`slideshowDot${index === colorIndex ? " active" : ""}`}
              onClick={() => {
                setIndex(colorIndex);
              }}
            />
          ))}
        </div>
      </div>
    </MainSlider>
  );
}

export default ScheduleContainer;
const MainSlider = styled.div`
  /* Slideshow */

  .slideshow {
    margin: 0 auto;
    overflow: hidden;
    max-width: 500px;
  }

  .slideshowSlider {
    white-space: nowrap;
    transition: ease 1000ms;
  }

  .slide {
    display: inline-block;
    height: 400px;
    width: 100%;
    border-radius: 40px;
  }

  /* Buttons */

  .slideshowDots {
    text-align: center;
  }

  .slideshowDot {
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;

    cursor: pointer;
    margin: 15px 7px 0px;

    background-color: #c4c4c4;
  }

  .slideshowDot.active {
    background-color: #6a0dad;
  }
`;
