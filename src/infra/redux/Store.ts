import { configureStore } from '@reduxjs/toolkit';

import HomeReducer from './Home';

export default configureStore({
    reducer: {
        homeReducer: HomeReducer
    }
})

// class Store {

//     public static ConfigureStore = configureStore({
//         reducer: {
//             HomeReducer: HomeReducer
//         }
//     })

//     // public static CofigureStore(): any {
//     //     return configureStore({
//     //         reducer: {
//     //             HomeReducer: HomeReducer
//     //         }
//     //     });
//     // }
// }

// export default Store;