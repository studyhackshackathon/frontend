"use client"
import Action_Button from "@/src/components/lib/new_upload_button";
import Search_Input from "@/src/components/lib/search_input"
import { Box, Divider, Flex, HStack, Heading, Icon, SimpleGrid } from "@chakra-ui/react";
import {MdAdd} from 'react-icons/md';
import {HiOutlineChatAlt2} from 'react-icons/hi';
import Chat_card from "@/src/components/lib/chat_card";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from 'universal-cookie'; 
import All_Chats from "@/src/api/chats/fetch_all";

export default function Page() {
    const cookies = new Cookies();
    
    const [chats_data,set_chats_data]=useState([]);
    const access_user_token = cookies.get('user_token');
    const user_id = cookies.get('user_id');
     
    const [search_query,set_search_query]=useState('');

    useEffect(()=>{
      get_Data()
    },[search_query])
  
    const get_Data=async()=>{
      //console.log(search_query)
      await All_Chats(access_user_token).then((response)=>{
          //console.log(response?.filter((item)=>item?.user_id.includes(user_id) && item?.original_name.toLowerCase().includes(search_query.toLowerCase())))
          set_chats_data(response?.filter((item)=>item?.user_id.includes(user_id) && item?.original_name.toLowerCase().includes(search_query.toLowerCase())))
      }).catch((err)=>{
          console.log(err)
      })
    }
  return (
    <Box bgColor='#fff' borderRadius={'5'} p='4' boxShadow={'sm'}>
      <HStack align='center' p='2'>
        <Icon
            mr="2"
            boxSize="5"
            _groupHover={{
                color: "#fff",
            }}
            as={HiOutlineChatAlt2}
        />
        <Heading fontSize={'xl'}>Chats</Heading>
      </HStack>
      {/**The search section goes here */}
      <HStack>
        <Search_Input description='search files, chats' set_search_query={set_search_query}/>
        <Action_Button
            bgColor='#192A51'
            borderRadius='5'
            color='#fff'
            icon={MdAdd}
            path={'/dashboard/chats/chat/new'}
        >
            New
        </Action_Button>
      </HStack>
      {/**The search section ends here */}
      <Divider/>
      {/**The chats section starts here */}
      <SimpleGrid minChildWidth='250px' spacing='20px' mt='2'>
        {chats_data?.map((chat)=>{
          return(
            <Chat_card key={chat?._id} chat={chat}/>
          )
        })}
      </SimpleGrid>
      {/**The chats card goes here */}
    </Box>
  )
}
