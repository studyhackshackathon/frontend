'use client'
import React, { useState } from 'react';
// utils
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, HStack, Heading, Icon, Text, Textarea, useToast } from '@chakra-ui/react';
import {BsArrowLeft,BsInfoCircleFill} from 'react-icons/bs';
import Drop_Zone from '@/src/components/lib/dropzone';
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie'; 
import axios from 'axios';
import { BiRefresh } from 'react-icons/bi';
import { IoIosChatboxes, IoMdArrowDropdown } from 'react-icons/io';

export default function Page() {
    const router = useRouter();
    const toast = useToast();
    const [text,set_text]=useState('');
    const cookies = new Cookies();
    const access_user_token = cookies.get('user_token');
    const user_id = cookies.get('user_id');

    const [is_summarizing, set_is_summarizing]=useState(false);
    const [is_saving_summary, set_is_saving_summary]=useState(false);
    const [is_summarized,set_is_summarized]=useState(false);
    const [summarized_text,set_summarized_text]=useState('');

    const handle_summary_text=async()=>{
        set_is_summarizing(true)
        if(text == ''){
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
            "text": text
        };
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api-docs-studyhacks-v1.onrender.com/sammary',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${access_user_token}`,
            },
            data : data
        };
        await axios.request(config).then((response) => {
            toast({
                title: "",
                description: 'summary has been created successfully',
                status: 'success',
                isClosable: true,
                position: 'top-left',
                variant:'left-accent'
            });
            setTimeout(()=>{
                set_is_summarized(true)
                set_summarized_text(response.data);
            },2000)
        }).catch((error) => {
            console.log(error);
        }).finally(()=>{
            set_is_summarizing(false)
        });
    }
    
    const handle_save_summary=()=>{
        set_is_saving_summary(true)
        let data = {
            title:'',
            prompt:text,
            sammary:summarized_text,
            type:'text',
            pdf_id:'',
            user_id:user_id
        };
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api-docs-studyhacks-v1.onrender.com/sammary/save',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${access_user_token}`,
            },
            data:data
        };
        axios.request(config).then((response) => {
            toast({
                title: "",
                description: 'summary saved successfully',
                status: 'success',
                isClosable: true,
                position: 'top-left',
                variant:'left-accent'
            });
            router.push('/dashboard/summaries')
        }).catch((error) => {
            console.log(error);
        }).finally(()=>{
            set_is_saving_summary(false)
        });
    }

    const handle_regenerate=async()=>{
        set_is_summarized(false);
        set_is_summarizing(true)
        let data = {
            "text": text
        };
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api-docs-studyhacks-v1.onrender.com/sammary',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${access_user_token}`,
            },
            data : data
        };
        toast({
            title: "",
            description: 'regenerating your summary, please wait',
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: 'top-left',
            variant:'left-accent'
        });
        axios.request(config).then((response) => {
            toast({
                title: "",
                description: 'summary regenerated successfully.',
                status: 'success',
                isClosable: true,
                position: 'top-left',
                variant:'left-accent'
            });
            setTimeout(()=>{
                set_is_summarized(true)
                set_summarized_text(response.data)
                console.log(response.data);
            },3000)
        }).catch((error) => {
            console.log(error);
        }).finally(()=>{
            set_is_summarizing(false)
        });
    }
    
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
        {is_summarized?
            <>
                <Box bgColor='#fff' borderRadius={'5'} p='4' boxShadow={'lg'}>
                    <Box h='93vh' mt='2'>
                        <Accordion_Card summarized_text={summarized_text} text={text}/>
                        <HStack mt='2'>
                            {is_saving_summary?(
                                <Button isLoading loadingText={'saving...'} bgColor='#8B3C7F' color={'#fff'} mt='2'></Button>
                            ):(
                                <Button bgColor={'#8B3C7F'} color='#FFFFFF' onClick={handle_save_summary}>Save</Button>
                            )}
                            <Button leftIcon={<BiRefresh />} variant='solid' onClick={handle_regenerate}>
                                Regenerate
                            </Button>
                        </HStack>
                        <Text my='2'>Your Summary</Text>
                        <Box p='2' bgColor='#D5C6E0' borderRadius={'5'} boxShadow={'md'} h={{base:'35vh',md:'50vh'}} overflowY={'scroll'}>
                            <Text>
                                {summarized_text?.sammary}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </>
            :
            <>
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
                    <Textarea value={text} placeholder='paste your content here' focusBorderColor='#8B3C7F' variant={'filled'} size='lg' borderRadius={5} onChange={((e)=>{set_text(e.target.value)})}/>
                    {is_summarizing?(
                        <Button isLoading loadingText={'summarizing...'} bgColor='#8B3C7F' color={'#fff'} mt='2'></Button>
                    ):(
                        <Button bgColor='#8B3C7F' color={'#fff'} mt='2' onClick={handle_summary_text}>Summarize </Button>
                    )}
                </Box>
            </>
        }
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

const Accordion_Card=(props)=>{
    const {text} = {...props};
    return(
        <Accordion allowToggle>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    Prompt
                    </Box>
                    <AccordionIcon as={IoMdArrowDropdown}/>
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4} bg={'#AAA1C8'} borderRadius={'5'} fontWeight={'semibold'} h={{base:'35vh',md:'50vh'}} overflowY={'scroll'}>
                    {text}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}