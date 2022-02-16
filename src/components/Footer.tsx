import { Box, Flex } from "@chakra-ui/react";
import { DeleteButton } from "./DeleteButton";
import { EditButton } from "./EditButton";


export function Footer({...props}){
    return(
        <Box 
        w="100%"
        h='20vh'
        bg='gray.100'
        alignItems="flex-start"
        justifyContent="center"
        pt="4"
        {...props}
        >
            <Flex 
            w="90%"
            h="60%"
            bg="gray.600"
            display="flex"
            alignItems="center"
            px="4"
            borderRadius="lg"
           
            >
                <DeleteButton display="flex"/>

                <EditButton w="6rem"
                    h="3rem" textColor="white" opacity="1" mr='0' />
               

            </Flex>

        </Box>
    )
}