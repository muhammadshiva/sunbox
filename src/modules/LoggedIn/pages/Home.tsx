import { Box, Heading, Flex, Text, Spacer } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <Box>
      <Flex gap={5} mt={{ sm: '5%', md: '9%' }} alignItems='center' textAlign={{ base: 'center', sm: 'center', md: 'left' }}>
        <Box maxWidth={{ md: '55%' }}>
          <Heading as='h2' size='xl'>Solusi Terbaik Untuk</Heading>
          <Heading as='h2' size='xl' mt="3" color="#E9C46A">Layanan Freelance</Heading>
          <Text fontSize='md' mt="5">SUNBOX adalah pasar online untuk layanan freelance, Komunitas ini berbasis di Malang, Indonesia, dan menyediakan platform bagi freelancer untuk menawarkan layanan kepada pelanggan di seluruh Indonesia hingga dunia.</Text>
        </Box>
        <Spacer />
        <Box display={{ base: 'none', sm: 'none', md: 'flex' }}>
          <img src="./img/hero-img.png" alt="sunbox" />
        </Box>
      </Flex>

    </Box>
  )
}

export default Home