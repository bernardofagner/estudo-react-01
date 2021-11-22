import { Rotas } from './IRotas';

import { RotasAPlicacao } from '../../common/enums/rotas/RotasExemplo';
import About from '../../features/About/About';
import Home from '../../features/Home/Home';
import Index from '../../features/Principal/Principal';

const rotas: Rotas = {
    index: {
        pathRota: '/',
        component: Index,
        nome: 'Rota pagina inicial'
    },
    home: {
        pathRota: RotasAPlicacao.Home,
        component: Home,
        nome: 'Rota exemplo About',
        public: true,
    },
    about: {
        pathRota: RotasAPlicacao.About,
        component: About,
        nome: 'Rota exemplo About',
        public: true,
    },
};

export default rotas;
