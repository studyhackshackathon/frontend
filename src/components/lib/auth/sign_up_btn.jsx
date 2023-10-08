import { Button } from '@chakra-ui/react'
import React from 'react'

export default function Auth_btn(props) {
  const {handleSubmit, children} = {...props}
  return (
    <Button w='full' bg='#8B3C7F' color={'#FFF'} my='4' onClick={handleSubmit}>
        {children}
    </Button>
  )
}