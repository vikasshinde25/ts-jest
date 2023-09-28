import React, { useCallback, useEffect, useState } from "react";

import { Button, CardSlider, CricketMessageBox } from "../../common";
import { DashboardLiveMatchesProps } from "../../props";
import {
  flagAus,
  flagBng,
  flagEng,
  flagInd,
  flagNL,
  flagPak,
  flagSL,
} from "../../images";

interface SliderDataProps {
  dashboardScoresAndFixturesData: DashboardLiveMatchesProps[];
}

function DashboardScoresAndFixturesSlider({
  dashboardScoresAndFixturesData,
}: SliderDataProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  // calculate slide width
  const calculateSlideWidth = useCallback((className: string) => {
    const slide = document.getElementsByClassName(
      className
    )?.[0] as HTMLElement;
    if (slide !== null) {
      setSlideWidth(slide?.getBoundingClientRect()?.width);
    }
  }, []);

  // handle prev slide
  const prevSlide = () => {
    const dataLength = dashboardScoresAndFixturesData?.length;
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(dataLength - 1);
    }
  };

  // handle next slide
  const nextSlide = () => {
    const dataLength = dashboardScoresAndFixturesData?.length;
    if (slideIndex !== dataLength - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataLength - 1) {
      setSlideIndex(0);
    }
  };

  useEffect(() => {
    calculateSlideWidth("slide");
  }, [calculateSlideWidth]);

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

  // get team flag
  const getTeamFlag = (team: string) => {
    switch (team) {
      case "Aus":
        return flagAus;
      case "Bng":
        return flagBng;
      case "Ind":
        return flagInd;
      case "Pak":
        return flagPak;
      case "SL":
        return flagSL;
      case "Eng":
        return flagEng;
      case "NL":
        return flagNL;
      default:
        return "";
    }
  };

  // display team name and score details
  const displayTeamNameAndScore = (
    teamCode: string,
    teamName: string,
    teamScore: string,
    reverseRow: boolean
  ) => {
    return (
      <div className="team-score-box">
        <div className={`row ${reverseRow ? "flex-row-reverse" : ""}`}>
          <div className={`col-4 ${reverseRow ? "pe-0" : "ps-0"}`}>
            <div className="team-logo">
              <img src={getTeamFlag(teamCode)} alt={teamCode} />
            </div>
          </div>
          <div className={`col-8 ${reverseRow ? "pe-1" : "ps-1"}`}>
            <div
              className={`team-name-score ${reverseRow ? "text-right" : ""}`}
            >
              <h6 className="mb-1">{teamName}</h6>{" "}
              <div className="team-score">{teamScore}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  /* ********** Main return statement of this component ********** */
  return (
    <CardSlider>
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
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{
            transform: `translate3d(${-(slideIndex * slideWidth)}px, 0, 0)`,
          }}
        >
          {dashboardScoresAndFixturesData?.map(
            (item: {
              matchId: string;
              matchLabel: string;
              matchFormat: string;
              status: string;
              teamA: { teamCode: string; teamName: string; score: string };
              teamB: { teamCode: string; teamName: string; score: string };
              venue: string;
            }) => {
              return (
                <div className="slide" key={item?.matchId}>
                  <div
                    className={`slide-data-box border-radius-10 ${item?.matchFormat}`}
                  >
                    <div className="scorecard-header">
                      <div className="match-format me-2">
                        {displayCricketMessageBox(item?.matchFormat)}
                      </div>
                      <div>
                        <div className="match-label">{item?.matchLabel}</div>
                        <div className="match-venue mt-1">{item?.venue}</div>
                      </div>
                    </div>
                    <div className={`dotted-hr ${item?.matchFormat}`} />
                    <div className={`scorecard-body ${item?.matchFormat}`}>
                      <div className="row">
                        <div className="col-5 pe-0">
                          {displayTeamNameAndScore(
                            item?.teamA?.teamCode,
                            item?.teamA?.teamName,
                            item?.teamA?.score,
                            true
                          )}
                        </div>
                        <div className="col-2 text-center px-0">
                          <div className="vs">
                            <h5>vs</h5>
                          </div>
                        </div>
                        <div className="col-5 ps-0">
                          {displayTeamNameAndScore(
                            item?.teamB?.teamCode,
                            item?.teamB?.teamName,
                            item?.teamB?.score,
                            false
                          )}
                        </div>
                      </div>
                      <div
                        className={`match-status heading-small-bold text-center mt-2 ${item?.matchFormat}`}
                      >
                        {item?.status}
                      </div>
                    </div>
                    <div className={`dotted-hr ${item?.matchFormat}`} />
                    <div
                      className={`scorecard-footer border-radius-bottom-left-10 border-radius-bottom-right-10 ${item?.matchFormat}`}
                    >
                      <ul>
                        <li className={item?.matchFormat}>
                          <Button className="btn-transparent-small">
                            <i
                              className="fa fa-angle-double-right"
                              aria-hidden="true"
                            />
                            View Scorecard
                          </Button>
                        </li>
                        <li className={item?.matchFormat}>
                          <Button className="btn-transparent-small">
                            <i
                              className="fa fa-angle-double-right"
                              aria-hidden="true"
                            />
                            Schedule
                          </Button>
                        </li>
                        <li className={item?.matchFormat}>
                          <Button className="btn-transparent-small">
                            <i
                              className="fa fa-angle-double-right"
                              aria-hidden="true"
                            />
                            commentory
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>

        <div className="slideshowDots d-none">
          {dashboardScoresAndFixturesData?.map(
            (item: { matchId: string }, dotIndex: number) => {
              return dashboardScoresAndFixturesData?.length > 0 &&
                dotIndex < dashboardScoresAndFixturesData.length - 2 ? (
                <div
                  role="presentation"
                  key={item?.matchId}
                  className={`slideshowDot${
                    slideIndex === dotIndex ? " active" : ""
                  }`}
                  onClick={() => {
                    setSlideIndex(dotIndex);
                  }}
                />
              ) : null;
            }
          )}
        </div>
      </div>
    </CardSlider>
  );
}

export default DashboardScoresAndFixturesSlider;
