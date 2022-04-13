import React, { useState } from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import Survey from './components/Survey';
import Statics from './components/Statics';

function App() {
  const [displayResult, setDisplayResult] = useState(false);
  const displayHandler = () => {
    setDisplayResult(true);
  };
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          {displayResult ? <Statics /> : <Survey display={displayHandler} />}
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
