import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
    },
    colors: {
        black: '#202124',
        primary: '#23A6F0',
    },
    fonts: {
        heading: "'Montserrat', sans-serif",
        drawer: "'Karla', sans-serif",
        body: "'Montserrat', sans-serif",
    },
    styles: {
        global: {
            body: {
                background: 'url(/images/background.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100%',
                minHeight: '100vh',
            }
        }
    }
});


export default theme;

