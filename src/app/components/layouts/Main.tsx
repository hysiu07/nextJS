import React from 'react';
import Menu from '../Menu';
import styles from '../../page.module.css';
type PropsMainType = {
	children: React.ReactNode;
};

export default function Main({ children }: PropsMainType) {
	return (
		<main className={styles.main}>
			<Menu />
			{children}
		</main>
	);
}
