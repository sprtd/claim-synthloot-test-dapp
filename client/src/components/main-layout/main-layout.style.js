import styled from 'styled-components'

const MainLayoutWrapper = styled.main`
  width: 80vw;
  height: 80vh;
  display: flex;
  // border: 1px solid #5ac4be;
  // border: 1px solid #663399;
  // border: 1px solid #9f5afd;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-left: 9vw;

`




const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, ifr );
  // background: red;
  border-radius: 5px;
  
  padding: 5px;
  height: 60vh;
  width: 60vw;
  gap: 10px;

 

`


const GridItemWrapper = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 70%;
  border: 1px solid #663399;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  border-sizing: border-box;

 
  
 

  img {
    height: 70%;
    width: 100%;
    border-radius: 5px 5px 0 0;
    margin-bottom: 5px;
    
  }

  div {
    border: 1px solid #6ffbff;
    border-radius: 5px;
 
    width: 100%;
    // overflow: none;
    cursor: pointer;
    
      h3 {
        // color: #6ffbff;
        color: #eee;
        text-align: center;
        align-items: center;
        justify-content: center;
        padding-bottom: 0;

      }


  }

  
  &:hover {
    transform: scale(1.01);
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

`



export { MainLayoutWrapper, ContentWrapper, GridItemWrapper }