import styled from "styled-components"


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
  margin-top: -15px;

  transition: 0.5s ease-in-out;




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
    cursor: pointer;
    
      h3 {
        color: #eee;
        text-align: center;
        align-items: center;
        justify-content: center;
        padding-bottom: 0;
        
        
        &:hover {
          color: #6ffbff;
          }
          
        }
        
        
      }
      
      
      &:hover {
        transform: scale(1.03);
        transition: 0.5s ease-in-out;
        cursor: pointer;
    
  }
`


export { GridItemWrapper }