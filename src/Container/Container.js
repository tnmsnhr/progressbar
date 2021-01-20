import React,{Component} from 'react';
import Button from '../Button/Button';
import Progressbar from '../Progressbar/Progressbar';
import './Container.css';

class Container extends Component{

    state={
        progress:0,
        shouldStop:false
    }

    progressHandler = ()=>{
        let interval;
        if(this.state.progress>=100){
            this.setState({progress:0})
        }
        this.setState({shouldStop:false},()=>{
            if(!this.state.shouldStop){
                interval=setInterval(()=>{
                    this.setState({
                        progress: this.state.progress+1
                    })
    
                    if (this.state.progress >= 100 || this.state.shouldStop)
                        clearInterval(interval);
                },100)
            }
        })
    }

    stopProgress = ()=>{
        this.setState({shouldStop:true})
        if(this.state.progress>=100){
            this.setState({progress:0})
        }
    }
    
    render(){
        return (
            <div className="conatiner">
                <Progressbar progress={this.state.progress}/>
                <section className="btn__container">
                    <Button btnType="primary" clicked={this.progressHandler} disabled={this.state.progress!=0 && (!this.state.shouldStop && this.state.progress>0)}>Start</Button>
                    <Button btnType="default" clicked={this.stopProgress}>{this.state.progress>=100? 'Reset':'Pause'}</Button>
                </section>
            </div>
        )
    }
}

export default Container;
