import styled from "styled-components";
import Theme from "../style/Theme";

const Button = styled.button`
  cursor: pointer;
  padding: 9px 10px;
  font-family: ${Theme.baseFontFamily};
  font-size: ${Theme.normal};
  pointer-events: all;
  min-height: 40px;
  width: 100%;

  &.btn-primary {
    background-color: ${Theme.baseColor};
    color: ${Theme.white};
    border: 1px solid ${Theme.baseColor};
    border-radius: 5px;

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
`;

export default Button;
