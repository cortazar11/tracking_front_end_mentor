import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import Tracking from './tracking'; 

const App=()=>{
    return (
        <div>
            <Tracking />
        </div>
    )
}


ReactDOM.render(<App />,document.querySelector('#root'))