import { Box, HStack, Image, Text } from '@chakra-ui/react'
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
        bg='#CF74A8'
      >
        <Image 
          src='/assets/logo.png' 
          objectFit={'cover'} 
          alt='logo' 
          w='40%' 
          h='30%'
          position={'absolute'}
          top='32.5%'
          left='5%'
        />
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

