import React, { Component } from 'react';

class NameField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }
    handleClick = () => {
        // //donot work as it is in the event handler
        if (this.props.selectedKey === 4) {
            // throw new Error('selected wrong options')
            this.setState({
                error: true
            })
        }

        this.props.handleClick(this.props.selectedKey)
    }

    render() {
        const { object } = this.props;
        //console.log("error", this.state.error);
        if (this.state.error === true) {
            throw new Error("selected wrong option")
        }
        return (

            <React.Fragment>
                {object.selected ? (<div onClick={this.handleClick}>selected{object.name}</div>) : (<div onClick={this.handleClick} >{object.name}</div>)}
            </React.Fragment>



        )
    }


}
export default NameField;