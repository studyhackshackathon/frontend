'use client'
import Chat_Body from '@/src/components/lib/Chat_Body';
import CustomToolTip from '@/src/components/lib/ToolTip';
import Pdf_Viewer from '@/src/components/lib/pdf_viewer';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Icon, IconButton, Text, useDisclosure } from '@chakra-ui/react'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { IoIosChatboxes } from 'react-icons/io';
import { MdSpaceDashboard } from 'react-icons/md';

export default function Page() {
    const router = useRouter();
    const pathname = usePathname().split('/');
    const { isOpen, onOpen, onClose } = useDisclosure()
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
                    pdf_url='https://firebasestorage.googleapis.com/v0/b/prokemia-file-upload.appspot.com/o/data_sheet%2FFENTACARE%20DHT21%20I%2075.pdf6fca1f28-f4e9-4200-9c19-d357b65593a0?alt=media&token=dd40f71a-bccf-4ec5-a82e-cdc894e7c760'
                />
                <Chat_Body
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
