import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Projects from './ProjectsComponent';
// import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { PROJECTS } from "../assets/projects";

class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            projects: PROJECTS
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/projects' render={() => <Projects projects={this.state.projects}
                    />} />
                    {/* <Route exact path='/contact' render={() => <Contact resetMessageForm={this.props.resetMessageForm} postMessage={this.props.postMessage} />} /> */}
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </React.Fragment>
        )
    }
}

export default withRouter(Main);