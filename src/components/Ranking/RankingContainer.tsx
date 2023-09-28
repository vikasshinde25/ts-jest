import React, { useState } from "react";

import { DropdownSelect, Section, ToggleButton } from "../../common";
import {
  rankingTypesConstants,
  formatTypesConstants,
  matchTypesConstants,
} from "../../constants";
import TeamsRanking from "./TeamsRanking";
import { iccODICricketRankingData } from "../../database";

function RankingContainer() {
  const [selectedMatchType, setSelectedMatchType] = useState(
    matchTypesConstants?.[0]
  );

  const [selectedFormatType, setSelectedFormatType] = useState(
    formatTypesConstants?.[0]
  );
  const [selectedRankingType, setSelectedRankingType] = useState(
    rankingTypesConstants?.[0]
  );

  // handle match type select events
  const handleMatchTypeSelectEvents = (option: {
    label: string;
    value: string;
  }) => {
    setSelectedMatchType(option);
    return null;
  };

  // handle format type select events
  const handleFormatTypeSelectEvents = (option: {
    label: string;
    value: string;
  }) => {
    setSelectedFormatType(option);
    return null;
  };

  // handle ranking type select events
  const handleRankingTypeSelectEvents = (option: {
    label: string;
    value: string;
  }) => {
    setSelectedRankingType(option);
    return null;
  };

  // handle dropdown select events
  const handleDropdownSelectEvents = () => {
    return null;
  };

  // display cricket type filter
  const displayToggleButtonFilter = (
    filterLabel: string,
    selectedOption: { label: string; value: string },
    toggleOptions: { label: string; value: string }[],
    handleToggleButtonEvents: (item: { label: string; value: string }) => null
  ) => {
    return (
      <div>
        <h6 className="text-white">{filterLabel}</h6>
        <ToggleButton
          selectedOption={selectedOption}
          toggleOptions={toggleOptions}
          handleToggleButtonEvents={handleToggleButtonEvents}
        />
        <DropdownSelect
          className="mt-3"
          handleDropdownSelectEvents={handleDropdownSelectEvents}
        />
      </div>
    );
  };

  // display ranking filter section
  const displayRankingFilterSection = () => {
    return (
      <Section className="bg-green mini-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              {displayToggleButtonFilter(
                "Match Type",
                selectedMatchType,
                matchTypesConstants,
                handleMatchTypeSelectEvents
              )}
            </div>
            <div className="col-12 col-md-3">
              {displayToggleButtonFilter(
                "Format Type",
                selectedFormatType,
                formatTypesConstants,
                handleFormatTypeSelectEvents
              )}
            </div>
            <div className="col-12 col-md-3">
              {displayToggleButtonFilter(
                "Ranking By",
                selectedRankingType,
                rankingTypesConstants,
                handleRankingTypeSelectEvents
              )}
            </div>
          </div>
        </div>
      </Section>
    );
  };

  // display ranking table data
  const displayRankingTableData = () => {
    return (
      <Section>
        <div className="container">
          <h3>
            ICC {selectedMatchType?.label} {selectedFormatType?.label}{" "}
            {selectedRankingType?.label} Ranking
          </h3>
          <div className="row">
            <div className="col-12">
              <TeamsRanking teamRankingData={iccODICricketRankingData?.mens} />
            </div>
          </div>
        </div>
      </Section>
    );
  };

  /* ********** Main return statement of this component ********** */
  return (
    <div>
      {displayRankingFilterSection()}
      {displayRankingTableData()}
    </div>
  );
}

export default RankingContainer;
