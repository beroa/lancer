class Comment {
	_id: string;
	jobId: string;
	parentId: string;
	authorId: string;
	content: string;
	author: string;
	date_created: Date;
	image: string;
	image_type: string;
	earned: number

	constructor() {
		this.jobId = ""
		this.parentId = ""
		this.content = ""
		this.author = ""
		this.date_created = new Date()
		this.image = ""
		this.image_type = ""
		this.earned = 0
	}
}


export default Comment;