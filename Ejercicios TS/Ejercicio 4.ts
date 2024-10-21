interface Student {
  name: string,
  age: number,
  occupation: string,
}

type Criteria = { [key: string]: string | number };

const students: Student[] = [
  {
    name: "Luke Patterson",
    age: 32,
    occupation: "Internal auditor",
  },
  {
    name: "Emily Coleman",
    age: 25,
    occupation: "English",
  },
  {
    name: "Alexandra Morton",
    age: 35,
    occupation: "Conservation worker",
  },
  {
    name: "Bruce Willis",
    age: 39,
    occupation: "Placement officer",
  },
];


const filterStudentsBy = (students: Student[], criteria: Criteria): Student[] => {
  return students.filter((student) => {
    const criteriaKeys = Object.keys(criteria);

    return criteriaKeys.every((fieldName) => {
      const studentKey = fieldName as keyof Student;
      return criteria[fieldName] === student[studentKey];
    });
  });
};

const logStudent = ({ name, occupation }: Student) => {
  console.log(`  - ${name}, ${occupation}`);
};

console.log("Students of age 35:");
filterStudentsBy(students, { age: 35 }).forEach(logStudent);