import {
  Box,
  Heading,
  Flex,
  Text,
  Spacer,
  Center,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <Box>
      <Box width='100%' textAlign='center' display={{ sm: 'block', md: 'none' }} >
        <img src="./img/hero-img.png" alt="sunbox" />
      </Box>
      <Flex gap={5} mt={{ sm: '5%', md: '9%' }} alignItems='center' textAlign={{ base: 'center', sm: 'center', md: 'left' }}>
        <Box maxWidth={{ md: '55%' }}>
          <Heading as='h2' size='xl'>Solusi Terbaik Untuk</Heading>
          <Heading as='h2' size='xl' mt="3" color="#E9C46A">Layanan Freelance</Heading>
          <Text fontSize='md' mt="5">SUNBOX adalah pasar online untuk layanan freelance, Komunitas ini berbasis di Malang, Indonesia, dan menyediakan platform bagi freelancer untuk menawarkan layanan kepada pelanggan di seluruh Indonesia hingga dunia.</Text>
          <Button 
            mt={5} 
            colorScheme="pink"
            onClick={() => navigate('/auth')}
          >Mari Bergabung</Button>
        </Box>
        <Spacer />
        <Box display={{ base: 'none', sm: 'none', md: 'flex' }}>
          <img src="./img/hero-img.png" alt="sunbox" />
        </Box>
      </Flex>
      <Flex mt={20} mb={5} justifyContent="space-between">
        <img width={100} style={{ objectFit: 'contain' }} src="./img/clients/client-1.png" alt="sunbox" />
        <img width={100} style={{ objectFit: 'contain' }} src="./img/clients/client-2.png" alt="sunbox" />
        <img width={100} style={{ objectFit: 'contain' }} src="./img/clients/client-3.png" alt="sunbox" />
        <img width={100} style={{ objectFit: 'contain' }} src="./img/clients/client-4.png" alt="sunbox" />
        <img width={100} style={{ objectFit: 'contain' }} src="./img/clients/client-5.png" alt="sunbox" />
        <img width={100} style={{ objectFit: 'contain' }} src="./img/clients/client-6.png" alt="sunbox" />

      </Flex>
      <Divider mb={20} />
      <Box>
        <Center>
          <Heading as='h3' size='lg' >Tentang Kami</Heading>
        </Center>
        <Text mt={8} textAlign="center">
          SUNBOX adalah pasar online untuk layanan freelance, Komunitas ini berbasis di Malang, Indonesia, dan menyediakan platform bagi freelancer untuk menawarkan layanan kepada pelanggan di seluruh Indonesia hingga dunia. Para inisiator datang dengan konsep pasar yang akan menyediakan platform dua sisi bagi orang-orang untuk membeli dan menjual berbagai layanan digital yang biasanya ditawarkan oleh kontraktor lepas. Layanan yang ditawarkan di situs ini termasuk menulis, terjemahan, desain grafis, pengeditan video dan pemrograman. Layanan SUNBOX mulai dari 30K, dan dapat mencapai hingga Jutaan dengan Talent Profesional ekstra. SUNBOX adalah perusahaan yang dibangun berdasarkan model daftar posisi kerja sementara. Pekerja lepas bekerja di berbagai tempat kerja, mulai dari rumah hingga kantor.
        </Text>
      </Box>
      <Box width='100%' textAlign='center' display={{ sm: 'block', md: 'none' }} >
        <img src="./img/why-us.png" alt="sunbox" />
      </Box>
      <Flex mb={20} gap={5} mt={{ sm: '5%', md: '9%' }} alignItems='center' textAlign={{ base: 'center', sm: 'center', md: 'left' }}>
        <Box maxWidth={{ md: '55%' }}>
          <Heading as='h2' size='xl'>Kenapa Menggunakan</Heading>
          <Heading as='h2' size='lg' mt="3" color="#E9C46A"> Platform Layanan Freelance Kami?</Heading>
          <Accordion defaultIndex={[0]} allowMultiple mt="5" minW="fit-content">
            <AccordionItem>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    <h2 style={{fontWeight: 'bold'}}>Siapa saja yang kami layani ?</h2>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                  <h2 style={{fontWeight: 'bold'}}>Layanan kami apa saja ?</h2>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                  <h2 style={{fontWeight: 'bold'}}>Mekanisme Layanan ?</h2>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Spacer />
        <Box display={{ base: 'none', sm: 'none', md: 'flex' }}>
          <img src="./img/why-us.png" alt="sunbox" style={{maxWidth: 400}} />
        </Box>
      </Flex>
    </Box>
  )
}

export default Home