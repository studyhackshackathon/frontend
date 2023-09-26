'use client'
import React from "react";
import Body from "./body";
import Header from "./header";
const { Box, Drawer, DrawerOverlay, DrawerContent, useDisclosure } = require("@chakra-ui/react");

export default function Section(props){
    const sidebar_toggle = useDisclosure();
    return(
        <Box 
            as="section"
            minH="100vh"
            bgColor={props?.bgColor}
            h={props?.h}
        >
            <Body
                display={{
                    base: "none",
                    md: "unset",
                }}
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