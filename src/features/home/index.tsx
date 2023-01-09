import Home from './Home';
import { connect } from 'react-redux';
import IHomeModel from '../../models/home/HomeModel';
import { ReduxDataStatus } from '../../common/enums/redux/ReduxDataStatus';
import {
    setHomeRedux,
    setStatusHomeRedux
} from '../../redux/features/home';

const mapStateToProps = ({ homeStore }: any) => {
    return {
        homeModel: homeStore.homeModelRedux,
        homeModelStatus: homeStore.HomeModelStatusRedux
    };
};

const mapDispatchToProps = {
    setHomeModel: (homeModel: IHomeModel) => setHomeRedux(homeModel),
    setStatusHomeModel: (status: ReduxDataStatus) => setStatusHomeRedux(status)
};

const HomeConectado = connect(mapStateToProps, mapDispatchToProps)(Home);
export { HomeConectado as Home };
