import React from "react";

class Company extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

export default Company;