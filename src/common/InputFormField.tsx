import styled from "styled-components";
import Theme from "../style/Theme";

const InputFormField = styled.div`
  position: relative;

  label {
    color: ${Theme.black};
    font-size: ${Theme.normal};
    font-family: ${Theme.baseFontFamily};
    font-weight: 500;
  }

  .form-control {
    position: relative;
    color: ${Theme.black};
    border: 1px solid ${Theme.gray45};
    font-family: ${Theme.baseFontFamily};
    font-size: ${Theme.small};
    border-radius: 2px;
    padding: 5px 10px;
    display: block;
    width: 100%;
    height: 40px;
    margin-top: 7px;
    background-color: ${Theme.gray8};

    &::placeholder {
      color: ${Theme.gray40} !important;
      font-size: ${Theme.small};
    }

    &:focus {
      outline: none;
      border: 1px solid ${Theme.gray25};
    }

    &.form-control-error {
      border: 1px solid ${Theme.red};
      background: ${Theme.red};
    }
    &.form-control-error__indicator {
      .css-1okebmr-indicatorSeparator {
        display: none;
      }
    }
  }
`;
export default InputFormField;
