import React from "react";

import "./App.css";
import { Box, Typography } from "@mui/material";
import Countdown from "react-countdown";

function App() {
  return (
    <div className="App">
      <Box>
        <Countdown
          renderer={(formatted) => (
            <Typography
              suppressHydrationWarning
              sx={{
                fontSize: "1.5em",
                fontFamily: "'Libre Baskerville', serif",
                margin: "1.5rem 0",
              }}
            >{`${formatted.days} ${formatted.days === 1 ? "day" : "days"}, ${
              formatted.hours
            } ${formatted.hours === 1 ? "hour" : "hours"}, ${
              formatted.minutes
            } ${formatted.minutes === 1 ? "minute" : "minutes"}, ${
              formatted.seconds
            } ${formatted.seconds === 1 ? "second" : "seconds"}`}</Typography>
          )}
          date={Date.now() + 10000}
        />
      </Box>
    </div>
  );
}

export default App;
