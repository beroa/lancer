class Job {
	_id: string;
	title: string;
	author: string;
	description: string;
	date_created: Date;
	address: string;

	constructor() {
		this._id = ""
		this.title = ""
		this.description = ""
		this.author = ""
		this.date_created = new Date()
		this.address = ""
	}

	setAuthor(author: string) {
		this.author = author;
	}
}

export default Job;