import React, { Component } from "react";
import Header from "./headerComponent";
import Home from "./homeComponent";

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Home />
            </React.Fragment>
        )
    }
}

export default Main;