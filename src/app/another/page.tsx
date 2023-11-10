import styles from '../page.module.css';
import Link from 'next/link';

export default function Another() {
	return (
		<div className={styles.main}>
			<h1>Another Side</h1>
			<Link href='/another/nextAnother'>Dalej</Link>
			<Link href='/'>Cofnij</Link>
		</div>
	);
}
