'use client'
import Chat_Body from '@/src/components/lib/Chat_Body';
import CustomToolTip from '@/src/components/lib/ToolTip';
import Pdf_Viewer from '@/src/components/lib/pdf_viewer';
import { 
    Accordion,
        AccordionButton,
        AccordionIcon,
        AccordionItem,
        AccordionPanel,
        Box, 
        Breadcrumb, 
        BreadcrumbItem, 
        BreadcrumbLink, 
        Button, 
        Divider, 
        Drawer, 
        DrawerBody, 
        DrawerCloseButton, 
        DrawerContent, 
        DrawerFooter, 
        DrawerHeader, 
        DrawerOverlay, 
        HStack, 
        Icon, 
        IconButton, 
        Text, 
        useDisclosure 
} from '@chakra-ui/react'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { IoIosChatboxes, IoMdArrowDropdown } from 'react-icons/io';
import { MdSpaceDashboard } from 'react-icons/md';
import { BiRefresh } from 'react-icons/bi';
import Cookies from 'universal-cookie'; 
import axios from 'axios';

export default function Page() {
    const router = useRouter();
    const pathname = usePathname().split('/');
    const { isOpen, onOpen, onClose } = useDisclosure();

    let item_id = pathname[4];
    const cookies = new Cookies();

    const [summary_data,set_summary_data]=useState('');
    const access_user_token = cookies.get('user_token');
    const user_id = cookies.get('user_id');

    useEffect(()=>{
      get_Data()
    },[])
  
    const get_Data=async()=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api-docs-studyhacks-v1.onrender.com/sammary',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${access_user_token}`,
            },
        };
        await axios.request(config).then((response) => {
            let data = response?.data?.summaries;

            let filteredData = data?.filter((item)=>item?.user_id.includes(user_id) && item?._id.includes(item_id));

            let reduced_data = filteredData.reduce((a, b) => Object.assign(a, b), {});
            set_summary_data(reduced_data);
        }).catch((error) => {
            console.log(error);
        });
    }

    const handle_delete_Summary=async()=>{
        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `https://api-docs-studyhacks-v1.onrender.com/sammary/${pathname[4]}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${access_user_token}`,
            },
        };
        await axios.request(config).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error);
        });
    }
  return (
    <Box bgColor='#fff' borderRadius={'5'} p='4' boxShadow={'lg'}>
        <Breadcrumb fontSize={'xs'} pb={'2'}>
            <BreadcrumbItem>
                <Icon
                    mr="1"
                    boxSize="4"
                    _groupHover={{
                        color: "#fff",
                    }}
                    as={MdSpaceDashboard}
                />
                <BreadcrumbLink onClick={(()=>{router.push(`/dashboard/home`)})}>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink onClick={(()=>{router.push(`/dashboard/summaries`)})}>summaries</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink >{pathname[4]}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <Divider/>
        <Box h='93vh' mt='2'>
            <Accordion_Card prompt={summary_data?.sammary?.prompt}/>
            <Text my='2'>Your Summary</Text>
            <Box p='2' bgColor='#D5C6E0' borderRadius={'5'} boxShadow={'md'} h={{base:'35vh',md:'35vh'}} overflowY={'scroll'}>
                <Text>
                {summary_data?.sammary?.sammary}
                </Text>
            </Box>
            <Button bgColor='#8B3C7F' color={'#fff'} mt='2' onClick={handle_delete_Summary}>Delete </Button>
        </Box>
    </Box>
  )
}

const Accordion_Card=(props)=>{
    const {prompt} = {...props}
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
                <AccordionPanel pb={4} bg={'#AAA1C8'} borderRadius={'5'} fontWeight={'semibold'} h={{base:'35vh',md:'35vh'}} overflowY={'scroll'}>
                    {prompt}
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}