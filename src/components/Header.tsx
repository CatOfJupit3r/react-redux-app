import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.appHeader}>
            <h1>Book Library App</h1>
        </header>
    );
};

export default Header;