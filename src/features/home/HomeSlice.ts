import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HomeState {
    texto: Array<string>;
    contador: number
}

const initialState = {
    homeState: {
        texto: [''],
        contador: 0
    }
}

export const HomeSlice = createSlice({
    name: 'homeState',
    initialState,
    reducers: {
        incrementarUmaUnidadeNoContador: (state) => {
            state.homeState.contador += 1;
        },
        decrementarUmaUnidadeNoContador: (state) => {
            state.homeState.contador -= 1;
        },
        modificartexto: (state, action: PayloadAction<Array<string>>) => {
            state.homeState.texto = action.payload
        }
    }
});

export const {
    incrementarUmaUnidadeNoContador,
    decrementarUmaUnidadeNoContador,
    modificartexto } = HomeSlice.actions;

export default HomeSlice.reducer;