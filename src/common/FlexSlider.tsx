import React, { useState } from "react";

import styled from "styled-components";

import Button from "./Button";
import { DashboardHeadlinesProps } from "../props";

import Theme from "../style/Theme";

interface SliderDataProps {
  sliderHeight: string;
  showFullWidthSlider: boolean;
  dashboardHeadlineLoader: boolean;
  dashboardHeadlinesData: DashboardHeadlinesProps[];
}

function FlexSlider({
  sliderHeight,
  showFullWidthSlider,
  dashboardHeadlineLoader,
  dashboardHeadlinesData,
}: SliderDataProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    const dataLength = dashboardHeadlinesData?.length;
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(dataLength - 1);
    }
  };

  const nextSlide = () => {
    const dataLength = dashboardHeadlinesData?.length;
    if (slideIndex !== dataLength - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataLength - 1) {
      setSlideIndex(0);
    }
  };

  /* ********** Main return statement of this component ********** */
  return (
    <div className="main-slider d-none">
      <div className={showFullWidthSlider ? "" : "container"}>
        {dashboardHeadlineLoader ? (
          "Loading..."
        ) : (
          <div>
            <FlexSliderBox key="1">
              <div className="slider-overflow">
                <ul
                  className="slider-row"
                  style={{
                    transform: `translate3d(${-slideIndex * 100}%, 0, 0)`,
                  }}
                >
                  {dashboardHeadlinesData?.map(
                    (item: {
                      newsId: string;
                      newslabel: string;
                      newsHeadline: string;
                      newsContent: string;
                      matchFormat: string;
                      bgImage: string;
                    }) => {
                      return (
                        <li key={item?.newsId} className="slide-item active">
                          <div
                            className={`slide-bg ${
                              showFullWidthSlider ? "" : "border-radius-20"
                            }`}
                            style={{
                              background: `url(${item?.bgImage})`,
                            }}
                          >
                            <div
                              className={`slide-bg-overlay ${
                                showFullWidthSlider
                                  ? ""
                                  : "border-radius-left-top-20 border-radius-left-bottom-20"
                              }`}
                            >
                              <div className="container">
                                <div
                                  className="slide-container"
                                  style={{
                                    height:
                                      sliderHeight !== null
                                        ? sliderHeight
                                        : "500px",
                                  }}
                                >
                                  <div className="row w-100 h-100">
                                    <div className="col-12 col-lg-5 h-100">
                                      <div className="slide-content-box h-100">
                                        <div
                                          className={`match-type text-white mb-3 ${item?.matchFormat}`}
                                        >
                                          {item?.matchFormat === "test"
                                            ? "Test"
                                            : "ODI"}
                                        </div>
                                        <h6>{item?.newslabel}</h6>
                                        <h3 className="font-bold">
                                          {item?.newsHeadline}
                                        </h3>
                                        <p className="font-bold-500">
                                          {item?.newsContent}
                                        </p>
                                        <div className="slider-content-button">
                                          <ul>
                                            <li>
                                              <Button className="btn-transparent-white">
                                                View Scorecard
                                              </Button>
                                            </li>
                                            <li>
                                              <Button className="btn-transparent-white">
                                                Schedule
                                              </Button>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    }
                  )}
                </ul>
                <div className="slider-control-arrow d-none">
                  <div
                    onClick={() => {
                      prevSlide();
                    }}
                    role="presentation"
                    className="prev"
                  >
                    <i className="fa-solid fa-arrow-left" />
                  </div>
                  <div
                    onClick={() => {
                      nextSlide();
                    }}
                    role="presentation"
                    className="next"
                  >
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </div>
                <div className="slider-control-dots">
                  <ul>
                    {dashboardHeadlinesData?.map((_: {}, dotIndex: number) => {
                      return (
                        <li
                          onClick={() => {
                            setSlideIndex(dotIndex);
                          }}
                          role="presentation"
                          className={`dot ${
                            slideIndex === dotIndex ? "active" : ""
                          }`}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </FlexSliderBox>
            {/* <FlexSlider className="mt-5 d-none" key="2">
              <ul className="slider-row">
                {dashboardHeadlinesData?.map(
                  (
                    item: {
                      newsId: string;
                      newslabel: string;
                      newsHeadline: string;
                      newsContent: string;
                      matchFormat: string;
                      bgImage: string;
                    },
                    index: number
                  ) => {
                    return (
                      <li
                        key={item?.newsId}
                        className={`slide-item fade ${
                          slideIndex === index ? "active" : ""
                        }`}
                      >
                        <div
                          className="slide-bg"
                          style={{ background: `url(${item?.bgImage})` }}
                        >
                          <div className="slide-bg-overlay">
                            <div className="container">
                              <div className="slide-content">
                                <div className="row w-100">
                                  <div className="col-12 col-lg-6">
                                    <div className="mb-3">
                                      <span
                                        className={`match-type ${item?.matchFormat}`}
                                      >
                                        {item?.matchFormat === "test"
                                          ? "Test"
                                          : "ODI"}
                                      </span>
                                    </div>
                                    <h6>{item?.newslabel}</h6>
                                    <h3>{item?.newsHeadline}</h3>
                                    <p>{item?.newsContent}</p>
                                    <div className="slider-content-button">
                                      <ul>
                                        <li>
                                          <Button className="btn-primary">
                                            View Scorecard
                                          </Button>
                                        </li>
                                        <li>
                                          <Button className="btn-transparent-white">
                                            Schedule
                                          </Button>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  }
                )}
              </ul>
              <div className="slider-control-arrow">
                <div
                  onClick={() => {
                    prevSlide();
                  }}
                  role="presentation"
                  className="prev"
                >
                  <i className="fa-solid fa-arrow-left" />
                </div>
                <div
                  onClick={() => {
                    nextSlide();
                  }}
                  role="presentation"
                  className="next"
                >
                  <i className="fa-solid fa-arrow-right" />
                </div>
              </div>
              <div className="slider-control-dots">
                <ul>
                  {dashboardHeadlinesData?.map((_: {}, dotIndex: number) => {
                    return (
                      <li
                        onClick={() => {
                          setSlideIndex(dotIndex);
                        }}
                        role="presentation"
                        className={`dot ${
                          slideIndex === dotIndex ? "active" : ""
                        }`}
                      />
                    );
                  })}
                </ul>
              </div>
            </FlexSlider> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default FlexSlider;

const FlexSliderBox = styled.div`
  position: relative;
  margin: auto;

  .slider-overflow {
    overflow: hidden;
  }
  .slider-row {
    // white-space: nowrap;
    display: inline-flex;
    transition: all 1000ms ease 0s;

    li.slide-item {
      flex: 0 0 100%;
      width: 100%;
      // white-space: nowrap;
      transition: ease 1000ms;
      display: none;

      &.fade {
        animation-name: fade;
        animation-duration: 1.5s;
      }

      &.active {
        display: inline-block;
      }

      .slide-bg {
        background-position: top right !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;

        .slide-bg-overlay {
          background: linear-gradient(
            to right,
            rgba(0, 146, 112, 1) 10%,
            rgba(255, 255, 255, 0) 100%
          );
        }
      }

      .slide-container {
        // display: flex;
        // align-content: flex-end;
        // flex-wrap: wrap;
        padding: 50px 0;
        min-height: 300px;
        color: ${Theme.white};

        .slide-content-box {
          white-space: normal;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;

          .match-type {
            background-color: ${Theme.baseColor};
            padding: 5px 10px;
            border-radius: 5px;
            border: 1px solid white;
            width: fit-content;
          }

          .slider-content-button {
            ul {
              li {
                display: inline-block;
                margin-right: 10px;
              }
            }
          }
        }
      }
    }

    @keyframes fade {
      from {
        opacity: 0.5;
      }
      to {
        opacity: 1;
      }
    }
  }

  .slider-control-arrow {
    position: absolute;
    color: ${Theme.white};
    cursor: pointer;
    top: 43%;
    width: 100%;

    .prev,
    .next {
      position: absolute;
      color: ${Theme.white};
      font-size: ${Theme.regular};
      background-color: ${Theme.baseColor};
      width: 32px;
      height: 32px;
      text-align: center;
      border-radius: 50%;
      padding: 8px 0 0 0;
    }
    .prev {
      left: 10px;
    }
    .next {
      right: 10px;
    }
  }

  .slider-control-dots {
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: 10px;

    li.dot {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 1px solid white;
      background-color: ${Theme.gray45};
      margin-right: 10px;
      cursor: pointer;
    }
    li:last-child {
      margin-right: 0;
    }
    li.dot.active {
      background-color: ${Theme.baseColor};
      width: 36px;
      border-radius: 18px;
    }
  }
`;
