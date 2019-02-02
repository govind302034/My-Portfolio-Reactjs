import React from 'react';
import { withRouter } from 'react-router-dom'
import { GoMarkGithub }  from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import styled from 'styled-components';
import * as Utils from '../Utils/Utils'
import PropTypes from 'prop-types';


const FooterHolder = styled.div`
  width: 95%;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  bottom: 0px;
  left: 0px;
  margin: auto;
  right: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Footer=({currentpath})=>{
    const color=Utils.getFooterColor(currentpath)
    return(
    <FooterHolder>
<a style={{margin:20}} target="_blank" rel="noopener noreferrer" href="#">
    <GoMarkGithub style={{color}} size={30}/>
</a>
<a style={{margin:10}} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/govind-bagla-75ab32b3">
    <FaLinkedin style={{color}} size={30}/>
</a>
    </FooterHolder>       
    )
}

Footer.prototype={
    currentpath:PropTypes.string
}
Footer.defaultprops={
currentpath:null
}

export default withRouter(Footer);