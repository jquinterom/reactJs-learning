import React, { Component } from "react";
import Dogs from "./Dogs";
import '../App.css'

class Welcome extends Component {
    constructor(props) {
        super(props)

        // My states
        this.state = {
            name: "Jhon",
            last_name: "Quintero",
            age: 26,
            languages: [{ id: 1, name: 'python' }, { id: 2, name: 'php' }]
        }
    }

    // Functions
    sum() {
        this.setState({ ...this.state, age: this.state.age + 1 })
    }

    rest() {
        this.setState({ ...this.state, age: this.state.age - 1 })
    }

    render() {
        return (
            <div>
                <p className="App-intro">Hello <code>{this.state.name + " " + this.state.last_name} </code></p>
                <br />

                <button onClick={() => this.rest()}>-</button>
                {this.state.age}
                <button onClick={() => this.sum()}>+</button>
                <br />

                {
                    // for executing reactJs use {}
                    this.state.languages.map(x => <li key={x.id}>{x.name}</li>)

                }

                <Dogs />

            </div>
        )
    }
}

export default Welcome