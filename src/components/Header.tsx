import { Box, Heading, Text } from "@chakra-ui/react"

export function Header(){
    return(
        <Box
         w="100%"
         h={{base:'10vh', md:'9vh'}}
         bg="purple.900"
        >   
            <Heading
            textColor="white"
            display="flex"
            alignItems="center"
            h="100%"
            maxW="10rem"
            ml="4"
            fontWeight="medium"
            letterSpacing={2}
            >
                Invoicy <Text ml="2" mb="2" fontWeight="bold" fontSize="5xl" textColor="green.300">.</Text>
            </Heading>

        </Box>
    )
}