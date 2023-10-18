'use client'
import React, { useState } from 'react';
// utils
import { 
    Box, 
    Button,
    Flex, 
    HStack, 
    Heading, 
    Icon, 
    IconButton,
    Text, 
    Tooltip 
} from '@chakra-ui/react';
// components
// icons
import {BsArrowLeft,BsInfoCircleFill} from 'react-icons/bs';
import Drop_Zone from '../../../../../components/lib/dropzone';
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie'; 
import axios from 'axios';
import {MdCloudDone} from 'react-icons/md'
import {IoMdClose} from 'react-icons/io';

import {storage} from '../../../../../components/lib/db/firebase'
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage';

export default function Page() {
  const router = useRouter();
  const cookies = new Cookies();
  const access_user_token = cookies.get('user_token');

  const [is_file_uploaded,set_is_file_uploaded]=useState(false);
  const [is_submitting,set_is_submitting]=useState(false);

  const [file,set_file]=useState('');

  const UploadDocument = async() => {  
    const formData = new FormData();
    formData.append('file', file);
    set_is_submitting(true);
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://api-docs-studyhacks-v1.onrender.com/pdfs`,
        headers: { 
            'Content-Type': 'multipart/form-data',
          'Authorization': `${access_user_token}`,
        },
        data : formData
      };

    try {
        await axios.request(config).then((response) => {
                set_is_file_uploaded(true)
                set_is_submitting(false)
                router.push(`/dashboard/chats/chat/${response?.data?.id}`);
            }).catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.error(error);
    }
  }

    const file_upload_to_firebase_storage=async()=>{
        set_is_submitting(true);
        if (file?.name == undefined){
            toast({
                position: 'top-left',
                variant:"subtle",
                title: '',
                description: 'could not find file, try re-uploading it.',
                status: 'error',
                isClosable: true,
            })
            setTimeout(() =>{
                set_is_file_uploaded(true)
                set_is_submitting(false);
            },3000)
            return ;
        }else{
            const file_documentRef = ref(storage, `file/${file?.name}`);
            const snapshot= await uploadBytes(file_documentRef,file);
            const file_url = await getDownloadURL(snapshot.ref);
            cookies.set('file_url', file_url, { path: '/' });
            setTimeout(() =>{
                set_is_submitting(false);
            },3000)
            return file_url;
        }
        
    }
  return (
    <Box bgColor='#fff' borderRadius={'5'} p='4' boxShadow={'lg'} >
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
        <Box
            margin={{
                base:'0',
                md:'6'
            }}
        >
        {is_file_uploaded?
            <Uploaded_Card_Item name={file?.name}/>
            :
            <>
                {file?
                    <Box border='1px' borderColor='#eee' borderStyle='solid' p='2' borderRadius='md' >
                        <Selected_Card_Item name={file?.name} set_file={set_file}/>
                    </Box>
                :
                    <Drop_Zone set_file={set_file}/>
                }
            </>
        }
        {is_submitting?
            <Button
                isLoading
                loadingText='Uploading...'
                bgColor='#8B3C7F'
                color={'#fff'}
                mt='2'
            >
                Upload File
            </Button>
            :
            <Button
                bgColor='#8B3C7F'
                color={'#fff'}
                mt='2'
                onClick={UploadDocument}
            >
                Upload File
            </Button>

        }
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

const Selected_Card_Item=({name,set_file})=>{
    const handle_remove_file=()=>{
        set_file('')
    }
	return(
		<HStack justify='space-between'>
            <HStack>
                <Icon as={MdCloudDone} color='orange'/>
                <Text w='100%' >{name}</Text>
            </HStack>
            <Tooltip label={`Remove ${name}`} placement='auto'>
                <IconButton aria-label='Remove File' icon={<IoMdClose/>} onClick={handle_remove_file}/>
            </Tooltip>
        </HStack>
	)
}

const Uploaded_Card_Item=({name})=>{
	return(
		<Flex boxShadow='lg' borderRadius='5' p='2' borderRight='2px solid green'>
			<Text w='100%' >{name} uploaded</Text>
            <Icon as={MdCloudDone} color='green'/>
		</Flex>
	)
}