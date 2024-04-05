import React, { createContext, useState } from 'react';

// initiate a context for manager data
export const ManagerContext = createContext();

export const ManagerProvider = ({ children }) => {
    const [manager, setManager] = useState(null);

    // value that will be given to the context
    const value = { manager, setManager };

    return (
        <ManagerContext.Provider value={value}>
            {children}
        </ManagerContext.Provider>
    );
};
