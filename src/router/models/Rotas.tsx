import { Rotas } from './IRotas';

import { RotasFeatures } from '../../common/enums/rotas/RotasExemplo';
import About from '../../features/About/About';
import { Home } from '../../features/home/Home';
import Index from '../../features/index';

const rotas: Rotas = {
    index: {
        pathRota: '/',
        component: Index,
        nome: 'Rota pagina inicial'
    },
    home: {
        pathRota: RotasFeatures.Home,
        component: Home,
        nome: 'Rota exemplo About',
        public: true,
    },
    about: {
        pathRota: RotasFeatures.About,
        component: About,
        nome: 'Rota exemplo About',
        public: true,
    },
};

export default rotas;
