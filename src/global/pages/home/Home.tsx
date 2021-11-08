import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextH1 from '../../../components/text/TextH1';
import { ChangeTittle, ReturnTittleToDefault } from '../../../infra/redux/Home';

interface IHomeProps {
}

const Home: React.FC<IHomeProps> = () => {

    const title = useSelector((state)=> state.homeReducer.title); //Import explicito
    // const { title } = useSelector((state)=> state.HomeReducer); //Import por desestruturação

    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <TextH1 text={title} />
            </div>

            <div>
                main content
            </div>

            <button onClick={() => dispatch(ChangeTittle('Titulo modificado'))}>Mudar titulo</button>
            <button onClick={() => dispatch(ReturnTittleToDefault())}>Retornar titulo ao normal</button>
        </div>
    );
};

export default Home;