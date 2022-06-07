import React from "react"
import { Box } from "@chakra-ui/react"
import { FaAlignJustify } from "react-icons/fa"

interface IMenuToggle {
    toggle: () => void,
    isOpen: boolean
}

function MenuToggle({ toggle, isOpen }: IMenuToggle) {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? <FaAlignJustify /> : <FaAlignJustify />}
        </Box>
    )
}

export default MenuToggle