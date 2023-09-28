import styled from "styled-components";

import Theme from "../style/Theme";

const FlexThumbnailSlider = styled.div`
  position: relative;
  margin: auto;

  .dashboard-thumbnail-slider {
    background: ${Theme.baseColor};
    padding: 30px 0;
  }
  .slider-overflow {
    overflow: hidden;
  }
  .slider-row {
    display: flex;
    transition: all 1000ms ease 0s;

    li.slide-item {
      flex: 0 0 100%;
      width: 100%;
      transition: ease 1000ms;
      display: none;

      &.active {
        display: inline-block;
      }

      .slide-bg {
        background-position: top right !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;

        .slide-bg-overlay {
          background: linear-gradient(
            rgba(255, 255, 255, 0) 50%,
            rgba(0, 146, 112, 0.8) 85%,
            rgba(0, 146, 112, 0.9) 90%,
            rgb(0, 146, 112) 100%
          );
        }
      }

      .slide-container {
        padding: 10px 0;
        height: 500px;
        min-height: 300px;
        color: ${Theme.white};

        .slide-content-box {
          white-space: normal;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;

          .slider-content-button {
            ul {
              li {
                display: inline-block;
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }

  .slider-control-thumbnail {
    text-align: center;
    li {
      display: inline-block;
      border-radius: 10px;
      height: 30px;
      cursor: pointer;

      img {
        height: 100%;
        border-radius: 10px;
      }
    }

    li.active {
      img {
        border: 2px solid white;
      }
    }
    li {
      display: inline-block;
      margin: 10px 10px 0 0;
    }
    li:last-child {
      margin-right: 0;
    }
    @media screen and (min-width: 768px) {
      li {
        height: 50px;
      }
    }
    @media screen and (min-width: 1200px) {
      li {
        height: 80px;
      }
    }
  }
  .slider-thumbnail-right {
    @media screen and (min-width: 992px) {
      li {
        display: block;
        margin: 0 0 5px 0;
        height: auto;
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
    @media screen and (min-width: 1200px) {
      li {
        img {
          max-width: 90px;
        }
      }
    }
  }
`;
export default FlexThumbnailSlider;
