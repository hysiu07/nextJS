import styles from '../../page.module.css';
import Link from 'next/link';
export default function NextAnother() {
	return (
		<div className={styles.main}>
			<h1>NextAnother</h1>
			<Link href='/another/nextAnother/Daniel'>Dynamic Link Daniel</Link>
			<Link href='/another/nextAnother/Eliza'>Dynamic Link Eliza</Link>
			<Link href='/another/nextAnother/Radek'>Dynamic Link Radek</Link>
			<Link href='/another'>Another</Link>
		</div>
	);
}
