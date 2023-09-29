"use client"
import Action_Button from "@/src/components/lib/new_upload_button";
import Search_Input from "@/src/components/lib/search_input"
import { Box, Divider, Flex, HStack, Heading, Icon, SimpleGrid } from "@chakra-ui/react";
import {MdAdd} from 'react-icons/md';
import {HiOutlineChatAlt2} from 'react-icons/hi';
import Chat_card from "@/src/components/lib/chat_card";
import { useRouter } from "next/navigation";

export default function Page() {
  let arr = [1,2,3,4,5,6,7,8];
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
        <Search_Input description='search files, chats'/>
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
        {arr?.map((index,item)=>{
          return(
            <Chat_card key={index}/>
          )
        })}
      </SimpleGrid>
      {/**The chats card goes here */}
    </Box>
  )
}
