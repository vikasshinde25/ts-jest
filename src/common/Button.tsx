import styled from "styled-components";
import Theme from "../style/Theme";

const Button = styled.button`
  cursor: pointer;
  padding: 9px 20px;
  font-family: ${Theme.baseFontFamily};
  font-size: ${Theme.regular};
  font-weight: 500;
  pointer-events: all;
  border: none;

  width: 100%;
  border-radius: 5px;

  &.btn-primary {
    background-color: ${Theme.baseColor};
    color: ${Theme.white};
    border: 1px solid ${Theme.baseColor};
    min-height: 40px;

    &:hover {
      color: ${Theme.white};
      background-color: ${Theme.secondaryColor};
    }

    &:focus {
      outline: none;
      border: none;
      background-color: ${Theme.secondaryColor};
    }
    &.btn-disabled {
      background-color: ${Theme.gray25};
      color: ${Theme.white};
      border: ${Theme.gray25};
    }
    .btn-icon {
      vertical-align: middle;
    }
  }
  &.btn-transparent {
    background-color: transparent;
    border: 1px solid ${Theme.baseColor};
    min-height: 40px;
  }
  &.btn-transparent-white {
    background-color: transparent;
    border: 1px solid ${Theme.white};
    color: ${Theme.white};
    min-height: 40px;
  }
  &.btn-small {
    color: ${Theme.white};
    background-color: ${Theme.baseColor};
    font-size: ${Theme.verySmall};
    padding: 5px 10px;

    i {
      font-size: ${Theme.extraSmall};
      margin-right: 5px;
    }
    &:hover {
      color: ${Theme.white};
      background-color: ${Theme.secondaryColor};
    }
  }
  &.btn-transparent-small {
    background-color: transparent;
    font-size: ${Theme.small};
    padding: 5px 10px;

    i {
      font-size: ${Theme.extraSmall};
      margin-right: 10px;
    }
    &:hover {
      color: ${Theme.white};
      background-color: ${Theme.secondaryColor};
    }
  }
`;

export default Button;
