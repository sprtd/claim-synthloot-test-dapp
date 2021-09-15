import { GridItemWrapper } from "./grid-item.style"
const GridItem = ({ loot }) => {

  console.log('this is the loot', loot)
  return (
    <GridItemWrapper>
      <img src={ loot.img } alt=''/>
        <div>
          <h3>Claim</h3>
        </div>
    </GridItemWrapper>
       
  )
}

export default GridItem
