import React from 'react';
import { Route } from 'react-router-dom';

interface PublicRouteProps {
    component: React.FC;
    path: string;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, path }) => {
    // const render = () => <Component />;

    // return <Route path={path} render={render} />;
    return (
        <div></div>
    );
};

export default PublicRoute;