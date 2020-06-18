
import React, {useState} from 'react'
import ColorBox from './ColorBox';
import {ColorProvider , ColorConsumer} from './Color'

const App =()=>{

  return (
        <div>
          <ColorProvider>
          <div>
              <ColorBox />
          </div>

            <ColorConsumer>
              { ({action})=>(<button onClick={()=>{action.setColor('blue') }}>asdf</button>)}
            </ColorConsumer>
          </ColorProvider>
        </div>
      );
}
export default App;
 
