import { RotasFeatures } from '../common/enums/rotas/RotasExemplo';
import { ApiSync } from '../features/ApiSync/ApiSync';
import { CodigoBarras } from '../features/CodigoBarras/CodigoBarras';
import { PaginaStyledComponent } from '../features/PaginaStyledComponet/PaginaStyledComponet';
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
        pathRota: RotasFeatures.CodigoBarras,
        component: CodigoBarras,
        name: 'codigo-barras',
        public: true,
    },
    {
        pathRota: RotasFeatures.ApiSync,
        component: ApiSync,
        name: 'api-sync',
        public: true
    },
    {
        pathRota: RotasFeatures.CodigoBarras,
        component: CodigoBarras,
        name: 'codigo-barras',
        public: true
    },
    {
        pathRota: RotasFeatures.StyledComponent,
        component: PaginaStyledComponent,
        name: 'pagina_styled-component',
        public: true
    }
];

export { rotas };
