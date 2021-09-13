import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './../pages/MainPage';
import About from './../pages/About';
import Contact from './../pages/Contact';
import Portfolio from './../pages/Portfolio';
import Skills from './../pages/Skills';

class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={MainPage} />
                        <Route path="/About" component={About} />
                        <Route path="/Portfolio" component={Portfolio} />
                        <Route path="/Contato" component={Contact} />
                        <Route path="/Habilidades" component={Skills} />
                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}
export default App;