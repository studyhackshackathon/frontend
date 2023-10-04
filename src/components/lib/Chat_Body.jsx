import { Box, Divider, Flex, Grid, GridItem, HStack, Icon, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, Text, Tr } from '@chakra-ui/react'
import React from 'react'
import { IoClose } from 'react-icons/io5'
import { MdCleaningServices } from 'react-icons/md'
import CustomToolTip from './ToolTip'
import { IoIosSend } from 'react-icons/io'

export default function Chat_Body(props) {
  return (
    <Grid 
      w={{
        base:'100%',
        md:'500px'
      }} 
      bgColor={'#D5C6E0'} 
      borderRadius={'5'} 
      px='2' 
      py='4' 
      h='100%' 
      gridTemplateRows={'50px 1fr 30px'}
      boxShadow={'sm'}
      {...props}
      zIndex={999}
    >
      <GridItem display={'flex'} alignItems={'center'} justifyContent='space-between'>
        <HStack>
          <CustomToolTip label='Close chat body'>
            <IconButton 
              aria-label='Close chat body' 
              icon={<IoClose />}
              bgColor='#FFFFFF'
              onClick={props?.onClose}
            />
          </CustomToolTip>
          <Text fontWeight={'bold'} fontSize={'sm'}>Ask Ai</Text>
        </HStack>
        <CustomToolTip label='Clean chat conversation'>
          <IconButton 
            aria-label='Clean chat conversation' 
            icon={<MdCleaningServices />}
            color='#B051A2'
            _hover={{
              bgColor:"#D9D9D9"
            }}

          />
        </CustomToolTip>
      </GridItem>
      <GridItem 
        h={{
          base : '90%',
          md : '100%'
        }}
      >
        <Conversation_Body/>
        <Input_Card/>
      </GridItem>
    </Grid>
  )
}

const Conversation_Body=()=>{
  return(
    <Box 
      overflowY={'scroll'} 
      h='90%' gap='2' 
      scrollBehavior={'smooth'} 
      transition=".3s ease" 
      w='100%' 
      mt='2' 
      p='2'
      boxShadow={'sm'}
      bgColor={'#E1D9E7'}
      borderRadius={5}
    >
      {conversations?.map((conversation)=>{
        return(
          <Text_Card key={conversation?.id} conversation={conversation}/>
        )
      })}
    </Box>
  )
}

const Text_Card=(props)=>{
  return(
      <Box 
        align={props?.conversation?.owner === 'user' ? 'right' : 'left'} 
      >
        <Text
          bgColor={props?.conversation?.owner === 'user' ? '#8B3C7F' : '#FFFFFF'}
          p='2'
          mt='2'
          borderRadius={'5'}
          color={props?.conversation?.owner === 'user' ? '#FFFFFF' : '#000000'}
          textAlign={'left'}
          w={'225px'}
          fontSize='sm'
        > 
        {props?.conversation?.message}
        </Text>
      </Box>
  )
}

const Input_Card=()=>{
  return(
    <InputGroup mt='2'>
        <Input type='text' placeholder={'Ask something'} fontWeight={'semibold'} fontSize={'sm'} bg='#FFF' variant={'filled'} focusBorderColor='#8B3C7F'/>
        <InputRightElement cursor={'pointer'}>
          <IoIosSend color='#B051A2' />
        </InputRightElement>
    </InputGroup>
  )
}

const conversations=[
  {
    id:1,
    owner: 'user',
    message: 'who wrote this article?'
  },
  {
    id:2,
    owner: 'assistant',
    message: 'The article does not mention the specific author.'
  },
  {
    id:3,
    owner: 'user',
    message: 'Isnt it Jon Stam?'
  },
  {
    id:4,
    owner: 'assistant',
    message: 'Apologies for the confusion. Yes, the article "A Fluid Dynamics Solver for Game Engines" is indeed written by Jon Stam.'
  },
  {
    id:5,
    owner: 'user',
    message: 'What is the navier stokes equations?'
  },
  {
    id:6,
    owner: 'user',
    message: 'who wrote this article?'
  },
  {
    id:7,
    owner: 'assistant',
    message: 'The article does not mention the specific author.'
  },
  {
    id:8,
    owner: 'user',
    message: 'Isnt it Jon Stam?'
  },
  {
    id:9,
    owner: 'assistant',
    message: 'Apologies for the confusion. Yes, the article "A Fluid Dynamics Solver for Game Engines" is indeed written by Jon Stam.'
  },
  {
    id:10,
    owner: 'user',
    message: 'What is the navier stokes equations?'
  },
]