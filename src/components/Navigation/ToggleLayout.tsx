// import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, Stack, useColorMode } from '@chakra-ui/react';
import { BsSunFill, BsFillMoonFill } from "react-icons/bs"
const ToggleLayout = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Stack direction={'row'} spacing={7}>
            <Button onClick={toggleColorMode}>
                {colorMode === 'dark' ? <BsFillMoonFill /> : <BsSunFill />}
            </Button>
        </Stack>
    )
}

export default ToggleLayout