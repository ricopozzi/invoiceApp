import { Button, ChakraProps, Modal, ModalOverlay, ModalContent, useDisclosure, ModalFooter, ModalCloseButton, ModalBody, ModalHeader, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'

interface DeleteProps extends ChakraProps {
    id?: string
}

export function DeleteButton({id ,...rest}: DeleteProps){
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const deleteInvoice = async () => {
        const response = await axios.delete(`${process.env.API_URL}/${id}`)
        router.push('/')
    }

    return(
        <>
        
        <Button
                    borderRadius="full"
                    w="6rem"
                    h="3rem"
                    colorScheme="red"
                    opacity=".8"
                    display={{base:'none', md:'flex'}}
                    onClick={onOpen}
                    {...rest}
                    >Delete
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent m="auto">
          <ModalHeader
          textAlign="center"
          >Are you shure?</ModalHeader>
          <ModalCloseButton />
          <ModalFooter
          display="flex"
          justifyContent="center"
          >
            <Button colorScheme='red' mr={6}  onClick={deleteInvoice} borderRadius="3xl" >
              Delete
            </Button>
            <Button variant='solid' borderRadius="3xl" onClick={onClose}  >Cancel</Button>
          </ModalFooter>
        </ModalContent>
        </Modal>

        </>
    )
}