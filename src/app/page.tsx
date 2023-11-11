
import Link from 'next/link';
import Main from './components/layouts/Main';
export default function Home() {
	return (
		<Main>
			<h1>Witam w NextJS</h1>
			<Link href='/another'>Dalej</Link>
		</Main>
	);
}
