import React, { useState } from 'react';
import { Box, Flex, RadioGroup, Stack, Radio, Button } from '@chakra-ui/react';
import axios from './axios';

const Survey = props => {
  const [value, setValue] = useState(0);

  async function storData() {
    let response = await axios.post('submitAnswer', { answer: value });
    if (response.status == 200) {
      props.display();
    }
  }

  return (
    <Flex align="center" justifyContent="center">
      <Box maxW="sm" p="5">
        Rate Our Service
      </Box>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" p="5">
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row" spacing="5">
            <Radio value="Good">Good</Radio>
            <Radio value="Fair">Fair</Radio>
            <Radio value="Neutral">Neutral</Radio>
            <Radio value="Bad">Bad</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Button onClick={storData} size="lg" ml="5">
        Submit
      </Button>
    </Flex>
  );
};

export default Survey;
