import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import { Box, styled } from "@mui/material";
import { HealthCheckConfig } from "@webscopeio/react-health-check";

import AnimatedRoutes from "./route/AnimatedRoutes";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

function App() {
  return (
    <HealthCheckConfig value={{
      services: [
        {
          name: "auth",
          url: process.env.REACT_APP_SERVER_URL
        }
      ]
    }}>

    <StyledContainer>
      <Router basename="/">
        <StyledRouterContainer>
          <AnimatedRoutes />
        </StyledRouterContainer>
      </Router>
    </StyledContainer>
    </HealthCheckConfig>
  );
}

const StyledContainer = styled(Box)`
  display: flex;
  margin: 0;
  min-height: calc(100vh - 100px);
  position: relative;
`;
const StyledRouterContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default App;
