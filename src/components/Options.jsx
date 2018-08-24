import React, { Component } from 'react';
import NameField from '../components/nameField'
import ErrorBoundary from "../errorHandling/errorBoundaries"

class Options extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     error: false
        // }
    }
    handleClick = (key) => {
        // if (key === 4) {
        //     this.setState({
        //         error: true
        //     })
        // }
        this.props.handleClick(key);
    }
    render() {
        const { data } = this.props;
        // if (this.state.error) {
        //     // Simulate a JS error
        //     throw new Error('I crashed!');
        // }
        return (
            data.map((obj, key) => (
                <ErrorBoundary key={key}>
                    <NameField selectedKey={key} object={obj} handleClick={this.handleClick} />
                    <div  >{obj.age}</div>


                </ErrorBoundary >
            )



            ))
    }

}
export default Options;