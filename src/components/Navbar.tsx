import React from "react";
import Logo from './Navigation/Logo';
import MenuLinks from "./Navigation/MenuLinks";
import MenuToggle from "./Navigation/MenuToggle";
import NavBarContainer from "./Navigation/NavBarContainer";
import ToggleLayout from "./Navigation/ToggleLayout";

const NavBar = (props: any) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <NavBarContainer  {...props}>
            <Logo w="100px" />
            <MenuLinks isOpen={isOpen} />
            <ToggleLayout />
            <MenuToggle toggle={toggle} isOpen />
        </NavBarContainer>
    )
}

export default NavBar