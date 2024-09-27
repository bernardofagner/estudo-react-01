import React from "react";

import { StyledContainer } from './Styles';

const PaginaStyledComponent: React.FC = () => {
    
    return (
        <StyledContainer altura={400}>
            <p>Texto dentro de uma styled DIV</p>
        </StyledContainer>
    );
}

export { PaginaStyledComponent };
