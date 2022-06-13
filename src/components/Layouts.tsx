import { Box, Container } from '@chakra-ui/react'
import Footer from './Footer'
import Navbar from './Navbar'

interface ILayouts {
    children?: React.ReactNode
}

const Layouts = ({ children }: ILayouts) => {
    return (
        <Box as="main">
            <Navbar />
            <Container maxW={'6xl'}>
                {children}
            </Container>
            <Footer />
        </Box>
    )
}

export default Layouts