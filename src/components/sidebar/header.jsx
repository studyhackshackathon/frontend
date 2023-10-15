'use client'
import Image from "next/image";
import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineBell } from "react-icons/ai";
import { Flex, IconButton, Avatar, Icon, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import {BsFolder2Open} from 'react-icons/bs'

export default function Header(props){
    const {user_data} = {...props};
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
            <Popover placement='auto'>
              <PopoverTrigger>
                <IconButton
                  aria-label="Menu"
                  display={{
                      base: "inline-flex",
                      md: "none",
                  }}
                  icon={<AiOutlineBell />}
                  size="sm"
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>
                  <Text fontSize={'sm'} fontWeight={'bold'}>Notifications</Text>
                </PopoverHeader>
                <PopoverBody>
                  <Flex justify={'center'} flexDirection={'column'} align={'center'} h='200px' color='gray.300'>
                    <Icon
                      display={{
                          base: "inline-flex",
                          md: "none",
                      }}
                      as={BsFolder2Open}
                      boxSize="10"
                      cursor={'pointer'}
                      mb='2'
                    />
                    <Text fontSize={'sm'} fontWeight={'bold'}>you dont have any notifications</Text>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Avatar
                size={"sm"}
                name={props?.user_data?.name}
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