import React from 'react';
import './Button.css';

export const Button = (props) => {
    let buttonContent=null

    switch(props.btnType){
        case 'primary':
            buttonContent=(<button className="btn btn-primary" onClick={props.clicked} disabled={props.disabled}>{props.children}</button>);
            break;
        case 'default':
            buttonContent=(<button className="btn btn-default" onClick={props.clicked} disabled={props.disabled}>{props.children}</button>)
    }
    return (
        <div>
            {buttonContent}
        </div>
    )
}

export default Button;
