import React, { useState } from "react";

import { DashboardHeadlinesProps } from "../../props";

import { Button, CricketMessageBox, FlexThumbnailSlider } from "../../common";

interface SliderDataProps {
  showThumbnailToBottom: boolean;
  dashboardHeadlineLoader: boolean;
  dashboardHeadlinesData: DashboardHeadlinesProps[];
}

function DashboardMainSlider({
  showThumbnailToBottom,
  dashboardHeadlineLoader,
  dashboardHeadlinesData,
}: SliderDataProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  // display cricket message box
  const displayCricketMessageBox = (matchFormat: string) => {
    let message = "ODI";
    if (matchFormat?.includes("test")) {
      message = "Test";
    } else if (matchFormat === "odi") {
      message = "ODI";
    } else {
      message = "T20";
    }

    return (
      <CricketMessageBox
        matchFormat={matchFormat}
        message={message}
        boxSize="small"
      />
    );
  };

  /* ********** Main return statement of this component ********** */
  return (
    <FlexThumbnailSlider>
      <div className="dashboard-thumbnail-slider">
        <div className="container">
          {dashboardHeadlineLoader ? (
            "Loading..."
          ) : (
            <div className="row">
              <div
                className={
                  showThumbnailToBottom ? "col-12" : "col-12 col-lg-11"
                }
              >
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
                              className="slide-bg border-radius-10"
                              style={{
                                background: `url(${item?.bgImage})`,
                              }}
                            >
                              <div className="slide-bg-overlay border-radius-left-top-10 border-radius-left-bottom-10">
                                <div className="container">
                                  <div className="slide-container">
                                    <div className="row w-100 h-100">
                                      <div className="col-12 h-100">
                                        <div className="slide-content-box h-100">
                                          <h3 className="font-bold">
                                            {item?.newsHeadline}
                                          </h3>

                                          <div className="slider-content-button">
                                            <ul>
                                              <li>
                                                {displayCricketMessageBox(
                                                  item?.matchFormat
                                                )}
                                              </li>

                                              <li>
                                                <div className="small-text-normal">
                                                  {item?.newslabel}
                                                </div>
                                              </li>
                                              <li>
                                                <Button className="btn-transparent-small text-white">
                                                  <i
                                                    className="fa fa-angle-double-right"
                                                    aria-hidden="true"
                                                  />
                                                  View Scorecard
                                                </Button>
                                              </li>
                                              <li>
                                                <Button className="btn-transparent-small text-white">
                                                  <i
                                                    className="fa fa-angle-double-right"
                                                    aria-hidden="true"
                                                  />
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
                </div>
              </div>
              <div
                className={
                  showThumbnailToBottom ? "col-12" : "col-12 col-lg-1 ps-lg-0"
                }
              >
                <div
                  className={`slider-control-thumbnail ${
                    showThumbnailToBottom
                      ? "slider-thumbnail-bottom"
                      : "slider-thumbnail-right"
                  }`}
                >
                  <ul>
                    {dashboardHeadlinesData?.map(
                      (
                        item: { newsId: string; bgImage: string },
                        dotIndex: number
                      ) => {
                        return (
                          <li
                            key={item?.newsId}
                            onClick={() => {
                              setSlideIndex(dotIndex);
                            }}
                            role="presentation"
                            className={`${
                              slideIndex === dotIndex ? "active" : ""
                            }`}
                          >
                            <img src={item?.bgImage} alt="thumnail" />
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </FlexThumbnailSlider>
  );
}

export default DashboardMainSlider;
