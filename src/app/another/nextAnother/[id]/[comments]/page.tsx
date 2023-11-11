'use client';

import React from 'react';
import styles from '../../../../page.module.css';
import {
	useParams,
	useRouter,
	useSearchParams,
	usePathname,
} from 'next/navigation';
import Link from 'next/link';
import { useCallback } from 'react';
export default function Comments() {
	const params = useParams();
	console.log(params);
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams()!;

	// Get a new searchParams string by merging the current
	// searchParams with a provided key/value pair
	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams);
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);
	return (
		<div className={styles.main}>
			<h1>Comments: {params.id}</h1>
			<p>last path: {params.comments}</p>
			<button
				onClick={() => {
					// <pathname>?sort=asc
					router.push(pathname + '?' + createQueryString('sort', 'asc'));
				}}
			>
				ASC
			</button>
			<Link
				href={
					// <pathname>?sort=desc
					pathname + '?' + createQueryString('sort', 'desc')
				}
			>
				DESC
			</Link>
			<Link
				href={{
					pathname: pathname,
					query: { name: 'test' },
				}}
			>
				Link z obiektem
			</Link>
		</div>
	);
}
