"use client"
import Action_Button from "@/src/components/lib/new_upload_button";
import Search_Input from "@/src/components/lib/search_input"
import { Box, Divider, HStack, Heading, Icon, SimpleGrid } from "@chakra-ui/react";
import {MdAdd} from 'react-icons/md';
import { BsTextLeft } from "react-icons/bs";
import Summary_card from "@/src/components/lib/summary_card";
import Cookies from 'universal-cookie'; 
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
  const cookies = new Cookies();

    const [summary_data,set_summary_data]=useState([]);
    const access_user_token = cookies.get('user_token');
    const user_id = cookies.get('user_id');

    const [search_query,set_search_query]=useState('');

    useEffect(()=>{
      get_Data()
    },[search_query])
  
    const get_Data=async()=>{
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
          //console.log(data);
          let filteredData = data?.filter((item)=>item?.user_id.includes(user_id))
          set_summary_data(filteredData?.filter((item)=>item?.title.toLowerCase().includes(search_query.toLowerCase())));
          //console.log(filteredData);
      }).catch((error) => {
          console.log(error);
      });
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
            as={BsTextLeft}
        />
        <Heading fontSize={'xl'}>Summaries</Heading>
      </HStack>
      {/**The search section goes here */}
      <HStack>
        <Search_Input description='search summaries' set_search_query={set_search_query}/>
        <Action_Button
            bgColor='#8B3C7F'
            borderRadius='5'
            color='#fff'
            icon={MdAdd}
            path={'/dashboard/summaries/summary/new'}
        >
            New
        </Action_Button>
      </HStack>
      {/**The search section ends here */}
      <Divider/>
      {/**The chats section starts here */}
      <SimpleGrid minChildWidth='250px' spacing='20px' mt='2'>
        {summary_data?.map((item)=>{
          return(
            <Summary_card key={item?._id} item={item}/>
          )
        })}
      </SimpleGrid>
      {/**The chats card goes here */}
    </Box>
  )
}
