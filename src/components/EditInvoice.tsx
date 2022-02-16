import { Box, Button, ChakraProps, FormControl, FormLabel, Heading, Input, NumberInput, NumberInputField } from "@chakra-ui/react";
import { Form } from '@unform/web'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useEffect, useState } from "react";

interface EditProps extends ChakraProps {
    fromName?: string
    fromEmail?: string
    toName?: string
    toEmail?: string
    invoiceDate?: string
    dueAmount?: string
    id?: string
}

export function EditInvoice({ dueAmount, fromEmail, fromName, invoiceDate, toEmail, toName, id }:EditProps){
    const [ defaulty, setDefaulty ] = useState([])
    const { register, handleSubmit } = useForm({
        defaultValues: {
            fromName,
            fromEmail,
            toName,
            toEmail,
            invoiceDate,
            dueAmount
        }
    })

    const submitForm = async (data:object) => {
         const response = await axios.put(`${process.env.API_URL}api/invoices/${id}`, { data: data})
        
        return console.log(response)
    }
    
    return(
        <>
            <Box
            w="100%"
            h="100vh"
            bg="blackAlpha.600"
            zIndex={1}
            overflow="auto"
            >
                <Box
                h="100%"
                w={{base:'100%', md:'100%'}}
                bg='white'
                p={8}
                >
                    <Heading
                    mb="4"
                    fontWeight="medium"
                    fontSize="3xl"
                    >New Invoice</Heading>
                    <FormControl as={Form} onSubmit={handleSubmit(submitForm)} >

                        <FormLabel
                        fontWeight="semibold"
                        textColor="purple.400"
                        >Bill From</FormLabel>
                        <FormLabel mt="4" fontWeight="thin" >Name</FormLabel>
                        <Input type="text" {...register("fromName")} required errorBorderColor="red.300" 
                       />

                        <FormLabel mt="4" fontWeight="thin" >Email</FormLabel>
                        <Input type="email" {...register("fromEmail")} required errorBorderColor="red.300"
                        
                        />

                        <FormLabel
                        fontWeight="semibold"
                        textColor="purple.400"
                        mt="4"
                        >Bill To</FormLabel>

                        <FormLabel mt="4" fontWeight="thin" >Name</FormLabel>
                        <Input  type="text" {...register("toName")} required errorBorderColor="red.300"
                       
                        />

                        <FormLabel mt="4" fontWeight="thin" >Email</FormLabel>
                        <Input type="email" {...register("toEmail")} required errorBorderColor="red.300"
                        />

                        <FormLabel mt="4" fontWeight="thin" >Invoice Date</FormLabel>
                        <Input type="date" {...register("invoiceDate")} required errorBorderColor="red.300"
                        
                        />

                        <FormLabel mt="4" fontWeight="bold" textColor="purple.400">Invoice Value</FormLabel>
                        <NumberInput precision={2} >
                            <NumberInputField type="number" {...register("dueAmount")} required errorBorderColor="red.300"
                            
                            />
                        </NumberInput>
                       

                        <Button mt="4" type="submit" colorScheme="purple"
                        onClick={() => (
                            document.location.reload()
                        )}
                        >submit</Button>
                    </FormControl>

                </Box>

            </Box>
        </>
    )
}