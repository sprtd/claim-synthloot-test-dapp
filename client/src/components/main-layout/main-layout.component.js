import { ContentWrapper, MainLayoutWrapper } from "./main-layout.style"
import GridItem from "../grid-item/grid-item.component"
import { lootItem } from './utils/loot-array'




const MainLayout  = () => {


  return (
   <MainLayoutWrapper>
   
    <ContentWrapper>

      <>
        { lootItem.map((loot) => {
          return <GridItem key={loot.id} loot={loot} />
        })}
      </>
     
    </ContentWrapper>
   </MainLayoutWrapper>
  )
}

export default MainLayout 
