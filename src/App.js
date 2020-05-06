import React, {Component} from 'react';
import './App.scss';
//import ReactCanvasNest from 'react-canvas-nest';
import Homepage from './cps/homepage/homepage'

class App extends Component {

    render() {
        return ( 
            <div className = 'App' >
            <div className = 'logo' > WiSM </div>  
            <Homepage />
            <div className="content content--canvas">
                <h2 className="content__title">Aurora</h2>
            </div>
            </div>
        )
    }
}
export default App;