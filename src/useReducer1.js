
import React , { useReducer} from 'react';

function reducer(state, action){
	switch(action.type){
    	case 'INCREASE':
        return{ value: state.value +1 };
        case 'DECREASE':
        return{ value: state.value -1 };
        default :
        return state;
    }
}

const App =()=>{

  const [state, dispatch]= useReducer(reducer, {value :0 } ) ;
		return(
        	<div>
  	         데이터값: {state.value}
            	<button onClick={()=>{ dispatch({type:'INCREASE'} ) }} >증가</button>
                <button onClick={()=>{ dispatch({type:'DECREASE'} ) }} >감소</button>

                {console.log(dispatch)}
								{console.log('123')}

					</div>
        );
}

export default App;
