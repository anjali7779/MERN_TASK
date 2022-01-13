// import React from 'react'
import React  from 'react';
// import ReactDOM from 'react-dom';
import {Redirect, Route} from 'react-router-dom';
const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={
                (props) => 
                // {
                    localStorage.getItem("authToken") ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to="/login" />
                    )
            // }
            }
         />
    );
};

export default PrivateRoute;
