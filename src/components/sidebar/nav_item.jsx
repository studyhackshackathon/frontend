'use client'
import React from "react";
import {Icon, Flex }from "@chakra-ui/react";
import { usePathname, useRouter } from 'next/navigation'

export default function Nav_Item(props){
    const router = useRouter();
    const pathname = usePathname().split('/');
    return(
        <Flex
            align="center"
            my='4'
            px="4"
            pl="4"
            py="3"
            cursor="pointer"
            role="group"
            fontWeight="regular"
            fontSize={'md'}
            transition=".3s ease"
            _hover={{
                bg: "#D5C6E0",
                color: "#fff",
                borderRadius:5,
                fontWeight:'semibold'
            }}
            
            // functionality to show active navigation item
            bgColor={pathname[2] == props?.nav.path ? '#8B3C7F': "#F6F6F6"}
            color={pathname[2] == props?.nav.path ? '#fff': "#000000"}
            borderRadius={pathname[2] == props?.nav.path ? 10: 10}
            boxShadow={pathname[2] == props?.nav.path ? 'lg': null}

            onClick={()=>{router.push(props?.nav.path)}} // http://localhost:3000/dashboard/summaries
        >
            {props?.nav.icon && (
                <Icon
                    mr="2"
                    boxSize="5"
                    _groupHover={{
                        color: "#fff",
                    }}
                    as={props?.nav.icon}
                />
            )}
            {props?.children}
        </Flex>
    )
}