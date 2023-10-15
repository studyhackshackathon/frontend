"use client"
//utilities
import { Box, Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react"
// components
import Option_Card from "@/src/components/home/option_card";
import Chat_card from "@/src/components/lib/chat_card";
import { useEffect, useState } from "react";
import Cookies from 'universal-cookie'; 
import axios from "axios";
import All_Chats from "@/src/api/chats/fetch_all";
import Summary_card from "@/src/components/lib/summary_card";

export default function Page() {
  const cookies = new Cookies();
    
  const [chats_data,set_chats_data]=useState([]);
  const access_user_token = cookies.get('user_token');
  const user_id = cookies.get('user_id');

  useEffect(()=>{
    get_Chats_Data()
  },[])

  const get_Chats_Data=async()=>{
    await All_Chats(access_user_token).then((response)=>{
        set_chats_data(response?.filter((item)=>item?.user_id.includes(user_id)))
    }).catch((err)=>{
        console.log(err)
    })
  }

  const [summary_data,set_summary_data]=useState([]);
  useEffect(()=>{
    get_Summary_Data()
  },[])
  
    const get_Summary_Data=async()=>{
      let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'https://api-docs-studyhacks-v1.onrender.com/sammary',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `${access_user_token}`,
          },
      };
      await axios.request(config).then((response) => {
          let data = response?.data?.summaries;
          let filteredData = data?.filter((item)=>item?.user_id.includes(user_id))
          set_summary_data(filteredData.reverse().slice(0,2));
      }).catch((error) => {
          console.log(error);
      });
    }
  return (
    <Box bgColor='#fff' borderRadius={'5'} p='2' boxShadow={'sm'}>
      <Flex gap='2' direction={{base:'column',md:'row'}}>
        {optionsArray?.map((option)=>{
          return(
            <Option_Card key={option?.id} option={option}/>
          )
        })}
      </Flex>
      <Box>
        <Text fontWeight={'bold'} py='2'>Recent activity</Text>
        <Divider/>
        <SimpleGrid minChildWidth='250px' spacing='20px' mt='2'>
          {chats_data?.slice(0,8).map((chat)=>{
            return(
              <Chat_card key={chat?._id} chat={chat}/>
            )
          })}
          {summary_data?.slice(0,8).map((item)=>{
            return(
              <Summary_card key={item?._id} item={item}/>
            )
          })}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

const optionsArray = [
  {
    id: 1,
    bodyBg:'#192A51',
    title:'Chat with PDFs',
    description:'Ask and let AI help you understand concepts from documents.',
    buttonbg:'#8B3C7F',
    buttondesc:'Upload File',
    tagradius:'10',
    tagColor:'#273E73',
    tagSize:'100',
    tag2radius:'5',
    tag2Color:'#5578C8',
    tag2Size:'50',
    path:'/dashboard/chats/chat/new'
  },
  {
    id: 2,
    bodyBg:'#967AA1',
    title:'Summarize Text',
    description:'Paste and get appropriate summaries of concepts and text.',
    buttonbg:'#192A51',
    buttondesc:'Paste Text',
    tagradius:'100',
    tagColor:'#8B3C7F',
    tagSize:'100',
    tag2radius:'50',
    tag2Color:'#B051A2',
    tag2Size:'50',
    path:'/dashboard/summaries/summary/new'
  },
]