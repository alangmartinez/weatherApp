import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
    },
    colors: {
        black: '#202124',
    },
    fonts: {
        heading: "'Karla', sans-serif",
        drawer: "'Karla', sans-serif",
    }
});


export default theme;

