import React from "react";
import { MediaCard } from "../../common/components/Cards/MediaCard";
import styles from './Home.module.css';

const Home: React.FC = () => {
    return (
        <div className={styles['container']}>
            <h1>
                <MediaCard />
            </h1>
        </div>
    );
};

export default Home;