import styled from 'styled-components';


const Wrapper=styled.div `
width: 100%;
  font-family: Avenir;
  -webkit-font-smoothing: antialiased;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  
`
const Reactjs= styled.div `
   border-radius: 25px;
  background: rgba(236, 100, 75, 1);
  padding: 10px; 
  width: 170px;
  text-align:center;
  font-size:20px;
  
&:hover{
  background-color: rgba(241, 231, 254, 1);
  color: black;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
}
`
export {Wrapper,Reactjs}