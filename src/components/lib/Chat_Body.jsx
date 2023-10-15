import React, { useEffect, useRef, useState } from 'react'
import { Box, Divider, Flex, Grid, GridItem, HStack, Icon, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, Text, Tr, useToast } from '@chakra-ui/react'
import { IoClose } from 'react-icons/io5'
import { MdCleaningServices } from 'react-icons/md'
import CustomToolTip from './ToolTip'
import { IoIosSend } from 'react-icons/io';
import axios from 'axios';

export default function Chat_Body(props) {
  const toast = useToast();
  const {chats, pdf_id, access_user_token, set_is_refresh_data} = {...props};
  const [question,set_question]=useState('');
  const [is_submitted,set_is_submitted]=useState(false);

  const handle_ask_question=async()=>{
    if(question == ''){
      toast({
        title: "",
        description: 'You did not give an input',
        status: 'info',
        isClosable: true,
        position: 'top-left',
        variant:'left-accent'
      });
      return ;
    }
    let data = {
      'question': question
    };
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://api-docs-studyhacks-v1.onrender.com/chats/${pdf_id}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${access_user_token}`,
      },
      data : data
    };
    
    await axios.request(config).then((response) => {
      set_is_refresh_data(`${question}`)
      set_question('');
      set_is_submitted(!is_submitted)
    })
    .catch((error) => {
      console.log(error);
    });
  }
  const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
      scrollToBottom()
    }, [is_submitted]);
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
      display={props?.display}
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
        <Conversation_Body chats={chats} messagesEndRef={messagesEndRef}/>
        <Input_Card set_question={set_question} handle_ask_question={handle_ask_question} question={question}/>
      </GridItem>
    </Grid>
  )
}

const Conversation_Body=(props)=>{
  const {chats,messagesEndRef,ref} = {...props};
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
      ref={messagesEndRef}
    >
      {chats?.map((chat)=>{
        return(
          <Text_Card key={chat?._id} chat={chat}/>
        )
      })}
      
    </Box>
  )
}

const Text_Card=(props)=>{
  return(
      <Box
      w='100%'
      >
        <HStack
          w='50%'
        >
          <Text
            bgColor='#8B3C7F'
            p='2'
            mt='2'
            borderRadius={'5'}
            color='#FFFFFF'
            align='right'
            textAlign={'left'}
            w={'100%'}
            fontSize='sm'
          > 
            {props?.chat?.question}
          </Text>
        </HStack>
        <Text
          bgColor='#FFFFFF'
          p='2'
          mt='2'
          borderRadius={'5'}
          color='#000000'
          align='left'
          textAlign={'left'}
          w={''}
          fontSize='sm'
        > 
          {props?.chat?.answer}
        </Text>
      </Box>
  )
}

const Input_Card=(props)=>{
  const {set_question,handle_ask_question,question} = {...props}
  return(
    <InputGroup mt='2'>
        <Input type='text' value={question} placeholder={'Ask something'} fontWeight={'semibold'} fontSize={'sm'} bg='#FFF' variant={'filled'} focusBorderColor='#8B3C7F' onChange={((e)=>{set_question(e.target.value)})}/>
        <InputRightElement cursor={'pointer'} onClick={handle_ask_question}>
          <IoIosSend color='#B051A2' />
        </InputRightElement>
    </InputGroup>
  )
}