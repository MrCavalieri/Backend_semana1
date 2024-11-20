const { registrar, leer } = require("./operaciones");

const operacion = process.argv[2];
const args = process.argv.slice(3);

if (operacion === "registrar") {
  const [nombre, edad, animal, color, enfermedad] = args;
  if (!nombre || !edad || !animal || !color || !enfermedad) {
    console.log(
      "Por favor, ingrese todos los datos: nombre, edad, animal, color y enfermedad."
    );
  } else {
    registrar(nombre, edad, animal, color, enfermedad);
  }
} else if (operacion === "leer") {
  leer();
} else {
  console.log('Operación no válida. Use "registrar" o "leer".');
}
