import React from "react";
import { Context } from "./Context";

const StoreProvider  = ({ children }) => {
    return(
        <Context.Provider
            value={{
                token,
                setToken,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default StoreProvider;