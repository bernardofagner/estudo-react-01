import React, { useEffect } from 'react';
import { CustomStore } from '../../config/CustomStore/CustomStore';
import styles from './Index.module.css';

const Index: React.FC = () => {

    useEffect(() => {
        CustomStore.ShowAllItensOnBrowserConsole();
    }, []);
    
    return (
        <div className={styles['container']}>
            <h1>Página inicial antes do login</h1>
        </div>
    );
};

export default Index;
