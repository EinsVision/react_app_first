import React from 'react';
import './App.css';

const data = [
  {
    id: 1,
    title: 'Node',
    value: 0
  },
  {
    id: 2,
    title: 'React',
    value: 1
  }
];

function App() {
  return (
    <div className="App-header">
      Hello React!
      {
        data.map(ele =>(
          <>
            <p key={ele.id}>{ele.title}, {ele.value}</p>
          </>
        ))
      }
    </div>
  );
}

export default App;

//React 장점
// 1. Virtual DOM
// page가 전체가 reload 되는 것은 SPA (single page application)가 아니다.
// DOM가 SPA model이 아닌 경우에 page 전체가 reloading 되어 DOM 객체가 전부다 rendering 된다.
// Rendering : 실제로 web page에 그려지는 것을 뜻한다. 
// 일부 데이터를 새로 나타내기 위해 Page 전체를 reloading 하는 일이 발생한다. 
// Virtual DOM을 사용하면 필요한 부분만 update 되어서 rendering 된다. 사용자가 기다릴 필요가 없다. 즉 선택적으로 update되는 것이다.

// 2. Only View, No MVC
// 경량화 한 것이다.

// 3. Reusable Components
// 원하는 Data를 사용할 수 있도록 Library 형태로 React는 제공된다.
// size를 줄인 library이다. 재사용 가능한 component를 제공한다.

// 4. Hot reloading
// page를 새로고침할 필요없이 코드를 수정하면 web page가 수정이 된다.

// 5. Server Sice Rendering (feat. SEO)
// 검색엔진 최적화 문제를 해결했다. Node.JS에서 page rendering하는 하는 것을 말한다.

