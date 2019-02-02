import React from 'react';
import {Wrapper,HelloWorld,Name,Skill} from './Style';

const Welcome =()=>{
    return(
         <Wrapper>
             <HelloWorld>
                 Hello World;
                 <br/>
                 <br/>
                 {"I'M"}
             </HelloWorld>
             <Name>
                 <b>Govind
                 <br/>
                 Kumar
                 <br/>
                 Bagla
                 </b>
             </Name>
             <br/>
             <Skill>Mobile / Web Developer</Skill>
         </Wrapper>
    )
}

export default Welcome;