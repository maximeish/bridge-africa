import * as React from "react";
import {
  ChakraProvider,
  Box,
  // Text,
  // Link,
  // VStack,
  // Code,
  Grid,
  theme,
} from "@chakra-ui/react";
// import Form from "./components/Form";
import Home from "./pages/Home";
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
// import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={0}>
        <Home />
      </Grid>
    </Box>
  </ChakraProvider>
);
