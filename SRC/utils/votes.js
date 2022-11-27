function stars(VotoNuevo, SumaDeVotosH, VotantesCantidad) {
  //   console.log(VotoNuevo)
  //   console.log(SumaDeVotosH)
  //   console.log(VotantesCantidad)

  let score = ++VotantesCantidad;
  let total = parseInt(VotoNuevo) + parseInt(SumaDeVotosH);

  let averange = total / score;

  let result = {
    VotoNuevo: VotoNuevo,
    SumaDeVotosH: total,
    VotantesCantidad: VotantesCantidad,
    Averange: averange,
  };

  return result;
}

module.exports = stars;
