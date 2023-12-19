import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box
      display= "flex"
      flexDirection= "column"
      justifyContent= "center"
      alignItems= "center"
      mt={300} 
      border= "1px solid aliceblue;"
      w= {800}
      ml={600}
      borderRadius="0.5rem"
    >
          <Heading
            fontSize = "60px"
            p={4}
          >
            Bienvenido a Taski
          </Heading>
          <Text
          fontFamily= 'Ubuntu'
          pb={2}
          >
            Make your daily tasks 
          </Text>
          <img src='./src/img/taski.png' alt="taski" className='img' />
    </Box>
  )
}
