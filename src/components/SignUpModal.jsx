import { Button, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";

const SignUpModal = ({isOpen, onClose}) => {
    return(
        <Modal isOpen={isOpen} onClick={onClose} isCentered>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Sign Up :</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                </ModalBody>
                <ModalFooter>
                    <HStack spacing={4}>
                        <Button colorScheme='facebook'>Done !</Button>
                        <Button colorScheme='red' onClick={onClose}>Close</Button>
                    </HStack>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
};

export default SignUpModal;