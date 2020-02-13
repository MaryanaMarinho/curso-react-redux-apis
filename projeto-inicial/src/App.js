import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Mary"
        }
        this.changeState = this.changeState.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    changeState() {
        this.setState({
            name: "Maryana Marinho"
        });
    }

    resetState() {
        this.setState({
            name: "Mary"
        });
    }

    render() {
        return (
            <div className="App">
                <div>
                    <div>
                        {this.state.name}
                    </div>
                    <button onClick={this.changeState}>Mudar estado</button>
                    <button onClick={this.resetState}>Mudar estado</button>
                </div>
            </div>
        );

    }
}

export default App;
