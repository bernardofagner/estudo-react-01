import { Routes, Route } from 'react-router-dom';
import { ScrollToTop } from "./ScrollToTop";
import { rotas } from "./IRota";

const Router: React.FC = () => {
    return (
        <>
            <ScrollToTop />

            <Routes>
                {rotas.map((rota) => (<Route key={rota.name} path={rota.pathRota} element={<rota.component />} />))}
            </Routes>
        </>
    );
};

export { Router };
