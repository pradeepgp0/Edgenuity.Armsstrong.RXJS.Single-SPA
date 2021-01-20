import React, { Component } from 'react';
import "./App.css";
import { subject, currentSubject } from "./rxjs";

const navigateTo = url => window.history.pushState(null, null, url);

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathname: window.location.pathname,
            count: 0
        }
        
    }

    componentDidMount() {
        currentSubject.subscribe(data => {
            console.log("Observed!")
            if(this.state.count !== data) {
                console.log("Updated!")
                this.setState({...this.state, count: data})
            } else {
                console.log("Not Updated!")
            }
        });
    }

    handleMenuClick = () => {
        this.setState(() => ({ pathname: window.location.pathname }));
    };

    render() {
        return (
            <div className="Menu" onClick={this.handleMenuClick}>
                {this.props.children(this.state.pathname)}
                <p style={{color: "#3BB24B", marginLeft: "30px", marginTop: "50px"}}>Count: {this.state.count}</p>
                <br />
                <button
                    style={{
                        border: "none",
                        borderRadius: "4px",
                        width: "140px",
                        fontSize: "14px",
                        height: "35px",
                        backgroundColor: "#39AD49",
                        color: "#141414",
                        marginLeft: "30px",
                    }}
                    onClick={()=>{ 
                        subject.next(subject.getValue() + 2);
                    }}
                >
                    Increment by 2
                </button><br /><br />
                
                <button
                    style={{
                        border: "none",
                        borderRadius: "4px",
                        width: "140px",
                        fontSize: "14px",
                        height: "35px",
                        backgroundColor: "#39AD49",
                        color: "#141414",
                        marginLeft: "30px",
                    }}
                    onClick={()=>{ 
                        subject.next(subject.getValue() - 2);
                    }}
                >
                    Decrement by 2
                </button><br /><br />
                <button
                    style={{
                        border: "none",
                        borderRadius: "4px",
                        width: "140px",
                        fontSize: "14px",
                        height: "35px",
                        backgroundColor: "#39AD49",
                        color: "#141414",
                        marginLeft: "30px",
                    }}
                    onClick={()=>{ 
                        subject.next(subject.getValue());
                    }}
                >
                    {`Update ${subject.getValue()}`}
                </button>
            </div>
        )
    }
}

const MenuItem = ({ link, children, pathname }) => {
    const classes = ['Menu-Item'];
    if (pathname === link) {
        classes.push('Menu-Item--Selected')
    }
    return (
        <div className={classes.join(' ')} onClick={() => navigateTo(link)}>
            {children}
        </div>
    );
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Single-SPA RXJS Demo APP
                </header>
                <div className="App-content">
                    <Menu className="menuContainer">
                        {(pathname) => (
                            <div>
                                <MenuItem pathname={pathname} link='/'>Main Application</MenuItem>
                            </div>
                        )}
                    </Menu>
                    <div className="App-container">
                        <div className="appFlex">
                            <p style={{ marginLeft: "10px", width: "50%", display: "flex", justifyContent: "center" }}>
                                Data From App 1 <br /><br />{this.state.react1}
                            </p>
                        </div>
                        <div className="appFlex">
                            <div id="react-app" style={{ marginLeft: "10px", width: "50%", display: "flex", justifyContent: "center" }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

