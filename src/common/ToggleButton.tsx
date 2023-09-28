import React from "react";

import styled from "styled-components";
import Theme from "../style/Theme";

interface ToggleButtonProps {
  selectedOption: { label: string; value: string };
  toggleOptions: { label: string; value: string }[];
  handleToggleButtonEvents: (item: { label: string; value: string }) => null;
}

function ToggleButton({
  selectedOption,
  toggleOptions,
  handleToggleButtonEvents,
}: ToggleButtonProps) {
  /* ********** Main return statement of this component ********** */
  return (
    <ToggleButtonStyle className="toggle-btn-white">
      <ul>
        {toggleOptions?.map((item: { label: string; value: string }) => {
          return (
            <li
              className={`dropdown-select-option ${
                item?.value === selectedOption?.value ? "active" : ""
              }`}
              key={item?.value}
              id={item?.value}
              role="presentation"
              onClick={() => {
                handleToggleButtonEvents(item);
              }}
              style={{
                width:
                  toggleOptions?.length > 0
                    ? `${100 / toggleOptions.length}%`
                    : "",
              }}
            >
              {item?.label}
            </li>
          );
        })}
      </ul>
    </ToggleButtonStyle>
  );
}

export default ToggleButton;
const ToggleButtonStyle = styled.div`
  &.toggle-btn-white {
    background: ${Theme.white};
    border: 2px solid ${Theme.white};
    border-radius: 17px;
  }
  ul {
    li {
      cursor: pointer;
      display: inline-block;
      padding: 5px 15px;
      text-align: center;

      &.active,
      &.active:hover {
        border-radius: 16px;
        color: ${Theme.white};
        background: ${Theme.baseColor};
      }
      :hover {
        border-radius: 17px;
        background: ${Theme.baseColor30};
      }
    }
  }
`;
