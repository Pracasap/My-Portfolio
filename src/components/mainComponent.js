import React, { Component } from "react";
import Header from "./headerComponent";
import Home from "./homeComponent";
import Footer from "./footerCompoment";

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Home />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Main;