interface Student {
  name: string,
  age: number,
  occupation: string,
}

interface Teacher {
  name: string;
  age: number;
  subject: string;
}

interface User extends Partial<Teacher>, Partial<Student> {
  name: string,
  age: number,
  subject?: string,
  occupation?: string
}

const users: User[] = [
  {
    name: "Luke Patterson",
    age: 32,
    occupation: "Internal auditor",
  },
  {
    name: "Jane Doe",
    age: 41,
    subject: "English",
  },
  {
    name: "Alexandra Morton",
    age: 35,
    occupation: "Conservation worker",
  },
  {
    name: "Bruce Willis",
    age: 39,
    subject: "Biology",
  },
];

function isStudent(user: User): user is Student { return (user as Student).occupation !== undefined };
function isTeacher(user: User): user is Teacher { return (user as Teacher).subject !== undefined };

const logUser = (user: User) => {
  let extraInfo = "Error";
  if (isStudent(user)) {
    extraInfo = user.occupation;
  }
  if (isTeacher(user)) {
    extraInfo = user.subject;
  }

  console.log(`  - ${user.name}, ${user.age}, ${extraInfo}`);
};

users.forEach(logUser);
