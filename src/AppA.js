import React from 'react';
import qs from 'qs'

const AppA =({location})=>{

  const query = qs.parse(location.search,{
    depth: 5  //물음표 표시 안보여주기위한 설
  });
  const showQs =query.itzy;
  return (
    <div>
        <h1>Itzy
        {showQs }은 미녀입니다. </h1>
    </div>
  );
}
export default AppA;

/*
app component 부분
import React from 'react';
import {Route , Link} from 'react-router-dom';
import AppA from './AppA';
import AppB from './AppB';
import Profile from  './Profile';
import History from  './History';

const App =()=>{

  return (
    <div>
					<ul>
						<li>
						<Link to="/AppA?itzy=류진">나</Link>
						</li>
						<li>
						<Link to="/history">history 입니다</Link>
						</li>
					</ul>

				<Route path="/AppA" component={AppA}  />
					<Route path="/history" component={History}  />

		</div>
  );
}
export default App;
*/
