import ScrollToTop from "./ScrollToTop";
import { Routes, Route } from 'react-router-dom';
import rotas from "../models/Rotas";


const Router: React.FC = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
            {Object.values(rotas).map(
                    (rota) => (
                        <Route key={rota.nome} path={rota.pathRota} element={<rota.component />} />
                    )
                )
            }
            </Routes>
        </>
    );
};

export default Router;