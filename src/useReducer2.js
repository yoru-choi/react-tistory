import React, {useReducer }from 'react';


function reducer(state, action){

  console.log(`action의 name   ->${action.name}`);
  console.log(`action의 value  ->${action.value}`);
    return{
      ...state,
      [action.name]:action.value
    };
}
const App =()=>{

  const [state, dispatch]= useReducer(reducer, {user:'' , nickname:''});
  const {user , nickname} = state;

  const onChange =e=>{
    console.log(e.target);
    dispatch(e.target);
  }
  return (
    <div>
        <input name="user" value={user} onChange={onChange} /> <br />
        <input name="nickname" value={nickname} onChange={onChange} /> <br />
          <b>이름:</b>{user}<br />
          <b>닉네임:</b>{nickname}
    </div>
  );
}

export default App;
