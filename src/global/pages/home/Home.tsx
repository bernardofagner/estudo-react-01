import React from 'react';
import { TextH1 } from '../../../components/text/TextH1';

interface IHomeProps {
}

const Home: React.FC<IHomeProps> = () => {

    return (
        <div>
            <div>
                <TextH1 text={'Home Page'} />
            </div>

            <div>
                main content
            </div>
        </div>

    );
};

export default Home;