import { useContext, useEffect } from "react"
import { ContentWrapper, MainLayoutWrapper } from "./main-layout.style"
import GridItem from "../grid-item/grid-item.component"
import { lootItem } from './utils/loot-array'
import { getWeb3 } from "../../utils/getWeb3"
import { AccountContext } from '../../contexts/account-context'

import ClaimContract from '../../abi/PetShop.json'
import { FunctionContext } from "../../contexts/function-context"
import { LoadingContext } from "../../contexts/loading-context"





const MainLayout  = () => {
  const { setAccountDetails, lootOwner } = useContext(AccountContext)
  const { setContractInstance } = useContext(FunctionContext)
  const{ setLoading } = useContext(LoadingContext)

  const enableWeb3 = async () => {
    try {
      const web3  = await getWeb3()
      const accounts = await web3.eth.getAccounts()
      console.log('this is account', accounts)
      setAccountDetails(accounts[0])

      const networkId = await web3.eth.net.getId()
      console.log(networkId)
      const deployedNetwork = await ClaimContract.networks[networkId]
        const claimContractInstance = await new web3.eth.Contract(ClaimContract.abi, deployedNetwork && deployedNetwork.address)
        
        setContractInstance(claimContractInstance)

    } catch(err) {
      console.log(err)
    }
  }


 

  useEffect(() => {
    enableWeb3()
    setLoading(false)
  
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
   <MainLayoutWrapper>
      {/* <h3>{ lootOwner ? lootOwner : null }</h3> */}
    <ContentWrapper>

      <>
        { lootItem.map((loot) => {
          return <GridItem key={loot.id} {...loot} />
        })}
      </>
     
    </ContentWrapper>
   </MainLayoutWrapper>
  )
}

export default MainLayout 
