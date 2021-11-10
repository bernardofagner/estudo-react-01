import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
<<<<<<< HEAD
import { withRouter } from "react-router";
=======
>>>>>>> master

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

<<<<<<< HEAD
export default withRouter(ScrollToTop);
=======
export default ScrollToTop;
>>>>>>> master
