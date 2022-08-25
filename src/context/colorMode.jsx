import { useColorMode } from "@chakra-ui/react";
import { createContext } from "react";

export const ColorModeContext = createContext();

const ColorModeContextProvider = ({children}) => {
    const {colorMode, toggleColorMode} = useColorMode();
    
    let isDark = colorMode === 'dark';



    return(
        <ColorModeContext.Provider value={{isDark, toggleColorMode}}>
            {children}
        </ColorModeContext.Provider>
    )
};

export default ColorModeContextProvider;
