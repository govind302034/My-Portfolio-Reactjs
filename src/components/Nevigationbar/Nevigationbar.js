import React , {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import * as Utils from '../Utils/Utils';
import  './Nevigationbar.css';

class Nevigationbar extends Component{
navigate=(history,path)=>{
const currentpath=history.location.pathname
if(currentpath !==path)
    {
    history.push(path)
    }
}
render(){
    const {currentPath}=this.props;
    const history=this.props.history;
    const title= Utils.getBrandName(currentPath)
    const color=Utils.getNevigationColor(currentPath)
    return(
      <Navbar inverse collapseOnSelect fixedTop className="navbar-default" style={{backgroundColor:color}}>
      <div className="container-fluid">
        <Navbar.Header>
          <Navbar.Toggle/>
          <Navbar.Brand>{title}</Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="nav navbar-nav navbar-center">
            <NavItem onClick={()=>{
              this.navigate(history,'/')
            }}
            >Welcome</NavItem>
            <NavItem onClick={()=>{
              this.navigate(history,'/skills')
            }}
            >Skills</NavItem>
            <NavItem onClick={()=>{
              this.navigate(history,'/aboutme')
            }}
            >AboutMe</NavItem>
            <NavItem onClick={()=>{
              this.navigate(history,'/aboutme')
            }}
            >Project</NavItem>
            <NavItem onClick={()=>{
              this.navigate(history,'/resume')
            }} 
            >Resume</NavItem>
          </Nav>
        </Navbar.Collapse>
      </div>
      </Navbar>
      )
}
}

export default withRouter(Nevigationbar);