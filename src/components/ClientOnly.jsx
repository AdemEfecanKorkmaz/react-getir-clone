import React, { useState, useEffect} from 'react'



const ClientOnly = ({children}) => {
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        setLoaded(true)
    }, [])

    if (!loaded) {
      return null;
    }
  
    return (
        <>
            {children}
        </>
    )
}

export default ClientOnly
