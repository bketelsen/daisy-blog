type MarkdownInstance = import('astro').MarkdownInstance<any>;
// Which mode is the environment running in? https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
const { MODE } = import.meta.env;

export type Media = {
	title: string,
	slug: string,
	url: URL,
	desc: string,
	host: string,
	participants: string[],
	timestamp: number,
	draft: boolean,
	date: string,
	file: URL,
	img: URL,
	imgWidth: number,
	imgHeight: number,

}

export function single(post: MarkdownInstance): Media {
	const slug = post.file.split('/').reverse()[0].replace('.md', '');
	return {
		...post.frontmatter,
		Content: post.Content,
		slug: slug,
		draft: post.file.split('/').reverse()[1] === 'drafts',
		timestamp: (new Date(post.frontmatter.date)).valueOf()
	}
}

export function published(posts: MarkdownInstance[]): Media[] {
	return posts
		.filter(post => post.frontmatter.title)
		.map(post => single(post))
		.filter(post => MODE === 'development' || !post.draft)
		.sort((a, b) => b.timestamp - a.timestamp)
}



