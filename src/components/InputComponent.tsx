import { useEffect, useRef } from 'react'
import { Input, InputProps as ChakraInputProps } from '@chakra-ui/react'
import { useField } from '@unform/core'

interface Props {
    name: string
}

type InputProps =  Props & ChakraInputProps

export function InputComponent({name, ...rest}: InputProps){
    const inputRef = useRef<HTMLInputElement>(null)
    const { fieldName, defaultValue, registerField, error } = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,
            //@ts-ignore
            getValue: ref => {
                return ref.current.value
            },
            setValue: (ref, value) => {
                ref.current.value = value
            },
            clearValue: ref => {
                ref.current.value = ''
            }
        })
    }, [fieldName, registerField])
    
    return(

        <Input as="input" ref={inputRef} defaultValue={defaultValue} {...rest} />
    )
}