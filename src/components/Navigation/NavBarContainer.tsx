import { Flex, useColorModeValue } from "@chakra-ui/react"

const NavBarContainer = ({ children, ...extraStyles }: any) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bg={useColorModeValue('white', 'gray.900')}
            {...extraStyles}>
            {children}
        </Flex>
    )
}

export default NavBarContainer