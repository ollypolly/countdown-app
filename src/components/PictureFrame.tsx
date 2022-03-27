import React from "react";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  position: absolute;
  top: 20vh;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 30%;

  img {
    border: solid 2px;
    border-bottom-color: #ffe;
    border-left-color: #eed;
    border-right-color: #eed;
    border-top-color: #ccb;
    max-height: 100%;
    max-width: 100%;
  }

  .frame {
    background-color: #ddc;
    border: solid 2vmin #eee;
    border-bottom-color: #fff;
    border-left-color: #eee;
    border-radius: 2px;
    border-right-color: #eee;
    border-top-color: #ddd;
    box-sizing: border-box;
    display: inline-block;
    margin: 1vh 2vw;
    height: 100%;
    padding: 1vmin;
    position: relative;
    text-align: center;
    &:before {
      border-radius: 2px;
      bottom: -2vmin;

      content: "";
      left: -2vmin;
      position: absolute;
      right: -2vmin;
      top: -2vmin;
    }
    &:after {
      border-radius: 2px;
      bottom: -2.5vmin;

      content: "";
      left: -2.5vmin;
      position: absolute;
      right: -2.5vmin;
      top: -2.5vmin;
    }
  }
`;

const PictureFrame = ({ src }: { src: string }) => {
  return (
    <StyledDiv>
      <div className="frame">
        <img src={src} alt="Mona Lisa" />
      </div>
    </StyledDiv>
  );
};

export default PictureFrame;
