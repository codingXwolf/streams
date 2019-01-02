import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';


const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                {/* <Route path="/" exact component={PageOne}/> you can duplicate path and itll render on DOM(display onto page) */}
                <Route path="/" exact component={StreamList}/> {/*  exact propoerty equals true. */}
                <Route path="/streams/new" component={StreamCreate}/>
                <Route path="/streams/edit" component={StreamEdit}/>
                <Route path="/streams/delete" component={StreamDelete}/>
                <Route path="/streams/show" component={StreamShow}/>
            </div>
            </BrowserRouter>
        </div>
    )
};

export default App;