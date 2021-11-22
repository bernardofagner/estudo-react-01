import React from 'react';
import styles from './Principal.module.css';

const Index: React.FC = () => {
    return (
        <div className={styles['container']}>
            <h1>Página inicial antes do login</h1>
        </div>
    );
};

export default Index;