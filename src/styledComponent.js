import React from 'react';
import styled , {css} from 'styled-components';

const Box = styled.div`
	background:${props => props.colorr || 'blue'};
	padding: 1rem;
	display:flex;
	`;


const App =()=>{

  return (
    <div>

 				<Box colorr="green">

				</Box>
		</div>
  );
}
export default App;
