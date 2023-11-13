import React from 'react';

import Link from 'next/link';
type PropsMenuLinkType = {
	href: string;
	name: string;
};

function MenuLink({ href, name }: PropsMenuLinkType) {
	return <Link href={href}>{name}</Link>;
}

export default function Menu() {
	return (
		<div>
			<MenuLink href={'/about'} name={'About'} />
			<MenuLink href={'/home'} name={'Home'} />
			<MenuLink href={'/contact'} name={'Contact'} />
			<MenuLink href={'/posts'} name={'Posts'} />
		</div>
	);
}
