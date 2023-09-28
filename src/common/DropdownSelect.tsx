import React, { MutableRefObject, useEffect, useRef, useState } from "react";

import styled from "styled-components";

import Theme from "../style/Theme";

interface DropdownProps {
  className: string;
  handleDropdownSelectEvents: () => null;
}

function DropdownSelect({
  className,
  handleDropdownSelectEvents,
}: DropdownProps) {
  const selectedOption = {
    label: "Volvo3",
    value: "Volvo3",
  };

  const dropdownOptions = [
    {
      label: "Volvo1",
      value: "Volvo1",
    },
    {
      label: "Volvo2",
      value: "Volvo2",
    },
    {
      label: "Volvo3",
      value: "Volvo3",
    },
    {
      label: "Volvo4",
      value: "Volvo4",
    },
  ];

  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  const dropdownSelectRef = useRef<null | HTMLInputElement>(null);

  function useOutsideAlerter(
    ref: MutableRefObject<HTMLInputElement | null>,
    type: string
  ) {
    useEffect(() => {
      function handleClickOutside(event: { target: any }) {
        if (ref.current && !ref.current.contains(event?.target)) {
          setIsDropdownMenuOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, type]);
  }

  useOutsideAlerter(dropdownSelectRef || null, "dropdwon");

  // handle dropdown control events
  const handleDropdownControlEvents = () => {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  };

  /* ********** Main return statement of this component ********** */
  return (
    <DropdownSelectStyle ref={dropdownSelectRef} className={className}>
      <div
        className="dropdown-select-box"
        role="presentation"
        onClick={() => {
          handleDropdownControlEvents();
        }}
      >
        <div className="dropdown-select-value">{selectedOption?.label}</div>
        <div className="dropdown-indicator">
          <i className="fa-solid fa-angle-down" />
        </div>
      </div>
      <div
        className={`dropdown-select-menu ${isDropdownMenuOpen ? "show" : ""}`}
      >
        {dropdownOptions?.map((item) => {
          return (
            <div
              className={`dropdown-select-option ${
                item?.value === selectedOption?.value ? "active" : ""
              }`}
              key={item?.value}
              id={item?.value}
              role="presentation"
              onClick={() => {
                handleDropdownSelectEvents();
              }}
            >
              {item?.label}
            </div>
          );
        })}
      </div>
    </DropdownSelectStyle>
  );
}

export default DropdownSelect;

const DropdownSelectStyle = styled.div`
  position: relative;
  .dropdown-select-box {
    cursor: pointer;
    display: flex;
    background: ${Theme.white};
    padding: 0px 10px;
    border-radius: 5px;
    .dropdown-select-value {
      padding: 8px 0;
      width: calc(100% - 20px);
    }
    .dropdown-indicator {
      width: 20px;
      padding-top: 10px;
      text-align: center;
      i {
        font-size: ${Theme.regular16};
      }
    }
  }
  .dropdown-select-menu {
    display: none;
    width: 100%;
    max-height: 500px;
    overflow-y: auto;
    position: absolute;
    z-index: 9;
    top: 40px;
    background: ${Theme.white};
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px 0px;
    &.show {
      display: block;
    }
    .dropdown-select-option {
      padding: 5px 10px;
      cursor: pointer;

      &.active,
      &.active:hover {
        color: ${Theme.white};
        background: ${Theme.baseColor};
      }
      :hover {
        background: ${Theme.baseColor30};
      }
    }
  }
`;
