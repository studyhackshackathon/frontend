'use client'
import Image from "next/image";
import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineBell } from "react-icons/ai";
import { Flex, IconButton, Avatar, Icon } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Header(props){
   const router = useRouter();
    return(
      <Flex
        as="header"
        w="full"
        px="4"
        bg="white"
        display={{
            base: "inline-flex",
            md: "none",
        }}
        color="inherit"
        h="14"
        justify={'space-between'}
        align={'center'}
      >
          <Image
            width='100'
            height='80'
            style={{marginTop:'-20'}}
            src='/assets/logo.png'
            alt='logo'
            objectFit="cover"
            onClick={()=>{router.push(`/dashboard/home`)}}
          />
          <Flex gap='2' align='center'>
            <Icon
              display={{
                  base: "inline-flex",
                  md: "none",
              }}
              as={AiOutlineBell}
              boxSize="5"
              cursor={'pointer'}
            />
            <Avatar
                size={"sm"}
                name='john doe'
                src=''
            />
            <IconButton
              aria-label="Menu"
              display={{
                  base: "inline-flex",
                  md: "none",
              }}
              onClick={props?.sidebar_toggle.onOpen}
              icon={<MdOutlineMenu />}
              size="sm"
            />
          </Flex>
      </Flex>
    )
}