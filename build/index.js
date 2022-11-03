"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const theme = (0, react_1.extendTheme)({
    fonts: {
        heading: "Cal Sans",
        drawer: "'Karla', sans-serif",
        body: "'Montserrat', sans-serif",
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
exports.default = theme;
