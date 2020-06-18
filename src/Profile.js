import React from 'react'

const data={
  itzy:{
    name:'류진',
    description:'미녀'
  },
  me:{
    name:'yeol',
    description:'coding slave'
  }
};

const Profile =({match}) =>{

  const {username} = match.params;
  const profile = data[username];
  if(!profile){
    return <div>존재하지않는 사용자입니다.</div>
  }

    return(
          <div>
            <h3>
              이름 {username} description ({profile.description})
            </h3>
          </div>
    )
}

export default Profile;
