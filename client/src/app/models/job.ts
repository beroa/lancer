class Job {
    title: string;
    description: string;
    date_created: Date;

    constructor() {
        this.title = ""
        this.description = ""
        this.date_created = new Date();
    }
}

export default Job;