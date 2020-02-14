import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Mary",
            email: "mary@email.com",
        };
        this.changeState = this.changeState.bind(this);
        this.resetState = this.resetState.bind(this);
        this.changeInput = this.changeInput.bind(this);
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

    changeInput(event){
        let target = event.target;
        let index = target.name;
        this.setState({
            [index]: target.value
        });
    }

    render() {
        return (
            <div className="App">
                <div>
                    <form>
                        <label> Nome
                            <input type="text" name="name"
                                   value={this.state.name} onChange={this.changeInput}/>
                        </label> <br/>
                        <label>Email
                            <input type="email" name="email"
                                   value={this.state.email} onChange={this.changeInput}/>
                        </label>
                    </form> <br/>
                    <div>
                        {this.state.name} - {this.state.email}
                    </div>
                    <button onClick={this.changeState}>Mudar estado</button>
                    <button onClick={this.resetState}>Reset estado</button>

                </div>
            </div>
        );

    }
}

export default App;
