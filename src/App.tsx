import React from "react";
import { Box, Typography } from "@mui/material";
import Countdown from "react-countdown";
//@ts-ignore
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import YoutubeEmbed from "./components/YoutubeEmbed";
import money from "./img/money.png";

function App() {
  const { width, height } = useWindowSize();

  const dateObj = Date.now() + 5000;

  // Random component
  const Completionist = () => (
    <Box>
      <YoutubeEmbed embedId="HMuYfScGpbE" />
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
        <Typography suppressHydrationWarning variant="h1">{`${days} ${
          days === 1 ? "day" : "days"
        }, ${hours} ${hours === 1 ? "hour" : "hours"}, ${minutes} ${
          minutes === 1 ? "minute" : "minutes"
        }, ${seconds} ${seconds === 1 ? "second" : "seconds"}`}</Typography>
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
        <Countdown renderer={renderer} date={dateObj} />
      </Box>
    </>
  );
}

export default App;
