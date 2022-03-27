import React from "react";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  height: 400px;
  margin-bottom: 50px;
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
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset,
      0 5px 10px 5px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    display: inline-block;
    margin: 2vh 2vw;
    height: 400px;
    padding: 2vmin;
    position: relative;
    text-align: center;
    &:before {
      border-radius: 2px;
      bottom: -2vmin;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25) inset;
      content: "";
      left: -2vmin;
      position: absolute;
      right: -2vmin;
      top: -2vmin;
    }
    &:after {
      border-radius: 2px;
      bottom: -2.5vmin;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
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
