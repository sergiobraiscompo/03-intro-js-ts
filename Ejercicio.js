const data = `id,name,surname,gender,email,picture
15519533,Raul,Flores,male,raul.flores@example.com,https://randomuser.me/api/portraits/men/42.jpg
82739790,Alvaro,Alvarez,male,alvaro.alvarez@example.com,https://randomuser.me/api/portraits/men/48.jpg
37206344,Adrian,Pastor,male,adrian.pastor@example.com,https://randomuser.me/api/portraits/men/86.jpg
58054375,Fatima,Guerrero,female,fatima.guerrero@example.com,https://randomuser.me/api/portraits/women/74.jpg
35133706,Raul,Ruiz,male,raul.ruiz@example.com,https://randomuser.me/api/portraits/men/78.jpg
79300902,Nerea,Santos,female,nerea.santos@example.com,https://randomuser.me/api/portraits/women/61.jpg
89802965,Andres,Sanchez,male,andres.sanchez@example.com,https://randomuser.me/api/portraits/men/34.jpg
62431141,Lorenzo,Gomez,male,lorenzo.gomez@example.com,https://randomuser.me/api/portraits/men/81.jpg
05298880,Marco,Campos,male,marco.campos@example.com,https://randomuser.me/api/portraits/men/67.jpg
61539018,Marco,Calvo,male,marco.calvo@example.com,https://randomuser.me/api/portraits/men/86.jpg`;

const fromCSV = (csv) => {
  const data = [];

  csv = csv.replaceAll("\n", ",");
  csv = csv.split(",");

  const [key1, key2, key3, key4, key5, key6, ...usersData] = csv;
  const keys = [key1, key2, key3, key4, key5, key6];

  const rows = (csv.length / keys.length - 1).toFixed();

  let v = 0;
  for (const user in rows) {
    let user = {};

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = usersData[v];
      user = { ...user, key: key, value: value };
      v++;
    }

    data.push(user);
    console.log(user);
  }


  return data;
};

const result = fromCSV(data);
console.log("data array:", result);

/*

Formato del resultado:

[
  {
    id: "15519533",
    name: "Raul",
    surname: "Flores",
    gender: "male",
    email: "raul.flores@example.com",
    picture: "https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    id: "82739790",
    name: "Alvaro",
    surname: "Alvarez",
    gender: "male",
    email: "alvaro.alvarez@example.com",
    picture: "https://randomuser.me/api/portraits/men/48.jpg"
  },
  {
    ...
  }
]
*/
