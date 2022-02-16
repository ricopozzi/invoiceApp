import { Button, ChakraProps } from '@chakra-ui/react'

interface EditProps extends ChakraProps {
    id?: string
}

export function EditButton({id,...rest}:EditProps){
    return(
        <Button
        ml="auto"
        mr="4"
        w="5rem"
        borderRadius="full"
        textColor="purple.600"
      
        {...rest}
        >Edit</Button>

    )
}