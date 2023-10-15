'use client'
import React, { useEffect, useState } from 'react'
import Fetch_Chats from '@/src/api/chats/chat/fetch_chat';
import Chat_Body from '@/src/components/lib/Chat_Body';
import CustomToolTip from '@/src/components/lib/ToolTip';
import Pdf_Viewer from '@/src/components/lib/pdf_viewer';
import { 
    Box, 
    Breadcrumb, 
    BreadcrumbItem, 
    BreadcrumbLink,
    Divider, 
    Drawer, 
    DrawerBody,
    DrawerContent,
    DrawerOverlay, 
    HStack, 
    Icon, 
    IconButton,
    useDisclosure 
} from '@chakra-ui/react'
import { usePathname, useRouter } from 'next/navigation';
import { IoIosChatboxes } from 'react-icons/io';
import { MdSpaceDashboard } from 'react-icons/md';
import Cookies from 'universal-cookie'; 

export default function Page() {
    const router = useRouter();
    const pathname = usePathname().split('/');
    const { isOpen, onOpen, onClose } = useDisclosure();

    const cookies = new Cookies();
    const access_user_token = cookies.get('user_token');

    let pdf_id = pathname[4];

    const [chats,set_chats]=useState([]);
    const [is_refresh_data,set_is_refresh_data]=useState('');

    useEffect(()=>{
        fetch_chats()
    },[pathname[4],is_refresh_data])

    const fetch_chats = async()=>{
        const result = await Fetch_Chats(pdf_id,access_user_token)
        set_chats(result)
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
                <BreadcrumbLink onClick={(()=>{router.push(`/dashboard/chats`)})}>chats</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>{pathname[4]}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <Divider/>
        <Box h='93vh' mt='2'>
            <HStack h='100%'>
                <Pdf_Viewer 
                    pdf_id={pdf_id}
                />
                <Chat_Body
                    chats={chats}
                    access_user_token={access_user_token}
                    pdf_id={pdf_id}
                    set_is_refresh_data={set_is_refresh_data}
                    display={{
                        base: "none",
                        md: "unset",
                    }}
                />
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    size={{
                        base:'full'
                    }}
                    bgColor='red'
                     
                >
                    <DrawerOverlay />
                    <DrawerContent>           
                        <DrawerBody>
                            <Chat_Body
                                chats={chats}
                                access_user_token={access_user_token}
                                pdf_id={pdf_id}
                                set_is_refresh_data={set_is_refresh_data}
                                display={{
                                    base: "",
                                    md: "none",
                                }}
                                onClose={onClose}
                            />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
                <CustomToolTip 
                    label='Open chat'
                >
                    <IconButton 
                        aria-label='openchat' 
                        isRound={true}
                        variant='solid'
                        boxShadow={'md'}
                        size='lg'
                        fontSize='28px'
                        align={'center'}
                        onClick={onOpen}
                        bgColor={'#192A51'}
                        color={'#fff'}
                        display={{
                            base: "unset",
                            md: "none",
                        }}
                        position={'fixed'}
                        bottom={'5%'}
                        right={'10%'}
                        icon={<IoIosChatboxes />}
                    />
                </CustomToolTip>
            </HStack>
        </Box>
    </Box>
  )
}
