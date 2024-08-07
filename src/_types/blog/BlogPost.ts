export interface BlogPost {
	id: string;
	title: string;
	date: Date;
	description: string;
	author: string;
	content: string;
	tags: string[];
}

export interface BlogPostInfo {
	blogPost: BlogPost;
	blogpostTeaserImage: string;
}
