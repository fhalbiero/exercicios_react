import React from 'react'

export default class Field extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            value: props.initialValue,
            show: ''
        }
        
        this.showValue = this.showValue.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({value : e.target.value})
    }

    showValue() {
        this.setState({show : this.state.value})
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange}/>
                <h1>{this.state.show}</h1>
                <button onClick={this.showValue}>OK</button>
            </div>
        );
    }

}