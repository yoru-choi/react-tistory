import React from 'react';
import {post} from 'axios';

function App() {

  const handleFormSubmit =()=>{

        const url = '/api';
        const formData = new FormData();
        formData.append('setOption', '값이거 보냅니다.');
        formData.append('setData', '두개까지 보냅니다.');

        const config ={
          headers:{ 'content-type' : 'multipart/form-data' }}
        return post(url, formData, config);   //axios 적용하는부분
      }

  return (
    <div className="App">

      <form onSubmit={handleFormSubmit}>
        <button type="submit" >보내기 </button>
      </form>

    </div>
  );
}

export default App;
