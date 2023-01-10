import Home from './Home';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ReduxDataStatus } from '../../common/enums/redux/ReduxDataStatus';
import { IHomeModel } from '../../models/home/HomeModel';
import {
    homeActions,
    setHomeRedux,
    setStatusHomeRedux
} from '../../redux/features/home';

// const mapStateToProps = ({ homeStore }: any) => {
//     return {
//         homeModel: homeStore.homeModelRedux,
//         homeModelStatus: homeStore.HomeModelStatusRedux
//     };
// };

// const mapDispatchToProps = {
//     setHomeModel2: (homeModel: IHomeModel) => setHomeRedux(homeModel),
//     setStatusHomeModel: (status: ReduxDataStatus) => setStatusHomeRedux(status)
// };

// // const mapDispatchToProps: any = (dispatch: Dispatch) => {
// //     return {
// //         setHomeModel: (homeModel: IHomeModel) => dispatch(homeActions.setHomeRedux(homeModel)),
// //         setStatusHomeModel: (status: ReduxDataStatus) => setStatusHomeRedux(status)
// //     }
// // }

// const HomeConectado = connect(mapStateToProps, mapDispatchToProps)(Home);
// export { HomeConectado as Home };

export { Home };
