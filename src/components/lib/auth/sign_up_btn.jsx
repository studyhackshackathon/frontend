import { Button } from '@chakra-ui/react'
import React from 'react'

export default function Auth_btn(props) {
  const {handleSubmit, children,is_submitting,title} = {...props}
  if(is_submitting){
    return(
      <Button w='full' isLoading loadingText={title} bgColor='#8B3C7F' color={'#fff'} my='2' cursor={'progress'}></Button>
    )
  }else{
    return (
      <Button w='full' bg='#8B3C7F' color={'#FFF'} my='4' onClick={handleSubmit}> {children} </Button>
    )
  }
}