import React from 'react';
import {Router, Route, Switch } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
            <div>
                <Header />
                <Switch>
                {/* <Route path="/" exact component={PageOne}/> you can duplicate path and itll render on DOM(display onto page) */}
                <Route path="/" exact component={StreamList}/> {/*  exact propoerty equals true. */}
                <Route path="/streams/new" exact component={StreamCreate}/>
                <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                {/* the Colon is the key. : turn it into a variable of sort */}
                <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                <Route path="/streams/:id" exact component={StreamShow}/>
                </Switch>
            </div>
            </Router>
        </div>
    );
};

export default App;