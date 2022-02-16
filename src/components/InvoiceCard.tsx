import { Box, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export interface CardProps {
    invoiceDate: string
    toName: string
    invoiceId: string
    dueAmount: number
    status: boolean
}

export function InvoiceCard({ dueAmount, invoiceDate, status, toName, invoiceId }:CardProps){
    const router = useRouter()

    return(

        <Box
         w="90%"
         h={{base:'23vh', md:'10vh'}}
         bg="whiteAlpha.700"
         borderRadius="lg"
         boxShadow="md"
         cursor="pointer"
         transition="220ms"
         _hover={{
            borderColor:"purple.300",
            borderWidth: '1px'
         }}
         p={3}
         display="flex"
         justifyContent="space-between"
         onClick={()=>
            router.push({pathname: `/invoice/[id]`, query: { id: invoiceId} })
         }
        >
            <Box
            w="100%"
            h="100%"
            direction="row"
            display="flex"
            justifyContent={{base:'center', md:'space-beetween'}}
            flexWrap="wrap"
            textColor="gray.500"
            >
                <Box
                w={{base:'45%', md:'20%'}}
                h={{base:'50%', md:'100%'}}
                display="flex"
                alignItems="center"
                justifyContent="center"
                >
                    {invoiceDate}

                </Box>
                <Box
                 w={{base:'45%', md:'20%'}}
                 h={{base:'50%', md:'100%'}}
                 display="flex"
                 alignItems="center"
                 justifyContent="center"
                >
                    {toName}
                </Box>
                <Box
                  w={{base:'45%', md:'20%'}}
                  h={{base:'50%', md:'100%'}}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontWeight="bold"
                  fontSize="xl"
                  textColor="blackAlpha.700"
                >
                    ${dueAmount}

                </Box>
                <Box
                 w={{base:'45%', md:'20%'}}
                 h={{base:'50%', md:'100%'}}
                 display="flex"
                 alignItems="center"
                 justifyContent="center"
                >
                    {status ? 
                        <Box
                            w="xl"
                            h={{base:'70%', md:'60%'}}
                            bg="green.100"
                            borderRadius="lg"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            fontWeight="bold"
                            fontSize=".9rem"
                            textColor="green.500"
                            letterSpacing="wide"
                        > 
                         . Paid
                        </Box> : 
                        <Box
                            w="xl"
                            h={{base:'70%', md:'60%'}}
                            bg="orange.100"
                            borderRadius="lg"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            fontWeight="bold"
                            fontSize=".9rem"
                            textColor="peru"
                            letterSpacing="wide"
                        >
                           . Pending
                        </Box>}

                </Box>
              
            

            </Box>

          
        </Box>
    )
}