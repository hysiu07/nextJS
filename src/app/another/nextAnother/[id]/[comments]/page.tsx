'use client';
import React from 'react';
import styles from '../../../../page.module.css';
import { useParams } from 'next/navigation';
export default function Comments() {
	const params = useParams();
	console.log(params);
	return (
		<div className={styles.main}>
			<h1>Comments: {params.id}</h1>
			<p>last path: {params.comments}</p>
		</div>
	);
}
