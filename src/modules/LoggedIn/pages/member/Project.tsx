import { Box, Heading, useColorModeValue, Container, Button, Textarea } from '@chakra-ui/react'
import FormCustom from '../../../../components/FormCustom'

const Project = () => {
  return (
    <Box minHeight='full' bg="blue.100" style={{minHeight: '100vh'}}  
        background={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')} 
        >
        <Heading textAlign="center" pt={10}>New Project</Heading>
        <Container p="10" maxW='6xl' mt="10" background={useColorModeValue('white', 'whatsapp.300')}>
        <FormCustom 
            title='Username'
            customMessage='your identity'
            type='username'
        />
        <FormCustom 
            title='Choose your project Name'
            customMessage='cth: Membuat Website Landing Page'
            type='text'
        />
        <Textarea mb={10} placeholder='Describe Your Project in Here' />
        <FormCustom 
            title='Price'
            customMessage='cth: Rp. 5000.000,00'
            type='number'
        />
        <Box mb={10}>
            <label style={{marginRight: 10}}>Select image:</label>
            <input type="file" id="img" name="img" accept="image/*" />
        </Box>
        <Button>Create New Project</Button>
        </Container>
    </Box>
  )
}

export default Project