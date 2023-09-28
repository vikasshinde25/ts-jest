import React from "react";

import { Table } from "../../common";
import { teamsRankingTableHeaderConstants } from "../../constants";

interface TeamRankingDataProps {
  teamRankingData: {
    position: string;
    team: string;
    teamCode: string;
    matches: string;
    points: string;
    rating: string;
  }[];
}

function TeamsRanking({ teamRankingData }: TeamRankingDataProps) {
  /* ********** Main return statement of this component ********** */
  return (
    <div>
      <Table className="table-primary">
        <table>
          <thead>
            <tr>
              {teamsRankingTableHeaderConstants?.map(
                (item: { label: string; value: string }) => {
                  return <th key={item?.value}>{item?.label}</th>;
                }
              )}
            </tr>
          </thead>
          <tbody>
            {teamRankingData?.map(
              (
                item: {
                  position: string;
                  team: string;
                  teamCode: string;
                  matches: string;
                  points: string;
                  rating: string;
                },
                index: number
              ) => {
                return (
                  <tr
                    key={item?.teamCode}
                    className={`${item?.position === "1" ? "bg-green" : ""} ${
                      index === 9 ? "row10" : ""
                    }`}
                  >
                    <td>{item?.position}</td>
                    <td>{item?.team}</td>
                    <td>{item?.matches}</td>
                    <td>{item?.points}</td>
                    <td>{item?.rating}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Table>
    </div>
  );
}

export default TeamsRanking;
