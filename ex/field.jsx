import React from 'react'

export default class Field extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            value: props.initialValue
        }
        
        this.showValue = this.showValue.bind(this);
    }

    showValue() {
        this.setState({ value : this.props.value });
    }

    render() {
        return (
            <div>
                <input/>
                <h1>{this.state.value}</h1>
                <button onClick={this.showValue}>{this.props.value}</button>
            </div>
        );
    }

}