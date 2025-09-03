import { Person, Teacher } from "./model/person.ts";

const person: Person = new Teacher("Alice", "Security");
const teacher: Teacher = new Teacher("Bob", "Informatics");

console.log(person.profession());
console.log(teacher.profession());
console.log(teacher.profession());
