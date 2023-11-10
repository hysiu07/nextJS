'use client';
import { useParams, usePathname, useSearchParams } from 'next/navigation';

import { useRouter } from 'next/navigation';
export default function DynamicPage() {
	const params = useParams();
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams()
	console.log(params, ' params');
	console.log(pathname, 'pathname');
	console.log(router);
	console.log(searchParams);
	return (
		<div>
			<h1>Dynamic Page {params.id}</h1>
			<p>Router query : {}</p>
		</div>
	);
}
