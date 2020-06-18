import React from 'react';
import { Pie, yuan } from 'ant-design-pro/lib/Charts';
// ant 와 'ant-design-pro 가 둘다있어야합니다.

	const salesPieData = [
	  {
	    x: '家用电器',
	    y: 4544,
	  },
	  {
	    x: '食用酒水',
	    y: 3321,
	  },
	  {
	    x: '个护健康',
	    y: 3113,
	  },
	  {
	    x: '服饰箱包',
	    y: 2341,
	  },
	  {
	    x: '母婴产品',
	    y: 1231,
	  },
	  {
	    x: '其他',
	    y: 1231,
	  },
	];


const App =()=>{

  return (
    <div>
		<Pie
hasLegend
title="销售额"
subTitle="销售额"
total={() => (
	<span
		dangerouslySetInnerHTML={{
			__html: yuan(salesPieData.reduce((pre, now) => now.y + pre, 0)),
		}}
	/>
)}
data={salesPieData}
valueFormat={val => <span dangerouslySetInnerHTML={{ __html: yuan(val) }} />}
height={294}
/>
		</div>
  );
}
export default App;
