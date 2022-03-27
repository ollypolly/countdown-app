import React from "react";
import { Box, Typography } from "@mui/material";
import Countdown from "react-countdown";
//@ts-ignore
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import YoutubeEmbed from "./components/YoutubeEmbed";
import money from "./img/money.png";
import family from "./img/family.jpeg";

import LivingRoomBackground from "./img/living_room.svg";

import styled from "@emotion/styled";

import { useTheme } from "@mui/material";

import moment from "moment";
import PictureFrame from "./components/PictureFrame";

const StyledBackground = styled.div`
  position: fixed;
  background-image: url(${LivingRoomBackground});
  z-index: -1;
  height: 100vh;
  max-width: 900px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-origin: content-box;
  padding: theme.spacing(1);
`;

function App() {
  const { width, height } = useWindowSize();

  const theme = useTheme();

  const dateObj = moment("2023-04-13", "YYYY-MM-DD").toDate();

  // Test date
  //const dateObj = Date.now() + 5000;

  // Random component
  const Completionist = () => (
    <Box>
      <YoutubeEmbed embedId="PIAXG_QcQNU" />
      <img
        style={{ display: "none" }}
        id="money"
        width="220"
        height="277"
        src={money}
        alt="Money"
      ></img>

      <Confetti
        drawShape={(ctx) => {
          const moneyImage = document.getElementById("money");
          //@ts-ignore
          ctx.drawImage(moneyImage, -20, -10, 50, 20);
        }}
        width={width}
        height={height}
      />
      <Typography suppressHydrationWarning variant="h1">
        Here comes the money 💸!
      </Typography>
    </Box>
  );

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography suppressHydrationWarning variant="h2">
            Time until pension! 💸
          </Typography>
          <Typography
            sx={{ textAlign: "center", padding: "0 1rem" }}
            suppressHydrationWarning
            variant="h1"
          >{`${days} ${days === 1 ? "day" : "days"}, ${hours} ${
            hours === 1 ? "hour" : "hours"
          }, ${minutes} ${minutes === 1 ? "minute" : "minutes"}, ${seconds} ${
            seconds === 1 ? "second" : "seconds"
          }`}</Typography>
        </Box>
      );
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height,
        }}
      >
        <Box
          sx={{
            zIndex: "2",
            borderRadius: "10px",
            padding: theme.spacing(1),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgb(255 255 255 / 60%)",
            margin: theme.spacing(1),
          }}
        >
          <Countdown renderer={renderer} date={dateObj} />
        </Box>

        <StyledBackground>
          <PictureFrame src={family} />
        </StyledBackground>
      </Box>
    </>
  );
}

export default App;
