import React from "react";
import Logo from './Navigation/Logo';
import MenuLinks from "./Navigation/MenuLinks";
import MenuToggle from "./Navigation/MenuToggle";
import NavBarContainer from "./Navigation/NavBarContainer";
import ToggleLayout from "./Navigation/ToggleLayout";
import { FaUserCircle } from "react-icons/fa";
import {
    Box,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";
import AlertCustom from "./AlertCustom";

const NavBar = (props: any) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [isOpenLog, setIsOpenLog] = React.useState<boolean>(false)
    const { isLoggingOut, logoutError, dispatch, isAuthenticated } = props;
    isLoggingOut && <p>Logging Out....</p>
    logoutError && <p>Error logging out</p>

    const toggle = () => setIsOpen(!isOpen)
    const handleAlert = () => setIsOpenLog(prev => !prev)

    const handleLogOut = () => {
        dispatch(logoutUser())
    }

    return (
        <NavBarContainer  {...props}>
            <Logo w="100px" />
            <MenuLinks isOpen={isOpen} />
            <ToggleLayout />
            <MenuToggle toggle={toggle} isOpen />
            {isAuthenticated &&
                <Box ml={2}>
                    <Menu>
                        <MenuButton
                            aria-label='Options'
                            as={IconButton}
                            icon={<FaUserCircle />}

                        />
                        <MenuList>
                            <Link to="/"><MenuItem>Home</MenuItem></Link>
                            <Link to="/create-project"><MenuItem>Create Project</MenuItem></Link>
                            <MenuItem onClick={handleAlert}>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                    <AlertCustom
                        isOpen={isOpenLog}
                        onClose={handleAlert}
                        handleLogOut={handleLogOut}
                    />
                </Box>
            }

        </NavBarContainer>
    )
}

function mapStateToProps(state: any) {
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError,
        isAuthenticated: state.auth.isAuthenticated,
    };
}

export default connect(mapStateToProps)(NavBar);