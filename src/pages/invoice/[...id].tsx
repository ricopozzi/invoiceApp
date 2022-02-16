import { Box, Button, useDisclosure, Container, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Text} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Header } from '../../components/Header'
import { IoIosArrowBack } from 'react-icons/io'
import { CgClose } from 'react-icons/cg'
import { EditButton } from '../../components/EditButton'
import { DeleteButton } from '../../components/DeleteButton'
import { Footer } from '../../components/Footer'
import { EditInvoice } from '../../components/EditInvoice'
import { useEffect, useState } from 'react'


interface EditProps {
    fromName?: string
    fromEmail?: string
    toName?: string
    toEmail?: string
    invoiceDate?: string
    dueAmount?: string
}

export default function InvoicePage({invoice, id}: any){
     //@ts-ignore
    const [ defaulty, setDefaulty ] = useState<EditProps>([])
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const placement = 'left'

    const Fetchy = async () => {
        const { data } = await axios.get(`${process.env.API_URL}api/invoices/${id}`)
        
        return setDefaulty(data.data.attributes)
    }

    useEffect(() => {
        
        Fetchy()

    },[])


    return(
        <>
            <Header />
            <Drawer blockScrollOnMount={true} placement={placement} onClose={onClose} isOpen={isOpen} size="lg" >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerHeader display="flex" justifyContent="flex-end" >
                    <Button size="md" onClick={onClose} colorScheme="purple" ><CgClose /></Button>
                </DrawerHeader>
                <DrawerBody>
                    <EditInvoice 
                    dueAmount={defaulty.dueAmount}
                    fromEmail={defaulty.fromEmail}
                    fromName={defaulty.fromName}
                    toName={defaulty.toName}
                    toEmail={defaulty.toEmail}
                    invoiceDate={defaulty.invoiceDate}
                    id={id}

                    />
                </DrawerBody>
                </DrawerContent>
             </Drawer>
            <Box
            bg="gray.100"
            w="100vw"
            minH="90vh"
            >
             <Container
             minH="100%"
             maxW={800}
             w="100%"
             
             pt={{base:'2vh', md:"10vh"}}
             >
                 <Box as="header" >
                     <Button leftIcon={<IoIosArrowBack color="#600080" />} onClick={()=>{
                         router.push({pathname: '/'})
                     }} >Go back</Button>
                     
                 </Box>
                 <Box 
                 bg="white"
                 h={{base:'14vh', md:'10vh'}}
                 mt="4"
                 borderRadius="lg"
                 boxShadow="md"
                 display="flex"
                 alignItems="center"
                 px={8}
                 textColor="gray.500"
                 >
                    <Text fontSize="sm" textColor="gray.400" >Status</Text>
                    {invoice.status ?
                    <Box
                    w="6rem"
                    h="40%"
                    ml={{base:'auto', md:'10'}}
                    bg="green.100"
                    borderRadius="md"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    textColor="green.400"
                    fontWeight="bold"
                    >Paid</Box>
                    : <Box
                    w="6rem"
                    h="40%"
                    ml={{base:'auto', md:'10'}}
                    bg="orange.100"
                    borderRadius="md"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    textColor="peru"
                    fontWeight="bold"
                    >Pending</Box> }
                    
                    <EditButton 
                    //@ts-ignore
                    onClick={onOpen} id={id} display={{base:'none', md:'flex'}} />
                    <DeleteButton id={id} display={{base:'none', md:'flex'}} />

                 </Box>

                <Box
                minH="23rem"
                w="100%"
                bg="white"
                mt="6"
                borderRadius="lg"
                boxShadow="md"
                p={6}
                display="flex"
                flexDir="column"
                justifyContent="space-beetween"
                >
                    <Flex
                    w="100%"
                    h="40%"
                    flexWrap="wrap"
                    >
                        <Box
                        w={{base:'50%', md:'33%'}}
                        h="5rem"
                        display="flex"
                        flexDir="column"
                        
                        alignItems="center"
                        >
                            <Text h="50%" fontWeight="thin" justifySelf="flex-end">Invoice Date</Text>
                            <Text h="50%" fontWeight="semibold" fontSize="larger" >{invoice.invoiceDate}</Text>

                        </Box>
                        <Box
                       w={{base:'50%', md:'33%'}}
                       minH="5rem"
                       display="flex"
                       flexDir="column"
                       flexWrap="wrap"
                       alignItems="center"
                        >
                            <Text h="50%" fontWeight="thin" justifySelf="flex-end">Bill To</Text>
                            <Text h="50%" fontWeight="semibold" fontSize="medium" textAlign="center" >{invoice.toName}</Text>

                        </Box>
                        <Box
                         w={{base:'100%', md:'33%'}}
                         minH="5rem"
                         display="flex"
                         flexDir="column"
                         flexWrap="wrap"
                         alignItems="center"
                        >
                            <Text h="50%" fontWeight="thin" >Sent To</Text>
                            <Text h="50%" fontWeight="semibold" fontSize="larger" >{invoice.toEmail}</Text>

                        </Box>
                    </Flex>

                    <Flex
                    w="100%"
                    h={{base:'35vh', md:'20vh'}}
                    bg="gray.100"
                    mt="auto"
                    borderRadius="md"
                    >
                        <Box
                        w="100%"
                        h="50%"
                        bg="gray.700"
                        mt="auto"
                        borderBottomRadius="md"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        px="8"
                        >
                            <Text
                            textColor="white"
                            fontWeight="thin"
                            >Amount Due</Text>

                            <Text
                            textColor="white"
                            fontWeight="semibold"
                            fontSize="3xl"
                            >$ {invoice.dueAmount}</Text>

                        </Box>

                    </Flex>

                </Box>
             </Container>

                    
           </Box>
           <Box 
           display={{base:'flex', md:'none'}}
        w="100%"
        h='20vh'
        bg='gray.100'
        alignItems="flex-start"
        justifyContent="center"
        pt="4"
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
                <EditButton 
                //@ts-ignore
                onClick={onOpen} colorScheme='green' w="6rem"
                    h="3rem" textColor="white" opacity="1" mr='0' />
               

            </Flex>

        </Box>
        </>
    )   

}

export async function getServerSideProps(context:any) {
    const { id } = context.query

    const { data } = await axios.get(`http://localhost:1337/api/invoices/${id}`)

    return{
        props: {invoice: data.data.attributes, id}
    }
}