import styled from "styled-components";
import Theme from "../style/Theme";

const Table = styled.div`
  &.table-primary {
    table {
      border: 1px solid ${Theme.baseColor30};

      thead {
        background: ${Theme.baseColor30};

        th {
          text-align: left;
          padding: 10px 15px;

          :first-child {
            border-radius: 10px 0 0 0px;
          }
          :last-child {
            border-radius: 0px 10px 0px 0;
          }
        }
      }
    }
    tbody {
      tr {
        td {
          padding: 10px 15px;
          border-bottom: 1px solid ${Theme.baseColor30};
        }
        :last-child {
          td {
            border: none;
          }
        }

        &.bg-green {
          background: ${Theme.baseColor} !important;
          color: ${Theme.white};
          font-size: ${Theme.mediumLarge};
          td {
            padding: 15px;
          }
        }
        &.row10 {
          td {
            border-bottom: 2px solid ${Theme.baseColor};
          }
        }
      }
    }
  }
`;

export default Table;
