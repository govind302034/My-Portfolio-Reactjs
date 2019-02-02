import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-family: Avenir;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Div = styled.div`
  font-family: Avenir;
  width: 60%;
  @media (max-width: 766px) {
    width: 85%;
    height: 75%;
    font-family: Avenir;
    overflow: scroll;
    overflow-x: hidden;
  }
`

const AboutMe = () => (
  <Wrapper>
    <Div>
      <p>
        Hey My Name is Govind Kumar Bagla
      </p>
    </Div>
  </Wrapper>
)

export default AboutMe
