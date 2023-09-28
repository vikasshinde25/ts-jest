import styled from "styled-components";

import Theme from "../style/Theme";

const CardSlider = styled.div`
  position: relative;
  .slideshow {
    margin: 0 auto;
    overflow: hidden;
    padding-top: 20px;
  }

  .slideshowSlider {
    transition: ease 1000ms;
    display: flex;
    position: relative;
  }

  .slide {
    flex: 0 0 33%;
    min-height: 100px;
    border-radius: 10px;

    .slide-data-box {
      height: 100%;
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.8);
      margin: 0 15px 0 5px;

      .scorecard-header {
        display: flex;
        padding: 10px;
        .match-label {
          font-size: ${Theme.normal};
        }
        .match-venue {
          color: ${Theme.gray50};
          font-size: ${Theme.extraSmall};
        }
      }
      .scorecard-body {
        padding: 15px 10px 10px 10px;
        border-bottom: 2px solid transparent;
        border-top: 2px solid transparent;

        .team-score-box {
          .team-logo {
            img {
              padding: 5px;
              box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.5);
              border-radius: 50%;
            }
          }
          .team-name-score {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            .team-score {
              font-size: 12px;
            }
          }
        }
        .vs {
          color: ${Theme.baseColor};
          display: flex;
          height: 100%;
          align-items: center;
          justify-content: center;
        }
        &.test {
          border-image: linear-gradient(
            0.25turn,
            rgba(192, 0, 0, 0),
            rgba(192, 0, 0, 1),
            rgba(192, 0, 0, 0)
          );
          border-image-slice: 1;
        }
        &.test-pink {
          border-image: linear-gradient(
            0.25turn,
            rgba(207, 24, 61, 0),
            rgba(207, 24, 61, 1),
            rgba(207, 24, 61, 0)
          );
          border-image-slice: 1;
        }
        &.odi {
          border-image: linear-gradient(
            0.25turn,
            rgba(0, 146, 112, 0),
            rgba(0, 146, 112),
            rgba(0, 146, 112, 0)
          );
          border-image-slice: 1;
        }

        &.t20 {
          border-image: linear-gradient(
            0.25turn,
            rgba(17, 80, 201, 0),
            rgba(17, 80, 201),
            rgba(17, 80, 201, 0)
          );
          border-image-slice: 1;
        }
      }
      .match-status {
        &.test {
          color: ${Theme.darkRed};
          // background: linear-gradient(
          //   0.25turn,
          //   rgba(192, 0, 0, 0),
          //   rgba(192, 0, 0, 0.2),
          //   rgba(192, 0, 0, 0.5),
          //   rgba(192, 0, 0, 0.7),
          //   rgba(192, 0, 0, 0.9),
          //   rgba(192, 0, 0, 1),
          //   rgba(192, 0, 0, 0.9),
          //   rgba(192, 0, 0, 0.7),
          //   rgba(192, 0, 0, 0.5),
          //   rgba(192, 0, 0, 0.2),
          //   rgba(192, 0, 0, 0)
          // );
        }
        &.test-pink {
          color: ${Theme.pink};
          // background: linear-gradient(
          //   0.25turn,
          //   rgba(207, 24, 61, 0),
          //   rgba(207, 24, 61, 0.2),
          //   rgba(207, 24, 61, 0.5),
          //   rgba(207, 24, 61, 0.7),
          //   rgba(207, 24, 61, 0.9),
          //   rgba(207, 24, 61, 1),
          //   rgba(207, 24, 61, 0.9),
          //   rgba(207, 24, 61, 0.7),
          //   rgba(207, 24, 61, 0.5),
          //   rgba(207, 24, 61, 0.2),
          //   rgba(207, 24, 61, 0)
          // );
        }
        &.odi {
          color: ${Theme.baseColor};
          // background: linear-gradient(
          //   0.25turn,
          //   rgba(0, 146, 112, 0),
          //   rgba(0, 146, 112, 0.2),
          //   rgba(0, 146, 112, 0.5),
          //   rgba(0, 146, 112, 0.7),
          //   rgba(0, 146, 112, 0.9),
          //   rgba(0, 146, 112, 1),
          //   rgba(0, 146, 112, 0.9),
          //   rgba(0, 146, 112, 0.7),
          //   rgba(0, 146, 112, 0.5),
          //   rgba(0, 146, 112, 0.2),
          //   rgba(0, 146, 112, 0)
          // );
        }

        &.t20 {
          color: ${Theme.skyBlue};
          // background: linear-gradient(
          //   0.25turn,
          //   rgba(0, 146, 112, 0),
          //   rgba(0, 146, 112, 0.2),
          //   rgba(0, 146, 112, 0.5),
          //   rgba(0, 146, 112, 0.7),
          //   rgba(0, 146, 112, 0.9),
          //   rgba(0, 146, 112, 1),
          //   rgba(0, 146, 112, 0.9),
          //   rgba(0, 146, 112, 0.7),
          //   rgba(0, 146, 112, 0.5),
          //   rgba(0, 146, 112, 0.2),
          //   rgba(0, 146, 112, 0)
          // );
        }
      }

      .scorecard-footer {
        padding: 10px;
        text-align: center;

        ul {
          li {
            position: relative;
            display: inline-block;
          }
        }
      }

      &.test {
        border-bottom: 5px solid ${Theme.darkRed};
      }
      &.test-pink {
        border-bottom: 5px solid ${Theme.pink};
      }
      &.odi {
        border-bottom: 5px solid ${Theme.baseColor};
      }
      &.t20 {
        border-bottom: 5px solid ${Theme.skyBlue};
      }
    }
  }

  .slider-control-arrow {
    position: absolute;
    color: ${Theme.white};
    cursor: pointer;
    top: -17%;
    width: 100%;

    .prev,
    .next {
      position: absolute;
      color: ${Theme.white};
      font-size: ${Theme.regular};
      background-color: ${Theme.baseColor};
      width: 28px;
      height: 28px;
      text-align: center;
      border-radius: 50%;
      padding: 6px 0 0 0;
    }
    .prev {
      right: 40px;
    }
    .next {
      right: 0px;
    }
  }

  .slideshowDots {
    text-align: center;
  }

  .slideshowDot {
    display: inline-block;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    cursor: pointer;
    margin: 15px 7px 0px;
    background-color: #c4c4c4;
  }

  .slideshowDot.active {
    background-color: #6a0dad;
  }
`;

export default CardSlider;
