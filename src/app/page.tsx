'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Main from './components/layouts/Main';
export default function Home() {
	const [name, setName] = useState();
	useEffect(() => {
		fetch('http://localhost:3000/api/hello')
			.then((res) => res.json())
			.then((data) => setName(data.name));
	}, []);
	return (
		<Main>
			<h1>Witam w NextJS</h1>
			<Link href='/another'>Dalej</Link>
			<p>{name}</p>
		</Main>
	);
}
