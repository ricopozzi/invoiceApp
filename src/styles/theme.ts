import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles:{
        global:{
            'html, body':{
                textColor:"gray.900",
                bg:'white'
            }
        }
    },

    fonts:{
        heading: 'Source Sans Pro',
        body: 'Source Sans Pro'

    }
})