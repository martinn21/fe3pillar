import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from "./Dashboard";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {RoutesAuthenticated} from "./RoutesAuthenticated";
import Login from "./Login";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Route path={'/app/login'}>
                    <Login/>
                </Route>
                <RoutesAuthenticated
                    exact path={'/app/dashboard'}
                    component={Dashboard}
                />
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
