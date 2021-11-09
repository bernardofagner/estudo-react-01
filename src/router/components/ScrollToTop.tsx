import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { withRouter } from "react-router";

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default withRouter(ScrollToTop);