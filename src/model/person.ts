export class Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    profession(): string {
        return `${this.getName()} is a person without specific job`;
    }
}

export class Teacher extends Person {
    private subject: string;

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }

    getSubject(): string {
        return this.subject;
    }

    override profession(): string {
        return `${this.getName()} is a teacher teaching ${this.getSubject()}`;
    }
}
