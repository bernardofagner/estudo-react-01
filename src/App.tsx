import React from 'react';
import './App.css';

import Home from './global/pages/home/Home';
// import About from './global/pages/about/About';

const App = () => {

    const homePage = () => {
        return (
            <div>
                <Home />
            </div>
        );
    };

    // const aboutPage = () => {
    //     return (
    //         <div>
    //             <About />
    //         </div>
    //     );
    // };

    return (
        homePage()
    );
}

export default App;
