import React, {Component} from 'react';
import './App.css';
import {Link, Route} from "react-router-dom";
import routesConfig from "./routesConfig";

class App extends Component {


    render() {
        return (
            <div>
                <div className="App">
                    <Link to="/">Home</Link>
                    <Link to="/user">User</Link>
                </div>
                {routesConfig.map((value, key) => {
                    return <Route
                        key={key}
                        path={value.path}
                        componet={value.component}
                        exact={value.exact}
                    />
                })}
            </div>
        );

    }
}

export default App;
