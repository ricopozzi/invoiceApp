import { Box, Button, Container, Heading, Text, VStack, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { AiOutlinePlus } from 'react-icons/ai'
import { InvoiceCard } from '../components/InvoiceCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { CardProps } from '../components/InvoiceCard'
import { NewInvoice } from '../components/NewInvoice'
import { CgClose } from 'react-icons/cg'


interface InvoiceProps {
  id: string
  attributes: CardProps

}

export default function Home(){
  //@ts-ignore
  const [ invoices, setInvoices ] = useState<InvoiceProps>([])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ placement, setPlacement ] = useState('left')
  
  const fetchInvoices = async () => {
    const { data } = await axios.get(`${process.env.API_URL}api/invoices`)
    setInvoices(data.data)
    console.log(invoices)

  }

  useEffect( () => {

    fetchInvoices()

  }, [])

  return(
     <>
      <Header />

     
      <Drawer blockScrollOnMount={true} 
       //@ts-ignore
      placement={placement} onClose={onClose} isOpen={isOpen} size="lg" >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader display="flex" justifyContent="flex-end" >
            <Button size="md" onClick={onClose} colorScheme="purple" ><CgClose /></Button>
          </DrawerHeader>
          <DrawerBody>
            <NewInvoice />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box
      bg="gray.100"
      minH="91vh"
      h="100%"
      w="100%"
      >

        <Container
        maxW={720}
        w="100%"
        h="100%"
        maxH="10vh"
        display="flex"
        justifyContent="space-between"
        pt={8}
        >
          <Box
          h='100%'
          >
            <Heading
            fontWeight="bold"
            >
              Invoices
            </Heading>
            <Text
            mt="2"
            textColor="gray.500"
             //@ts-ignore
            >There are {invoices.length} total invoices</Text>
          </Box>
          
          <Button
           leftIcon={<AiOutlinePlus  />}
           borderRadius="full"
           size="lg"
           colorScheme="purple"
           fontSize="md"
           onClick={onOpen}
          >New Invoice</Button>
          

        </Container>
        <Container
         maxW={900}
         w="100%"
         h="100%"
         minH="12vh"
         display="flex"
         mt={8} 
         
        >
          <VStack
          w="100%"
          display="flex"
          alignItems="center"
          pt={8}
          spacing={5}
          >
           { /*@ts-ignore */}
            {invoices.map(invoice => (
              <InvoiceCard 
              key={invoice.id} 
              dueAmount={invoice.attributes.dueAmount} 
              invoiceDate={invoice.attributes.invoiceDate}
              status={invoice.attributes.status}
              toName={invoice.attributes.toName}
              invoiceId={invoice.id}              
              />
            ))}
          </VStack>

        </Container>
        
      </Box>  
     </>
    )
}