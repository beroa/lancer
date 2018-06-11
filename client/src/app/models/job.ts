class Job {
    title: string;
  	author: string;
    description: string;
    date_created: Date;

    constructor() {
        this.title = ""
        this.description = ""
        this.author = ""
        this.date_created = new Date()
    }

    setAuthor(author: string) {
    	this.author = author;
    }
}


export default Job;