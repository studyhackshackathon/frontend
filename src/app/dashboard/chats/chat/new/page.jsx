'use client'
import React from 'react';
// utils
import { Box, Button, Divider, Flex, HStack, Heading, Icon, Text } from '@chakra-ui/react';
// components
// import Option_Card from '@/src/components/home/option_card';
// icons
import {BsArrowLeft,BsInfoCircleFill} from 'react-icons/bs';
import Drop_Zone from '@/src/components/lib/dropzone';


export default function page() {
    
  return (
    <Box bgColor='#fff' borderRadius={'5'} p='4' boxShadow={'lg'} >
        <Button leftIcon={<BsArrowLeft />}>
            Back
        </Button>
        <Flex direction={{base: 'column',md:'row'}} my='2'>
            <Option_Card 
                option={option_card_props}
            />
            <Box p='2' w={{base:'full', md:'80%'}} >
                <HStack>
                    <Icon
                        mr="2"
                        boxSize="5"
                        as={BsInfoCircleFill}
                        color='#192A51'
                    />
                    <Text fontWeight={'semibold'}>How it works</Text>
                </HStack>
                {instructions?.map((item,index)=>{
                    return(
                        <li key={index} style={{fontSize:'14px',marginBottom:'2px'}}>
                            {item}
                        </li>
                    )
                })}
            </Box>
        </Flex>
        <Box
            margin={{
                base:'0',
                md:'6'
            }}
        >
            <Drop_Zone/>
            <Button
                bgColor='#8B3C7F'
                color={'#fff'}
                mt='2'
            >
                Upload File
            </Button>
        </Box>
    </Box>
  )
}

const option_card_props={
    bodyBg:'#192A51',
    title:'Chat with PDFs',
    description:'Ask and let AI help you understand concepts from documents.',
    buttonbg:'#8B3C7F',
    buttondesc:'Upload File',
    tagradius:'10',
    tagColor:'#273E73',
    tagSize:'100',
    tag2radius:'5',
    tag2Color:'#5578C8',
    tag2Size:'50',
}

const instructions=[
    'Upload your pdf document example: Engines.pdf',
    'Let us train our model with the document.',
    'Start interacting with the chatbot',
    'Ask bot questions example: What is an engine?',
    'Get responses',
]

const Option_Card=(props)=>{
    return(
        <Box
            w='full'
            borderRadius={'10'}
            color={'#FFFFFF'}
            p='4'
            align='left'
            position={'relative'}
            bgColor={props.option.bodyBg}
            cursor={'pointer'}
            _hover={{
                boxShadow:'md',
            }}
            transition=".3s ease"
        >
            <Heading as='h2' fontSize={'2xl'} py='2'>{props.option.title}</Heading>
            <Text py='2' w={{base:'60%',md:'40%'}}>{props.option.description}</Text>
            <Box 
                borderRadius={props.option.tagradius} 
                position={'absolute'} 
                top='10' 
                right='10' 
                boxSize={props.option.tagSize} 
                bgColor={props.option.tagColor} 
                transform={'rotate(-30deg)'}
            />
            <Box 
                borderRadius={props.option.tag2radius} 
                position={'absolute'} 
                top='50%' 
                right='5' 
                boxSize={props.option.tag2Size} 
                bgColor={props.option.tag2Color}
                transform={'rotate(30deg)'}
            />
        </Box>
    )
}