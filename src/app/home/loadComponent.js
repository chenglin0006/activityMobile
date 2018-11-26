import Loadable from 'react-loadable'
import React from "react";

const MyLoadingComponent = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return <div style={{fontSize:'0.12rem'}}>Loading...</div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};

const Register =  Loadable({
    loader: () => import('../register/index'),
    loading: MyLoadingComponent
});

export {
    Register
}
