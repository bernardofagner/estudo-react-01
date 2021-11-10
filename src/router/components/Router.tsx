import ScrollToTop from "./ScrollToTop";
<<<<<<< HEAD
import { Routes } from 'react-router-dom';
=======
import { Route, Routes } from 'react-router-dom';
>>>>>>> master
import PublicRoute from "./PublicRoute";
import rotas from "../models/Rotas";


const Router: React.FC = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
<<<<<<< HEAD
            {
                Object.values(rotas).map(
                    (rota) => (
                        <PublicRoute
                            key={rota.nome}
                            exact path={rota.pathRota}
                            component={rota.component}
                        />
                    )
                )
            }
=======
                {
                    Object.values(rotas).map(
                        (rota) => (
                            <Route
                                key={rota.nome}
                                path={rota.pathRota}
                                element={<rota.component />}
                            />
                        )
                    )
                }
>>>>>>> master
            </Routes>
        </>
    );
};

export default Router;