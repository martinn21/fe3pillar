import React from "react";
import {Redirect, Route} from "react-router-dom";
import user from "../auth/user";

export const RoutesAuthenticated = ({component: Component, ...rest}) => {
    return (
        <Route {...rest}
               render={
                   (props) => {
                       if (user.isLoggedIn()) {
                           return <Component {...props} {...rest}/>
                       }
                       return <Redirect to={{
                           pathname: "/app/login",
                           state: { from: props.location }
                       }}/>
                   }
               }
        />
    )
}
