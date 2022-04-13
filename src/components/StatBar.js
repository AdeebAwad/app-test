import { HStack, Progress, Text } from '@chakra-ui/react';
import React from 'react';

const StatBar = ({ rate, value, total }) => {
  return (
    <HStack spacing="5" align="center" justifyContent="space-evenly">
      <Text>{rate}</Text>
      <Text>{value}%</Text>
      <Progress colorScheme="green" width="10em" height="32px" value={value} />
      <Text>Total {total}</Text>
    </HStack>
  );
};

export default StatBar;
