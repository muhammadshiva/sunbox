import { Box, Stack } from '@chakra-ui/react';
import MenuItem from './MenuItem';
interface IMenuLinks {
    isOpen: boolean
}
const MenuLinks = ({isOpen}: IMenuLinks) => {
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
            maxW={"container.lg"}
            m="auto"
            >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}>
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/#about">About</MenuItem>
                <MenuItem to="/#services">services</MenuItem>
                <MenuItem to="/#portfolio">Portfolio</MenuItem>
                <MenuItem to="/#team">Team</MenuItem>
                <MenuItem to="/#contact">Contact</MenuItem>
            </Stack>
        </Box>
    )
}

export default MenuLinks