let students = [
  { Id: "5678", Nombre: "Teresa Pérez", Edad: 22, Telefono: "235222333", Carrera: "Ingeniería Industrial" },
  { Id: "1234", Nombre: "Fernando Gómez", Edad: 25, Telefono: "3206558555", Carrera: "Ingeniería de sistemas" },
  { Id: "5645", Nombre: "Andres Cuesta", Edad: 26, Telefono: "311252622", Carrera: "Ingeniería Ambiental" },
  { Id: "3333", Nombre: "Luisa Monsalve", Edad: 20, Telefono: "3102222225", Carrera: "Ingeniería Industrial" },
  { Id: "5522", Nombre: "Sandra Arjona", Edad: 30, Telefono: "3225555252", Carrera: "Ingeniería de sistemas" },
  { Id: "7774", Nombre: "Teresa Pérez", Edad: 24, Telefono: "0342225252", Carrera: "Administración de Empresas" },
  { Id: "6666", Nombre: "Tatiana Velasco", Edad: 24, Telefono: "0312252525", Carrera: "Administración de Empresas" }
];

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("table");
let data = Object.keys(students[0]);
generateTable(table, students)
generateTableHead(table, data);
