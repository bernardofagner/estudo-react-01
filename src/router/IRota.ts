import { RotasFeatures } from '../common/enums/rotas/RotasExemplo';
import { About } from '../features/About/About';
import { Test } from '../features/Teste/Test';
import { Home } from '../features/home/Home';
import { Index } from '../features/index/index';

export interface IRota {
    pathRota: string;
    component: React.FC<any>;
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
    {
        pathRota: RotasFeatures.Test,
        component: Test,
        name: 'test',
        public: true
    }
];

export { rotas };
