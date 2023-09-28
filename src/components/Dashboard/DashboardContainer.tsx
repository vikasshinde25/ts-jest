import React, { useCallback, useEffect, useState } from "react";

import {
  dashboardHeadlinesDummyData,
  dashboardLiveMatchesDummyData,
} from "../../database";
import getDummyData from "../../api";
import {
  DashboardHeadlinesProps,
  DashboardLiveMatchesProps,
} from "../../props";
// import { FlexSlider, ImageBackgroundSection } from "../../common";
// import { cricketPitchGreen } from "../../images";
import DashboardMainSlider from "./DashboardMainSlider";
import { Section, Tabs } from "../../common";
import DashboardScoresAndFixturesSlider from "./DashboardScoresAndFixturesSlider";
import { cricketGroundVector } from "../../images";
import { dashboardScoresAndFixturesConstants } from "../../constants";

function DashboardContainer() {
  const [dashboardHeadlineLoader, setDashboardHeadlineLoader] = useState(false);
  const [dashboardLiveMatchesLoader, setDashboardLiveMatchesLoader] =
    useState(false);
  const [dashboardHeadlinesData, setDashboardHeadlinesData] = useState<
    DashboardHeadlinesProps[]
  >([]);
  const [dashboardScoresAndFixturesData, setDashboardScoresAndFixturesData] =
    useState<DashboardLiveMatchesProps[]>([]);
  const [selectedScoresAndFixtursTab, setSelectedScoresAndFixtursTab] =
    useState(dashboardScoresAndFixturesConstants?.[0]);

  // get dashboard headlines data
  const getDashboardHeadlinesData = useCallback(() => {
    setDashboardHeadlineLoader(true);
    getDummyData().then((response) => {
      if (response?.status !== 200) {
        setDashboardHeadlinesData(dashboardHeadlinesDummyData);
        setDashboardHeadlineLoader(false);
      }
    });
  }, []);

  // useEffect
  useEffect(() => {
    getDashboardHeadlinesData();
  }, [getDashboardHeadlinesData]);

  // get dashboard data
  const getdashboardScoresAndFixturesData = useCallback(() => {
    setDashboardLiveMatchesLoader(true);
    getDummyData().then((response) => {
      if (response?.status !== 200) {
        setDashboardScoresAndFixturesData(dashboardLiveMatchesDummyData);
        setDashboardLiveMatchesLoader(false);
      }
    });
  }, []);

  // use effect
  useEffect(() => {
    getdashboardScoresAndFixturesData();
  }, [getdashboardScoresAndFixturesData]);

  // display dashbard main slider
  const displayDashboardMainSlider = () => {
    return (
      <DashboardMainSlider
        showThumbnailToBottom={false}
        dashboardHeadlineLoader={dashboardHeadlineLoader}
        dashboardHeadlinesData={dashboardHeadlinesData}
      />
    );
  };

  // display dashboard live matches
  const displayDashboardLiveMatches = () => {
    return (
      <Section
        className="section-bg-image"
        style={{ backgroundImage: `url(${cricketGroundVector})` }}
      >
        <div className="section-bg-overlay">
          <div className="section-content">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <Tabs>
                    <ul className="tabs-jumbo">
                      {dashboardScoresAndFixturesConstants?.map(
                        (item: { label: string; value: string }) => {
                          return (
                            <li
                              key={item?.value}
                              role="presentation"
                              onClick={() => {
                                setSelectedScoresAndFixtursTab(item);
                              }}
                              className={`cursor ${
                                selectedScoresAndFixtursTab?.value ===
                                item?.value
                                  ? "active"
                                  : ""
                              }`}
                            >
                              {item?.label}
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </Tabs>
                </div>
                <div className="col-12">
                  {dashboardLiveMatchesLoader ? (
                    "Loading..."
                  ) : (
                    <DashboardScoresAndFixturesSlider
                      dashboardScoresAndFixturesData={
                        dashboardScoresAndFixturesData
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  };

  /* ********** Main return statement of this component ********** */
  return (
    <div id="dashboard">
      {displayDashboardMainSlider()}
      {displayDashboardLiveMatches()}

      {/* <ImageBackgroundSection
        style={{ backgroundImage: `url(${cricketPitchGreen})` }}
      >
        <div className="bg-overlay-green">
          <div className="bg-image-content">
          <FlexSlider
            sliderHeight="500px"
            showFullWidthSlider
            dashboardHeadlineLoader={dashboardHeadlineLoader}
            dashboardHeadlinesData={dashboardHeadlinesData}
          />
          </div>
        </div>
      </ImageBackgroundSection> */}
    </div>
  );
}

export default DashboardContainer;
