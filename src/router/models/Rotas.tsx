import iconeHome from '../../common/assets/icons/iconeHome.svg';
import { Rotas } from './IRotas';

import { RotasFeatures } from '../../common/enums/rotas/RotasExemplo';
import About from '../../features/About/About';
import { Home } from '../../features/home/Home';

const rotas: Rotas = {
    home: {
        pathRota: RotasFeatures.Home,
        component: Home,
        nome: 'Rota exemplo About',
        // icone: iconeHome,
        public: true,
    },
    about: {
        pathRota: RotasFeatures.About,
        component: About,
        nome: 'Rota exemplo About',
        // icone: iconeHome,
        public: true,
    },
};

export default rotas;
