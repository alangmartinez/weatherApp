import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        body: 'Poppins, sans-serif'
    },
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
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

