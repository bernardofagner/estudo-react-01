import { createSlice } from '@reduxjs/toolkit';


export const TittleSlice = createSlice({
    name: 'title',
    initialState: {
        title: 'Titulo: Pagina Inicial'
    },
    reducers: {
        ChangeTittle: (state: any, action: any) => {
            state.tittle = action.payload;
        },
        ReturnTittleToDefault: (state) => {
            state.title = 'Titulo: Pagina Inicial';
        }
    }
});

export const {ChangeTittle, ReturnTittleToDefault} = TittleSlice.actions
export default TittleSlice.reducer;

// class HomeStore {

//     private HomeSlice: any;

//     public GetHomeSlice() {

//         return this.HomeSlice = createSlice({
//             name: 'title', //Nome do state
//             initialState: {
//                 title: 'Página Home'
//             },
//             reducers: {
//                 ChangeName: this.ChangeName,
//                 ReturnNameToDefault: (state) => {
//                     state.title = 'estado inicial'
//                 }
//             }
//         });
//     }

//     private ChangeName(state: any, action: any): void {
//         state.title = action.payload
//     }
// }



// const instance = new HomeStore();
// export { instance as HomeStore }