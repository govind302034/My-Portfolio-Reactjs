import React, { Component } from 'react';
//import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';

import Welcome from './components/Welcome/Welcome'
import Layout from './Layout'
import Skill from './components/Skill/Skill'
import MyResume from './components/Resume/Resume'
import Aboutme from './components/Aboutme/Aboutme'
import PageNotFound from './components/NotFound/NotFound'

const AppWrapper= styled.div `
 background-size: cover;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  position: fixed;    
`
class App extends Component {
  render() {
    return (
      <div className="App">

       <BrowserRouter>
        <AppWrapper>        
          <Layout>
            <Switch>
              <Route exact path="/" component={Welcome}/>
              <Route path="/skills" component={Skill}/>
			  <Route path="/resume" component={MyResume}/>
			  <Route path="/aboutme" component={Aboutme}/>
			  <Route exact path="*" components={PageNotFound}/>
            </Switch>
          </Layout>
          </AppWrapper>
       </BrowserRouter>
      </div>
    );
  }
}
export default App;
