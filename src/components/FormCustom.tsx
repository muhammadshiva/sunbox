import React from 'react'
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input
} from '@chakra-ui/react'

interface IFormCustom {
    title: string,
    type: string,
    customMessage: string
}

const FormCustom = ({ title, type, customMessage }: IFormCustom) => {
    return (
        <FormControl mb={10}>
            <FormLabel htmlFor={type}>{title}</FormLabel>
            <Input id={type} type={type} />
            <FormHelperText>{customMessage}</FormHelperText>
        </FormControl>
    )
}

export default FormCustom