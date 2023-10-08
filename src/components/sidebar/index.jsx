'use client'
import React, { useEffect, useState } from "react";
// components
import Body from "./body";
import Header from "./header";
// utilities 
const { Box, Drawer, DrawerOverlay, DrawerContent, useDisclosure, useToast } = require("@chakra-ui/react");
import Cookies from 'universal-cookie'; 
import { useRouter } from "next/navigation";
import Fetch_User from "../../api/auth/fetch_user.jsx";

export default function Section(props){
    // utilities
    const sidebar_toggle = useDisclosure();
    const toast = useToast();
    const cookies = new Cookies();
    const router  = useRouter();
    // apis
    // data handlers
    const [user_data,set_user_data]=useState({})
	const access_token = cookies.get('user_token');
    const user_id = cookies.get('user_id');


    useEffect(()=>{
        get_data();
    },[user_id]);

    const get_data=async()=>{
        const result = await Fetch_User(user_id,access_token);
        console.log(result)
    }
    
    if(!access_token){
        toast({
            title: "Your token is missing",
            description: '',
            status: 'info',
            isClosable: true,
            position: 'top-left',
            variant:'left-accent'
        });
        router.push('/');
        return ;
    }

    return(
        <Box 
            as="section"
            minH="100vh"
            bgColor={props?.bgColor}
            h={props?.h}
        >
            <Body
                display={{
                    base: "none", // small screen
                    md: "unset", // big screen
                }}
                borderRight="none"
                access_token={access_token}
            />
            <Drawer
                isOpen={sidebar_toggle.isOpen}
                onClose={sidebar_toggle.onClose}
                placement="left"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <Body 
                        w="full" 
                        borderRight="none"
                        display={{
                            base: "unset",
                            md: "none",
                        }}
                        access_token={access_token}
                    />
                </DrawerContent>
            </Drawer>
            <Box
                ml={{
                    base: 0,
                    md: 60,
                }}
                transition=".3s ease"
            >
                <Header sidebar_toggle={sidebar_toggle}/>
                <Box p='2'>
                    {props?.children}
                </Box>
            </Box>
        </Box>
    )
}