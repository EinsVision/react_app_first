import React, {useRef} from 'react';
import './App.css';
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";
import { drawMesh } from './Avocado';

function App() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    // Load facemesh
    const runFacemesh = async() =>{
        const net = await facemesh.load({
            inputResolution:{width: 640, height: 480}, scale: 0.8
        });
        setInterval(() => {
            detect(net)
        }, 100)
    };
    // detect function
    const detect = async(net) =>{
        if (
            typeof webcamRef.current !== "undefined" && 
            webcamRef.current !== null && 
            webcamRef.current.video.readyState === 4) {
            
                const video = webcamRef.current.video;
                const videoWidth = webcamRef.current.video.videoWidth;
                const videoHeight = webcamRef.current.video.videoHeight;

                webcamRef.current.video.width = videoWidth;
                webcamRef.current.video.height = videoHeight;

                canvasRef.current.width = videoWidth;
                canvasRef.current.height = videoHeight;

                const face = await net.estimateFaces(video);
                console.log(face);

                const ctx = canvasRef.current.getContext("2d");
                drawMesh(face, ctx);
        }
    }

    runFacemesh();
    return (
        <div className="App-header">
            <Webcam ref={webcamRef} style={
                {
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left:0,
                    right: 0,
                    textAlign: "center",
                    zIndex:9,
                    width: 640,
                    height: 480
                }
            }/>
            <canvas ref={canvasRef} style={
                {
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left:0,
                    right: 0,
                    textAlign: "center",
                    zIndex:9,
                    width: 640,
                    height: 480
                }
            }/>
        </div>
    );
}

export default App;


// const data = [
//   {
//     id: 1,
//     title: 'Node',
//     value: 0
//   },
//   {
//     id: 2,
//     title: 'React',
//     value: 1
//   }
// ];

// function App() {
//   return (
//     <div className="App-header">
//       Hello React!
//       {
//         data.map(ele =>(
//           <>
//             <p key={ele.id}>{ele.title}, {ele.value}</p>
//           </>
//         ))
//       }
//     </div>
//   );
// }

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

//JSX와 Fragment
// React는 모든 것을 view로 본다. JSX : javascript 확장해서 마치 XML 문법 처럼 만든 것을 말한다.
// Fragment: <> </> 

// const Head = props => <h1>{props.title}</h1>

// function App(){
//   return(
//     <>
//       <h1 className='App-link'>Hello</h1>
//       <Head title='This is a title'/>
//       <Head title='React is useful.'/>
//       <Avocado />
//     </>ㅡㅡㅡㅡ
//   );ㅡㅡㅡㅡ
// }ㅡㅡㅡㅡ


// import Avocado from './Avocado';

// const Loading = () => <div>Loading...</div>;

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       loading: true
//     }
//   }
//   comment(){
//     const con = 1;
//     const result = (con > 0) ? true : false; 

//     console.log(result);
//   }

//   render(){
//     const {loading} = this.state;
//     return(
//       <>
//         {
//           loading ? <Loading/> : <div>This is a webpage.</div>
//         }
//       </>
//     );
//   }
// }

//  component life cycle
// class App extends React.Component{
//   constructor(props){
//     super(props)

//   }

//   componentWillMount(){
//     console.log('componentWillMount');
//   }

//   render(){
//     console.log('render');
//     return(
//       <>
//         {

//         }
//       </>
//     )
//   }

//   componentDidMount(){
//     console.log('componentDidMount');
//   }

//   componentWillUnmount(){
//     console.log('componentWillUnmount');
//   }

  
// }