'use client'
import React from "react";
import { Button, Icon, } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Action_Button(props){
    const router = useRouter();
    return(
        <Button
            bgColor={props?.bgColor}
            borderRadius={props?.borderRadius}
            color={props?.color}
            align='center'
            onClick={()=>{router.push(props?.path)}}
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