function validationNull(x) {
  if (x == null) {
    return "TECNOLOGIA NO ENCONTRADA";
  } else {
    return x;
  }
}

module.exports = validationNull;
