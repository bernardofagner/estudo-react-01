import React from 'react';
import { Route } from 'react-router-dom';

interface PublicRouteProps {
    component: React.FC;
    path: string;
    exact: boolean;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, path, exact }) => {
    const render = () => <Component />;

    return <Route path={path} exact={exact} render={render} />;
};

export default PublicRoute;