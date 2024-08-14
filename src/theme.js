import { extendTheme } from '@chakra-ui/react'
import './index.css'

const fonts = {
    logo: `Montserrat`,
    heading: `Prompt`,
    body: `Open Sans`
}

const colors = {
    mainBlue: `#0E1AFB`,
    darkerBlue: `#020887`
}

const theme = extendTheme({ fonts, colors });

export default theme;