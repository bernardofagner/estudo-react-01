import { RotasFeatures } from '../common/enums/rotas/RotasExemplo';
import About from '../features/About/About';
import Home from '../features/home/Home';
import Index from '../features/index/index';

export interface IRota {
    pathRota: string;
    component: React.FC;
    name: string;
    public?: boolean;
}

const rotas: Array<IRota> = [
    {
        pathRota: '/',
        component: Index,
        name: 'index',
        public: true,
    },
    {
        pathRota: RotasFeatures.Home,
        component: Home,
        name: 'home',
        public: true,
    },
    {
        pathRota: RotasFeatures.About,
        component: About,
        name: 'about',
        public: true,
    },
];

export default rotas;