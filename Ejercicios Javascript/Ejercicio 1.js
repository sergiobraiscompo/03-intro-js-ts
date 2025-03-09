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

const fromCSV = (csv, nAttrs) => {
  const lines = csv.trim().split("\n");
  const keys = lines[0].split(",");
  const nKeys = Math.min(nAttrs || keys.length, keys.length);

  return lines.slice(1).reduce((acc, line) => {
    const values = line.split(",");
    const user = keys.slice(0, nKeys).reduce((obj, key, index) => {
      obj[key] = values[index];
      return obj;
    }, {});
    acc.push(user);
    return acc;
  }, []);
};

const result = fromCSV(data);
console.log("data array:", result);

console.log("dataSplitted:", fromCSV(data)); // Cada usuario tendrá todos los atributos como la implementación original
console.log("dataSplitted:", fromCSV(data, 2)); // cada usuario tendrá sólo `id` y `name`
console.log("dataSplitted:", fromCSV(data, 3)); // cada usuario tendrá sólo `id`, `name` y `surname`
console.log("dataSplitted:", fromCSV(data, 4)); // cada usuario tendrá sólo `id`, `name`, `surname` y `gender`

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
