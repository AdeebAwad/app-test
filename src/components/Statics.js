import {
  Box,
  Button,
  Flex,
  HStack,
  Progress,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from './axios';
import StatBar from './StatBar';

const Statics = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getStats = async () => {
      const response = await axios.get('/ratings');
      setData(response.data);
    };
    getStats();
  }, []);

  return (
    <Flex align="center" justifyContent="center">
      <Box maxW="sm" p="5">
        Stats
      </Box>
      <Box maxW="lg" borderWidth="1px" borderRadius="lg" p="5">
        <VStack spacing={5} w="500px">
          {data
            ? data.map((item, i) => {
                return (
                  <StatBar
                    key={i}
                    value={item.percentage}
                    total={item.count}
                    rate={item.name}
                  />
                );
              })
            : null}
        </VStack>
      </Box>
    </Flex>
  );
};

export default Statics;
