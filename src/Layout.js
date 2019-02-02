import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import NavigationBar from './components/Nevigationbar/Nevigationbar'


const Wrapper = styled.div`
 width: 100%;
  background: 'gray';
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
`
const Layout = ({ children, history }) => {
  const currentPath = history.location.pathname
  return (
    <Wrapper>
      <NavigationBar currentPath={currentPath} />
      {children}
      <Footer currentPath={currentPath} />
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
  history: PropTypes.shape({
    location: PropTypes.any
  })
}
Layout.defaultProps = {
  children: null,
  history: null
}

export default withRouter(Layout)
