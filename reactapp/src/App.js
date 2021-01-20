import React, { Component } from 'react';
import './styles/bootstrap/bootstrap.min.css';
import './index.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: props.subject,
      currentSubject: props.currentSubject,
      count: 0
    };
  }

  componentDidMount() {
      this.props.currentSubject.subscribe(data => {
          this.setState({...this.state, count: data})
      });
  }

  render() {
    return (
      <div>
        <p style={{margin: "0 0 20px 20px"}}>Count is {this.state.count}</p>
          <button
            style={{
              border: "none",
              borderRadius: "4px",
              width: "140px",
              fontSize: "14px",
              height: "35px",
              backgroundColor: "#212C32",
              color: "#d8d8d8",
              marginLeft: "15px",
            }}
            onClick={()=>{ 
                 this.state.subject.next(this.state.subject.getValue() + 1);
              }}
          >
              Increment
          </button>
          <button
              style={{
                border: "none",
                borderRadius: "4px",
                width: "140px",
                fontSize: "14px",
                height: "35px",
                backgroundColor: "#212C32",
                color: "#d8d8d8",
                marginLeft: "15px",
            }}
            onClick={()=>{ 
                 this.state.subject.next(this.state.subject.getValue() - 1);
              }}
          >
              Decrement
          </button>
      </div>
    );
  }
}

export default App;

