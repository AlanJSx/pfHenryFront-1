export const validateDNIToken = (input) => {
  let errores = {};

  if (input.DNI.length < 8) {
    errores.DNI = "El DNI ingresado debe ser mayor a 8 dígitos";
  }

  if (input.token.length !== 6) {
    errores.token = "El Token ingresado debe ser de 6 numeros";
  }

  return errores;
};

export const validateDignostico = (input) => {
  let errores = {};

  if (input.diagnostico.length < 8) {
    errores.diagnostico = "Debe ingresar el diagnóstico";
  }

  return errores;
};

export const validateReceta = (input) => {
  let errores = {};

  if (input.tipoReceta === "") {
    errores.tipoReceta = "Campo obligatorio";
  }

  if (input.descripcion.length <= 0 ) {
    errores.descripcion = "Debe ingresar lo recetado";
  }

  return errores;
};