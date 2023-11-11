'use client';
import { useParams, usePathname, useSearchParams } from 'next/navigation';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '../../../page.module.css';
export default function DynamicPage() {
	const params = useParams();
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams()
	console.log(params, ' params');
	console.log(pathname, 'pathname');
	console.log(router,'router');
	console.log(searchParams,'searchParams');
	return (
		<div className={styles.main}>
			<h1>Dynamic Page {params.id}</h1>
		
			<Link href={`/another/nextAnother/${params.id}/comments`}>Comment</Link>
		</div>
	);
}
