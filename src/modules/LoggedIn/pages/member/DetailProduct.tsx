import React, {useState, useEffect} from 'react'
import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Layouts from '../../../../components/Layouts';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { dbFirestore } from '../../../../firebase';

export default function DetailProduct() {
    const [projects, setProjects] = useState<any []>([])
    const [project, setProject] = useState([])
    const { projectId } = useParams()
    const getAllProjects = () => {
        const q = query(collection(dbFirestore, 'projects'), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot: any) => {
            let dataProjects:any = []
            querySnapshot.docs.map((doc: any) => {
                dataProjects.push(
                    {...doc.data(), id: doc.id}
                )
            })
            setProjects(dataProjects)
        })    
    }
    useEffect(() => {
        getAllProjects()
    }, [])
    
    const detailProject = projects.find((el: any)=> el.id === projectId)
    let nf = new Intl.NumberFormat('en-US');
    let skillsData = detailProject?.skill
    let skills = skillsData?.split(',')

    return (
        <Layouts>
            <Container maxW={'6xl'}>
                <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 18 }}>
                    <Flex>
                        <Image
                            rounded={'md'}
                            alt={'product image'}
                            src={
                                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                            }
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={{ base: '100%', sm: '400px', lg: '500px' }}
                        />
                    </Flex>
                    <Stack spacing={{ base: 6, md: 10 }}>
                        <Box as={'header'}>
                            <Heading
                                lineHeight={1.1}
                                fontWeight={600}
                                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                                {detailProject?.title}
                            </Heading>
                            <Text
                                color={useColorModeValue('gray.900', 'gray.400')}
                                fontWeight={300}
                                fontSize={'2xl'}
                                mt={4}>
                                Rp. {nf.format(detailProject?.price)}
                            </Text>
                        </Box>

                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={'column'}
                            divider={
                                <StackDivider
                                    borderColor={useColorModeValue('gray.200', 'gray.600')}
                                />
                            }>
                            <VStack spacing={{ base: 4, sm: 6 }}>
                                <Text
                                    color={useColorModeValue('gray.500', 'gray.400')}
                                    fontSize={'2xl'}
                                    fontWeight={'300'}>
                                    Catatan: proyek ini bisa dilakukan dengan tim Anda namun untuk harga sudah sesuai dengan yang ada di atas.
                                </Text>
                                <Text fontSize={'lg'}>
                                    {detailProject?.description}
                                </Text>
                            </VStack>
                            <Box>
                                <Text
                                    fontSize={{ base: '16px', lg: '18px' }}
                                    color={useColorModeValue('yellow.500', 'yellow.300')}
                                    fontWeight={'500'}
                                    textTransform={'uppercase'}
                                    mb={'4'}>
                                    Keahlian yang diperlukan
                                </Text>

                                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                    <List display="flex" alignItems='center' flexWrap='wrap' gap="10">
                                       {skills?.map((item: string, index: number) => (
                                        <>
                                         <ListItem key={index}>{item}</ListItem>
                                         </>
                                       ))}
                                    </List>
                                    {/* <List spacing={2}>
                                     
                                    </List> */}
                                </SimpleGrid>
                            </Box>
                        </Stack>

                        <Button
                            rounded={'none'}
                            w={'full'}
                            mt={8}
                            size={'lg'}
                            py={'7'}
                            bg={useColorModeValue('green.400', 'gray.50')}
                            color={useColorModeValue('white', 'gray.900')}
                            textTransform={'uppercase'}
                            _hover={{
                                transform: 'translateY(2px)',
                                boxShadow: 'lg',
                            }}>
                            Chat Via WhatsApp
                        </Button>
                    </Stack>
                </SimpleGrid>
            </Container>
            <Box mt={10} />
        </Layouts>
    );
}