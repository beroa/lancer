class Comment {
	jobId: string;
	parentId: string;
	content: string;
	author: string;
	date_created: Date;

	constructor() {
		this.jobId = ""
		this.parentId = ""
		this.content = ""
		this.author = ""
		this.date_created = new Date()
	}
}


export default Comment;