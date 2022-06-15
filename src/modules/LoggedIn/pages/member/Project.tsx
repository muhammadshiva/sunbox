import React, { useState, useEffect } from 'react'
import { 
    Box, 
    Heading, 
    useColorModeValue, 
    Container, 
    Button, 
    Textarea, 
    FormControl,
    FormLabel,
    FormHelperText,
    Input
} from '@chakra-ui/react'

const Project = () => {
    const [titleProject, setTitleProject] = useState<string>("")
    const [descProject, setDescProject] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [imageUpload, setImageUpload] = useState<string>("")
    const handleImage = (event: any) => {
        setImageUpload(event.target.files[0])
    }
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleProject(event.target.value)
    }
    const handleDescChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescProject(event.target.value)
    }
    const handlePriceChange = (value: any) => {
        setPrice(value.target.value) 
    }
    const handleNewProject = () => {
        console.log(imageUpload)
    }
    return (
        <Box minHeight='full' bg="blue.100" style={{ minHeight: '100vh' }}
            background={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
        >
            <Heading textAlign="center" pt={10}>New Project</Heading>
            <Container p="10" maxW='6xl' mt="10" background={useColorModeValue('white', 'gray.900')}>
                <FormControl mb={10}>
                    <FormLabel htmlFor="title">Choose your project Name</FormLabel>
                    <Input value={titleProject} onChange={handleTitleChange} id="title" type="text" />
                    <FormHelperText>cth: Create Profile Landing Page</FormHelperText>
                </FormControl>
                <Textarea 
                    mb={10} 
                    placeholder='Describe Your Project in Here' 
                    value={descProject}
                    onChange={handleDescChange}
                />
                <FormControl mb={10}>
                    <FormLabel htmlFor="number">Price</FormLabel>
                    <Input value={price} onChange={handlePriceChange} id="price" type="number" />
                    <FormHelperText>cth: Rp. 5000.000,00</FormHelperText>
                </FormControl>
                <Box mb={10}>
                    <label style={{ marginRight: 10 }}>Select image:</label>
                    <input 
                        type="file" 
                        id="img" 
                        name="img" 
                        accept="image/*" 
                        onChange={(event) => handleImage(event)}
                    />
                </Box>
                <Button onClick={handleNewProject}>Create New Project</Button>
            </Container>
        </Box>
    )
}

export default Project