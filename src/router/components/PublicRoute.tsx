import React from 'react';
import { Route } from 'react-router-dom';

interface PublicRouteProps {
    component: React.FC;
    path: string;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, path }) => {
    return <Route path={path} element={<Component />} />;
};

export default PublicRoute;