'use client'
import React from "react";
// utils
import { Box, Divider, Flex } from "@chakra-ui/react";
// icons
import {MdSpaceDashboard} from 'react-icons/md';
import {BsTextLeft} from 'react-icons/bs';
import {HiOutlineChatAlt2} from 'react-icons/hi';
import {SiGoogleanalytics} from 'react-icons/si';
import {CgProfile} from 'react-icons/cg';
import {GiUpgrade} from 'react-icons/gi';
// components
import Profile_Card from "./profile_card";
import Nav_Item from "./nav_item";
import Footer from "./footer";

export default function Body(props){
    return(
        <Flex
            as="nav"
            pos="fixed"
            borderRadius={'5'}
            left="0"
            zIndex="sticky"
            h="full"
            pb="10"
            px='6'
            overflowX="hidden"
            overflowY="auto"
            bg="#ffffff"
            bordercolor="inherit"
            borderRightWidth="1px"
            w="60"
            direction={'column'}
            justify={'space-between'}
            {...props}
        >
            <Box>
                <Profile_Card/>
                <Divider/>
                {navigations?.map((nav)=>{
                    return(
                        <Nav_Item key={nav?.id} nav={nav}>
                            {nav?.title}
                        </Nav_Item>
                    )
                })}
            </Box>
            <Footer/>
        </Flex>
    )
}

const navigations = [
    {
        id:'1',
        title:'Dashboard',
        path: 'home',
        icon: MdSpaceDashboard,
    },
    {
        id:'2',
        title:'Summaries',
        path: 'summaries',
        icon: BsTextLeft,
    },
    {
        id:'3',
        title:'Chats',
        path: 'chats',
        icon: HiOutlineChatAlt2,
    },
    {
        id:'4',
        title:'Study Analytics',
        path: '',
        icon: SiGoogleanalytics,
    },
    {
        id:'5',
        title:'Profile',
        path: '',
        icon: CgProfile,
    },
    {
        id:'5',
        title:'Pricing',
        path: '',
        icon: GiUpgrade,
    },
]