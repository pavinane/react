import React from 'react';

class Task extends React.Component {
    state = {
        text:""
    };
   click = (num) => {this.setState ({text: num })}
//    Click2 = () => {this.setState ({ text: 'two'})}
//    Click3 = () => {this.setState ({text: 'three'})}
   
   render () {
       const { text } = this.state
      return (
            <div className = "button">
                <div className="click">
                    <button className="button" onClick = {() => this.click("one")}>
                        one
                    </button>
                
                    <button className="button" onClick = {() => this.click("two")}>
                        two
                    </button>
                    <button className="button" onClick = {() => this.click("three")}
                    >
                        three
                    </button>
                    <button className="button" onClick = {() => this.click("")}
                    >
                        reset
                    </button>
                </div>
                    <p>{text}</p>
            </div>
      );
   }
}

export default Task;