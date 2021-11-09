import ScrollToTop from "./ScrollToTop";
import { Routes } from 'react-router-dom';
import PublicRoute from "./PublicRoute";
import rotas from "../models/Rotas";


const Router: React.FC = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
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
            </Routes>
        </>
    );
};

export default Router;