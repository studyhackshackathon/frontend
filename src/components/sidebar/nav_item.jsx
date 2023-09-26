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
            my='2'
            px="4"
            pl="4"
            py="3"
            cursor="pointer"
            
            _dark={{ color: "gray.400" }}
            _hover={{
                bg: "#D5C6E0",
                _dark: { bg: "gray.900" },
                color: "#fff",
                borderRadius:5,
                fontWeight:'semibold'
            }}
            role="group"
            fontWeight="regular"
            fontSize={'md'}
            transition=".3s ease"

            bgColor={pathname[2] == props?.nav.path ? '#8B3C7F': "#F6F6F6"}
            color={pathname[2] == props?.nav.path ? '#fff': "#000000"}
            borderRadius={pathname[2] == props?.nav.path ? 5: 0}
            boxShadow={pathname[2] == props?.nav.path ? 'lg': null}

            onClick={()=>{router.push(props?.nav.path)}}
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