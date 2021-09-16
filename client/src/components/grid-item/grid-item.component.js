import { useContext, useState } from "react"
import { FunctionContext } from "../../contexts/function-context"
import { AccountContext } from "../../contexts/account-context"
import { GridItemWrapper } from "./grid-item.style"
import { LoadingContext } from "../../contexts/loading-context"
import Loading from "../loading/loading.component"
const GridItem = ({ img, claimId }) => {
  const { contract } = useContext(FunctionContext)
  const { web3Account, handleOwner } = useContext(AccountContext)
  const { isLoading, setLoading } = useContext(LoadingContext)
  const [selectedId, setSelectedId] = useState('')

  // claim
  const claimLoot = async () => {
    try {
      const result = await contract.methods.adoptPet(claimId).send({ from: web3Account })
      console.log('result', result)
      if(result) {
        setLoading(false)
      }
      return result
  
    } catch(err) {
      setLoading(true)
      if(err) {
        setLoading(false)
      }
      console.log(err)
    }
  }
 
  // fetch owner info
  const getSpecificAdopter = async () => {
    try {
      const adoptersResult = await contract.methods.getSpecificAdopter(claimId).call()
      handleOwner(adoptersResult)
    } catch(err) {
      console.log(err)
    }
  }
  


  return (
    <GridItemWrapper>
      <img src={ img } alt=''/>
        <div>
          { isLoading && selectedId === claimId ? <h3> <Loading /> </h3> : 
          <h3 
            onClick={() => {
              setLoading(true)
              setSelectedId(claimId)
              claimLoot().then(result => {
                if(result) {
                  setLoading(false)
                }
                setSelectedId(null)
              }).catch(err =>  {
                console.log(err)
                setLoading(false)
                setSelectedId(null)
              })
            }
          }>Claim</h3> }
          <h3 onClick={ getSpecificAdopter } >Get Owner Info</h3>


        </div>
    </GridItemWrapper>
       
  )
}

export default GridItem
