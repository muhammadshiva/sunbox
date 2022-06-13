import { Box, Flex, useColorModeValue } from "@chakra-ui/react"

const NavBarContainer = ({ children, ...extraStyles }: any) => {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
        >
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                maxW={'6xl'}
                m="auto"
                w="100%"
                mb={8}
                p={8}
                {...extraStyles}>
                {children}
            </Flex>
        </Box>
    )
}

export default NavBarContainer