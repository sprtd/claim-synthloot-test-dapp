import { useState, createContext } from 'react'

export const AccountContext = createContext()


const AccountContextProvider = ({ children }) => {

  const [contract, setContract] = useState()

  const setContractInstance = payload => {
    setContract(payload)

  }

  return(
    <AccountContext.Provider value={{ contract, setContractInstance }}>
      { children }
    </AccountContext.Provider>

  )
}


export default AccountContextProvider