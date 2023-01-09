import Home from './Home';
import { connect } from 'react-redux';
import { ReduxDataStatus } from '../../config/ReduxStore/ReduxStore';
import IHomeModel from '../../models/home/HomeModel';

const mapStateToProps = ({ manutencaoLog }: any) => {
    return {
        // listaManutencoesEstruturaisLogDestaque: manutencaoLog.listaManutencoesEstruturaisLogDestaqueRedux
    };
};

const mapDispatchToProps = {
    // setListaManutencoesEstruturaisLogDestaque: (listaDestaque: Array<IManutencaoEstruturalLogModel>) => setListaManutencoesEstruturaisLogDestaqueRedux(listaDestaque)
    
};
