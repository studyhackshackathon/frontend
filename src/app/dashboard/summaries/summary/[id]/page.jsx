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
import React from 'react'
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { IoIosChatboxes, IoMdArrowDropdown } from 'react-icons/io';
import { MdSpaceDashboard } from 'react-icons/md';
import { BiRefresh } from 'react-icons/bi';

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
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>summaries</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>{pathname[4]}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <Divider/>
        <Box h='93vh' mt='2'>
            <Accordion_Card/>
            <HStack mt='2'>
                <Button bgColor={'#8B3C7F'} color='#FFFFFF'>
                    Save
                </Button>
                <Button leftIcon={<BiRefresh />} variant='solid'>
                    Regenerate
                </Button>
            </HStack>
            <Text my='2'>Your Summary</Text>
            <Text p='2' bgColor='#D5C6E0' borderRadius={'5'} boxShadow={'md'}>
                This paper discusses the implementation of a fluid dynamics solver for game engines. The goal is to include fluid flows in game engines to enhance immersion. The focus is on creating realistic fluid-like effects in real-time. The algorithms are based on the Navier-Stokes equations and prioritize stability and speed over strict physical accuracy. The paper provides a complete C code implementation and demonstrates the algorithms running in real time on standard PC hardware. In Chapter 1, the paper covers the overview of the concepts discussed in this paper as well as an introduction to the concept of fluid dynamics. It covers the basics of how the solver is implemented and discusses some of the most important design decisions such as which extension to implement and how it can be used to simulate different phenomena. This chapter continues with a discussion of the specific problems that the study addresses in order to demonstrate the performance and ease of use of the solution.
            </Text>
        </Box>
    </Box>
  )
}

const Accordion_Card=()=>{
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
                <AccordionPanel pb={4} bg={'#AAA1C8'} borderRadius={'5'} fontWeight={'semibold'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}