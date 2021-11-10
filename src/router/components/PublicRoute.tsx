import React from 'react';
import { Route } from 'react-router-dom';

interface PublicRouteProps {
    component: React.FC;
    path: string;
<<<<<<< HEAD
    exact: boolean;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, path, exact }) => {
    const render = () => <Component />;

    return <Route path={path} exact={exact} render={render} />;
=======
}

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, path }) => {
    return <Route path={path} element={<Component />} />;
>>>>>>> master
};

export default PublicRoute;