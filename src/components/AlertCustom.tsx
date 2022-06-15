import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react'
interface IAlert {
    handleLogOut: () => void,
    isOpen: boolean,
    onClose: () => void
}

export default function AlertCustom({ isOpen, onClose, handleLogOut }: IAlert) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Are you sure to logout this program?</ModalHeader>
                <ModalCloseButton />

                <ModalFooter>
                    <Button mr={3} onClick={onClose}>
                        No
                    </Button>
                    <Button variant='ghost' colorScheme={'blue'} onClick={handleLogOut}>Yes</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}