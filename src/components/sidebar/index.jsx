'use client'
import React, { useEffect, useState } from "react";
// components
import Body from "./body";
import Header from "./header";
// utilities 
import  {Box, Drawer, DrawerOverlay, DrawerContent, useDisclosure, useToast } from "@chakra-ui/react" ;
import Cookies from 'universal-cookie'; 
import Fetch_User from "@/src/api/auth/fetch_user";
import {useRouter} from 'next/navigation'

export default function Section(props){
    // utilities
    const sidebar_toggle = useDisclosure();
    const [user_data,set_user_data]=useState({});

    const cookies = new Cookies();
    const toast = useToast();
    const access_user_token = cookies.get('user_token');
    const user_id = cookies.get('user_id');
    const router = useRouter();

    useEffect(()=>{
        Fetch_User(user_id,access_user_token).then((response)=>{
            set_user_data(response?.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[access_user_token,user_id])
    
    try{
        if(!access_user_token){
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
    }catch(error){
        console.error(error)
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
                user_data={user_data}
                access_user_token={access_user_token}
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
                        user_data={user_data}
                        access_user_token={access_user_token}
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
                <Header sidebar_toggle={sidebar_toggle} user_data={user_data}/>
                <Box p='2'>
                    {props?.children}
                </Box>
            </Box>
        </Box>
    )
}