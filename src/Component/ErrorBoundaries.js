import React, {Component} from "react";


class ErrorBoundaries extends Component{
    constructor(props) {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }
    //Children will be anything inside the ErrorBoundaries tags so CardList component

    render() {
        if (this.state.hasError){
            return <h1>Ooops. This is not good</h1>
        }
        return this.props.children
    }
}


//With this errorBoundary component if anything in the CardList fails it will catch it and display our error message
export default ErrorBoundaries;



