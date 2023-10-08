import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react';
//components
import Form from './form';

export default function Pages() {
  return (
    <HStack w='full' h='100vh'>
      <Box 
        display={{base:'none',md:'inline'}}
        w={{base:'0',md:'50vw'}}
        h='100%'
        bg='#D9d9d9'
      >
        <Text>Study\=</Text>
      </Box>
      <Box 
        w={{base:'100vw',md:'50vw'}}
        h='100%'
      >
        <Form/>
      </Box>
    </HStack>
  )
}

