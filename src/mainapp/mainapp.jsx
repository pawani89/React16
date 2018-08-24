import React, { Component } from 'react';
import Options from '../components/Options';
import axios from 'axios';
import ErrorBoundary from "../errorHandling/errorBoundaries"


class MainApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //  error: false,
            data: [
                {
                    name: "akansha1",
                    age: 20,
                    selected: false
                },
                {
                    name: "akansha2",
                    age: 20,
                    selected: false
                },
                {
                    name: "akansha3",
                    age: 20,
                    selected: false
                },
                {
                    name: "akansha4",
                    age: 20,
                    selected: false
                },
                {
                    name: "akansha5",
                    age: 20,
                    selected: false
                }
            ],
            data2: {}


        };

    }

    componentDidMount = async () => {
        const response = await axios.get('https://reqres.in/api/users/2');
        if (response.data !== undefined) {
            this.setState(
                {
                    data2: [{ ...response.data.data }]
                }
            );
        } else {
        }
    };

    handleClick = (selectedKey) => {

        // if want to select multiple options and deselect respectively
        let selectedM = this.state.data.map((obj, key) => (key === selectedKey ? {
            ...obj,
            selected: !obj.selected
        } : { ...obj }))

        // if want to select single option and deselect respectively
        let selectedS = this.state.data.map((obj, key) => (key === selectedKey ? {
            ...obj,
            selected: !obj.selected
        } : { ...obj, selected: false }))
        this.setState({
            data: [...selectedS]
        })
    }
    render() {
        const { data, clicked } = this.state
        return (
            <React.Fragment>
                <h1>select from the following</h1>
                <ErrorBoundary><Options data={data} handleClick={this.handleClick}></Options></ErrorBoundary>



            </React.Fragment>
        )
    }
};
export default MainApp;