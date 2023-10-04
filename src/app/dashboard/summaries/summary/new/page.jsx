'use client'
import React from 'react';
// utils
import { Box, Button, Flex, HStack, Heading, Icon, Text, Textarea } from '@chakra-ui/react';
import {BsArrowLeft,BsInfoCircleFill} from 'react-icons/bs';
import Drop_Zone from '@/src/components/lib/dropzone';
import { useRouter } from 'next/navigation';


export default function Page() {
  const router = useRouter();
  return (
    <Box 
        bgColor='#fff' 
        borderRadius={'5'} 
        boxShadow={'lg'} 
        p={{
            base:'4',
            md:'6'
        }}
    >
        <Button leftIcon={<BsArrowLeft />} onClick={(()=>{router.back()})}>
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
        <Box>
            <Textarea placeholder='paste your content here' focusBorderColor='#8B3C7F' variant={'filled'} size='lg' borderRadius={5}/>
            <Button
                bgColor='#8B3C7F'
                color={'#fff'}
                mt='2'
            >
                Summarize
            </Button>
        </Box>
    </Box>
  )
}

const option_card_props={
    bodyBg:'#967AA1',
    title:'Summarize Text',
    description:'Paste and get appropriate summaries of concepts and text.',
    buttonbg:'#192A51',
    buttondesc:'Paste Text',
    tagradius:'100',
    tagColor:'#8B3C7F',
    tagSize:'100',
    tag2radius:'50',
    tag2Color:'#B051A2',
    tag2Size:'50',
}

const instructions=[
    'Paste your content',
    'Let our AI model summarize the content.',
    'View the summarized content',
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