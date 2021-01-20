import React from 'react';
import './Progressbar.css';

const Progressbar = (props) => {
    return (
        <div className="progressbar">
            <h1 className="percentage">{props.progress}%</h1>
            <svg className="progressbar__content">
                <circle className="progressbar__content--circle"
                    strokeDasharray={200*Math.PI + " " + 200*Math.PI}
                    strokeDashoffset={200*Math.PI-props.progress/100*(200*Math.PI)}/>
            </svg>
        </div>
    )
}

export default Progressbar;
