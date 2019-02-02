import React from 'react';
import styled from 'styled-components';
import Myresume from '../../assets/Govind.docx'
import MyImage from '../../assets/img/pexels2.jpg'

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
  
  const Resume=styled.a `
  text-decoration:none;
  font-size: 1.5em;
  margin-top: 10px;
  color: black;
  -webkit-font-smoothing: antialiased;
  font-family: Avenir-Black;
  color: gray;
  &:hover {
    color: black;
    text-decoration: none;
  }
  `
  const Image = styled.img `
  border-radius: 100px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height:200px;
  width:200px;
`
const myResume=()=>{
	return(
	<Wrapper>
	<Image src={MyImage} alt="react-boilerplate - Logo"/>
	<Resume target="_blank" href={Myresume}>Download</Resume>
	</Wrapper>
	)
}

export default myResume;