export const functionErrorsBtn = (data) => {
  const arrayKeys = Object.keys(data);
  const arrayData = arrayKeys.filter((element, index) => data[element] !== "");

  if (arrayKeys.length === arrayData.length) {
    return false;
  } else {
    return true;
  }
};

export const validateEspeciality = (input) => {
  let errores = {};

  if (input.nombre.length < 5) {
    errores.nombre = "El nombre debe tener minimo 5 caracteres";
  }

  if (input.descripcion.length < 5) {
    errores.descripcion = "La descripcion debe tener minimo 5 caracteres";
  }

  if (input.activa === "") {
    errores.activa = "Debe seleccionar si la especialidad esta activa o no";
  }

  return errores;
};

export const validatePlan = (input) => {
  let errores = {};

  if (input.codePlan.length < 3 || input.codePlan.length > 5) {
    errores.codePlan = "El código debe tener entre 3 y 5 caracteres";
  }

  if (input.name.length < 5) {
    errores.name = "El nombre debe tener minimo 5 caracteres";
  }

  if (
    typeof parseInt(input.precio) !== "number" ||
    parseInt(input.precio) <= 0
  ) {
    errores.precio = "Debe ingresar un valor válido";
  }

  if (input.planActivo === "") {
    errores.planActivo = "Debe seleccionar si la especialidad esta activa o no";
  }

  if (input.descripcion.length <= 0) {
    errores.descripcion = "Dentener al menos una descripcion";
  }

  return errores;
};

export const validateUpdatePlan = (input) => {
  let errores = {};

  if (
    typeof parseInt(input.precio) !== "number" ||
    parseInt(input.precio) <= 0
  ) {
    errores.precio = "Debe ingresar un valor válido";
  }

  if (input.planActivo === "true") {
    errores.planActivo = "Debe seleccionar si la especialidad esta activa o no";
  }

  if (input.descripcion.length <= 0) {
    errores.descripcion = "Dentener al menos una descripcion";
  }

  return errores;
};

export const validatePharmacy = (input) => {
  let errores = {};

  if (input.nombre.length < 5) {
    errores.nombre = "El nombre debe tener minimo 5 caracteres";
  }

  if (
    typeof parseInt(input.numHabilitacion) !== "number" ||
    parseInt(input.precio) <= 0
  ) {
    errores.numHabilitacion = "Debe ingresar un valor válido";
  }

  if (input.direccion === "" || input.direccion.length < 5) {
    errores.direccion = "Ingrese una dirección válida";
  }

  if (input.telefono.length < 8 || input.telefono.length > 11) {
    errores.telefono = "Ingrese un teléfono válido";
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input.mail)) {
    errores.mail = "Ingrese un mail válido";
  }

  if (input.provinciaID === "") {
    errores.direccion = "Ingrese una provincia";
  }

  if (input.ciudadID === "") {
    errores.direccion = "Ingrese una localidad";
  }

  if (input.activo === "") {
    errores.activo = "Debe seleccionar si la especialidad esta activa o no";
  }

  return errores;
};

export const validateUpdatePharmacy = (input) => {
  let errores = {};

  if (input.direccion === "" || input.direccion.length < 5) {
    errores.direccion = "Ingrese una dirección válida";
  }

  if (input.telefono.length < 8 || input.telefono.length > 11) {
    errores.telefono = "Ingrese un teléfono válido";
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input.mail)) {
    errores.mail = "Ingrese un mail válido";
  }

  if (input.activo === "") {
    errores.activo = "Debe seleccionar si la especialidad esta activa o no";
  }

  return errores;
};

export const validateProfessional = (input) => {
  let errores = {};

  if (input.nombre.length < 3) {
    errores.nombre = "El nombre debe tener minimo 3 caracteres";
  }

  if (input.apellido.length < 3) {
    errores.apellido = "El apellido debe tener minimo 3 caracteres";
  }

  if (input.DNI.length < 8) {
    errores.DNI = "DNI mínimo 8 caracteres";
  }
  if (
    typeof parseInt(input.matricula) !== "number" ||
    parseInt(input.matricula) <= 0
  ) {
    errores.matricula = "Debe ingresar un valor válido";
  }

  if (input.telefono.length < 8 || input.telefono.length > 11) {
    errores.telefono = "Ingrese un teléfono válido";
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input.mail)) {
    errores.mail = "Ingrese un mail válido";
  }

  if (input.provinciaID === "") {
    errores.direccion = "Ingrese una provincia";
  }

  if (input.ciudadID === "") {
    errores.direccion = "Ingrese una localidad";
  }

  if (input.activa === "") {
    errores.activa = "Debe seleccionar si la especialidad esta activa o no";
  }

  if (input.especID === "") {
    errores.nombre = "Debe seleccionar una especialidad";
  }

  return errores;
};

export const validateProfesionalUpdate = (input) => {
  let errores = {};

  if (input.telefono.length < 8 || input.telefono.length > 11) {
    errores.telefono = "Ingrese un teléfono válido";
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input.mail)) {
    errores.mail = "Ingrese un mail válido";
  }

  if (input.provinciaID === "") {
    errores.direccion = "Ingrese una provincia";
  }

  if (input.ciudadID === "") {
    errores.direccion = "Ingrese una localidad";
  }

  return errores;
};
