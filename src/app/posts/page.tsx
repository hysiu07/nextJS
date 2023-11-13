

export default function Posts({ posts }: any) {
	return <div>Posts</div>;
}
export async function getStaticProps() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
	const posts = await res.json();

	return { props: posts.slice(0, 10) };
}
