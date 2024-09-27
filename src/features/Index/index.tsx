import React, { useEffect } from 'react';
import { CustomStore } from '../../config/CustomStore/CustomStore';
import { TituloH4 } from '../../common/cssGlobal/Styles';

import {
    Wrapper
} from './Styled';

const Index: React.FC = () => {

    useEffect(() => {
        CustomStore.ListAllStoragedItems();
    }, []);

    return (
        <Wrapper>
            <TituloH4> Página inicial antes do login </TituloH4>
        </Wrapper>
    );
};

export { Index };
