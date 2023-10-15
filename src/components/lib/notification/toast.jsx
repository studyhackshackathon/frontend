import { Box, useToast } from "@chakra-ui/react";
import React from "react";

export default function ShowToast(props){
    const toast = useToast();
    const { title, description, status } = props;
    return toast({
        title: title,
        description: description,
        status: status,
        isClosable: true,
        position: 'top-left',
    })
}