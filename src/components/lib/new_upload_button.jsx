'use client'
import React from "react";
import { Button, Icon, } from "@chakra-ui/react";

export default function Action_Button(props){
    return(
        <Button
            bgColor={props?.bgColor}
            borderRadius={props?.borderRadius}
            color={props?.color}
            align='center'
        >
            {props?.icon && (
                <Icon
                    mr="2"
                    boxSize="5"
                    _groupHover={{
                        color: "#fff",
                    }}
                    as={props?.icon}
                />
            )}
            {props?.children}
        </Button>
    )
}