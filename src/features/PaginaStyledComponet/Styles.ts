import styled from 'styled-components';

export const StyledContainer = styled.div<{ altura: number }>`
    margin: 0px;
    padding: 10px;
    border: 1px solid black;
    background-color: green;
    height: ${props => props.altura}px;
`;
