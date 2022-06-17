import React, { useState } from 'react'
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
import {
    child,
    getDatabase,
    ref,
    set
} from 'firebase/database'
import {
    collection, addDoc, Timestamp
} from 'firebase/firestore'
import { dbFirestore } from '../../../../firebase'
import { initializeApp } from 'firebase/app'
import firebaseConfig from '../../../../firebase/config'
import { connect } from 'react-redux'
import { getStorage, ref as refStorage, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'
import { useNavigate } from 'react-router-dom'

const Project = (props: any) => {
    const myFirebase = initializeApp(firebaseConfig)
    const databaseInit = getDatabase(myFirebase)
    const storageInit = getStorage(myFirebase)
    const { user } = props
    const [titleProject, setTitleProject] = useState<string>("")
    const [descProject, setDescProject] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [imageUpload, setImageUpload] = useState<any>({ name: "" })
    const [skill, setSkill] = useState<string>("")

    const navigate = useNavigate()

    const handleImage = (event: any) => {
        setImageUpload(event.target.files[0])
    }
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleProject(event.target.value)
    }
    const handleDescChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescProject(event.target.value)
    }

    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSkill(event.target.value)
    }

    const handlePriceChange = (value: any) => {
        setPrice(value.target.value)
    }
    const handleNewProject = async () => {
        // with realtime database
        // if (imageUpload === null) return;
        // const imageRef = refStorage(storageInit, `projects/${imageUpload.name + v4()}`)
        // uploadBytes(imageRef, imageUpload)
        // set(ref(databaseInit, `projects/${user.uid}`),
        //     {
        //         user: user.uid,
        //         tille: titleProject,
        //         description: descProject,
        //         price: price,
        //         skill: skill,
        //         uri: imageRef.fullPath
        //     }
        // ).then(() => {
        //     alert('success uploaded')
        //     navigate('/')
        // })
        //with firestore
        try {
            if (imageUpload === null) return;
            const imageRef = refStorage(storageInit, `projects/${imageUpload.name + v4()}`)
            
            await addDoc(collection(dbFirestore, 'projects'), {
                user: user.uid,
                title: titleProject,
                description: descProject,
                price: price,
                skill: skill,
                uri: imageRef.fullPath,
                created: Timestamp.now()
            }
            )
            alert('success uploaded')
            navigate('/')
        } catch(err) {
            alert(err)
        }
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
                <FormControl mb={10}>
                    <FormLabel htmlFor="text">What skills are required?</FormLabel>
                    <Input value={skill} onChange={handleSkillChange} id="price" type="text" />
                    <FormHelperText>cth: HTML5, CSS3, PHP, ReactJS, Javascript, Typescript</FormHelperText>
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

function mapStateToProps(state: any) {
    return {
        user: state.auth.user
    };
}

export default connect(mapStateToProps)(Project);