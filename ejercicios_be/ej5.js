//Crear 2 funciones: aprobar y reprobar
//Al invocar la función aprobar(), se debe aumentar el número de materias aprobadas y veces rendidas en 1.
//Al invocar la función reprobar sólo se debe aumentar las veces rendidas.

let frase = 'materias aprobadas 0 habiendo rendido 0 veces';

let prueba = 'a0a   sd0';

function aprobar(str) {
  let a,
    val,
    frase2 = str;
  for (let i = 0; i < frase2.length; i++) {
    if (isNaN(frase2[i]) === false && frase2[i] !== ' ') {
      val = frase2[i];
      a = parseInt(val) + 1;
      frase2 = frase2.replace(val, a.toString());
    }
  }
  return frase2;
}
console.log(frase);
frase = aprobar(frase);
console.log(frase);

// Tengo que lograr que la función identifique si los dos números del string son iguales. Dado ese caso, debe incrementar ambos y luego restar 1
// al primero. Caso contrario procede como ya está definido.
function reprobar(str) {
  const ar = [];
  for (let j = 0; j < str.length; j++) {
    if (isNaN(str[j]) === false && str[j] !== ' ') ar.push(str[j]);
  }
  if (ar[0] === ar[1]) {
    let a = parseInt(ar[0]) + 1;
    str = str.replaceAll(ar[0], a.toString());
    str = str.replace(a.toString(), ar[0]);
    return str;
  } else {
    let a = parseInt(ar[1]) + 1;
    str = str.replace(ar[1], a.toString());
    return str;
  }
}

frase = reprobar(frase);

console.log(frase);

// Old reprobar

//    let a,
//      val,
//      i = str.length - 1;
//    while (isNaN(str[i]) === true || str[i] === ' ') i--;
//    val = str[i];
//    a = parseInt(val) + 1;
//    str = str.replace(val, a.toString());
//    return str;
