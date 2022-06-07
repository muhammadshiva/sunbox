import { Box, Container } from '@chakra-ui/react'
import Navbar from './Navbar'

interface ILayouts {
    children?: React.ReactNode
}

const Layouts = ({ children }: ILayouts) => {
    return (
        <Box as="main">
            <Navbar />
            <Container maxW="container.lg" >
                {children}
            </Container>
        </Box>
    )
}

export default Layouts