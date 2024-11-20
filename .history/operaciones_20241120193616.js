const fs = require("fs");

// Ruta del archivo JSON
const filePath = "./citas.json";

// Función para registrar una nueva cita
const registrar = (nombre, edad, animal, color, enfermedad) => {
  const nuevaCita = { nombre, edad, animal, color, enfermedad };
  const citas = JSON.parse(fs.readFileSync(filePath, "utf8"));
  citas.push(nuevaCita);
  fs.writeFileSync(filePath, JSON.stringify(citas, null, 2));
  console.log("Cita registrada con éxito:", nuevaCita);
};

// Función para leer todas las citas
const leer = () => {
  const citas = JSON.parse(fs.readFileSync(filePath, "utf8"));
  console.log("Citas registradas:");
  console.log(citas);
};

module.exports = { registrar, leer };
