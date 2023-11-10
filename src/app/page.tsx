
import styles from './page.module.css';
import Link from 'next/link';


export default function Home() {
	return (
		<main className={styles.main}>
      <h1>Witam w NextJS</h1>
      <Link href='/another'>Dalej</Link>

		</main>
	);
}
