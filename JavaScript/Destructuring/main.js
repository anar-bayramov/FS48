const student = {
    name: "Ali",
    age: 20,
    city: "Baku",
    profession: "Developer",
    skills: ["HTML", "CSS", "JavaScript"],
};

const { name, age, profession, country = "Azerbaijan" } = student;
const [skill1, skill2] = student.skills;

console.log(name);
console.log(age);
console.log(profession);
console.log(skill1);
console.log(skill2);
console.log(country);