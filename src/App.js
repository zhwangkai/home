import React from 'react';
import './App.scss';
import ReactCanvasNest from 'react-canvas-nest';
class App extends React.Component {
    render() {
        return ( 
          <div className = 'App' > 
          <div className = 'logo' >WiSM</div> 
          <ReactCanvasNest className = 'canvasNest'
            config = {
                {
                    count: 99,
                    pointColor: ' 255, 255, 255',
                    pointR: '0.5',
                    pointOpacity: '0.7',
                    dist: 5000,
                    lineColor: '255, 0, 0',
                    lineWidth: '0.8',
                    follow: true,
                    mouseDist: 15000
                }
            }
            /> < /div > )
    }
}
export default App;