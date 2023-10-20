const botoncuotas = document.getElementsByClassName("signoeventos2");
const botoncuotas2 = document.getElementsByClassName("signoeventos3");
const botonequipo = document.getElementsByClassName("equipo");
const botonequipo2 = document.getElementsByClassName("equipo2");
const magico = document.getElementsByClassName("magico");
/*
console.log(botoncuotas.length);

function valorcuota(i) {
  for (i = 0; i < botoncuotas.length; i++) {
    alert(botoncuotas[i].innerHTML);
  }
  console.log(botoncuotas[0].innerHTML);
}
*/
function betting0() {
  document.getElementById("signobet").innerHTML = botoncuotas[0].innerHTML;
  document.getElementById("teambet").innerHTML = botonequipo[0].innerHTML;
  document.getElementById("matchbet").innerHTML =
    botonequipo[0].innerHTML + " v " + botonequipo[1].innerHTML;
  botoncuotas[0].classList.toggle("fondocuota");
  botoncuotas[0].classList.toggle("colorcuota");
  if (magico[0].style.display === "grid") {
    magico[0].style.display = "none";
  } else {
    magico[0].style.display = "grid";
  }
}

function betting() {
  document.getElementById("signobet").innerHTML = botoncuotas[1].innerHTML;
  document.getElementById("teambet").innerHTML = "Empate";
  document.getElementById("matchbet").innerHTML =
    botonequipo[0].innerHTML + " v " + botonequipo[1].innerHTML;
  if (magico[0].style.display === "grid") {
    magico[0].style.display = "none";
  } else {
    magico[0].style.display = "grid";
  }
}

function betting1() {
  document.getElementById("signobet").innerHTML = botoncuotas[2].innerHTML;
  document.getElementById("teambet").innerHTML = botonequipo[1].innerHTML;
  document.getElementById("matchbet").innerHTML =
    botonequipo[0].innerHTML + " v " + botonequipo[1].innerHTML;
  botoncuotas[2].classList.toggle("fondocuota");
  botoncuotas[2].classList.toggle("colorcuota");
  if (magico[0].style.display === "grid") {
    magico[0].style.display = "none";
  } else {
    magico[0].style.display = "grid";
  }
}

function betting3() {
  document.getElementById("signobet").innerHTML = botoncuotas2[0].innerHTML;
  document.getElementById("teambet").innerHTML = botonequipo[3].innerHTML;
  document.getElementById("matchbet").innerHTML =
    botonequipo[3].innerHTML + " v " + botonequipo[4].innerHTML;
  if (magico[0].style.display === "grid") {
    magico[0].style.display = "none";
  } else {
    magico[0].style.display = "grid";
  }
}

function betting4() {
  document.getElementById("signobet").innerHTML = botoncuotas2[1].innerHTML;
  document.getElementById("teambet").innerHTML = "Empate";
  document.getElementById("matchbet").innerHTML =
    botonequipo[3].innerHTML + " v " + botonequipo[4].innerHTML;
  if (magico[0].style.display === "grid") {
    magico[0].style.display = "none";
  } else {
    magico[0].style.display = "grid";
  }
}

function betting5() {
  document.getElementById("signobet").innerHTML = botoncuotas2[2].innerHTML;
  document.getElementById("teambet").innerHTML = botonequipo[4].innerHTML;
  document.getElementById("matchbet").innerHTML =
    botonequipo[3].innerHTML + " v " + botonequipo[4].innerHTML;
  if (magico[0].style.display === "grid") {
    magico[0].style.display = "none";
  } else {
    magico[0].style.display = "grid";
  }
}

function betting6() {
  document.getElementById("signobet").innerHTML = botoncuotas[3].innerHTML;
  document.getElementById("teambet").innerHTML = botonequipo[6].innerHTML;
  document.getElementById("matchbet").innerHTML =
    botonequipo[6].innerHTML + " v " + botonequipo[7].innerHTML;
  if (magico[0].style.display === "grid") {
    magico[0].style.display = "none";
  } else {
    magico[0].style.display = "grid";
  }
}

function betting7() {
  document.getElementById("signobet").innerHTML = botoncuotas[4].innerHTML;
  document.getElementById("teambet").innerHTML = "Empate";
  document.getElementById("matchbet").innerHTML =
    botonequipo[6].innerHTML + " v " + botonequipo[7].innerHTML;
  if (magico[0].style.display === "grid") {
    magico[0].style.display = "none";
  } else {
    magico[0].style.display = "grid";
  }
}

function betting8() {
  document.getElementById("signobet").innerHTML = botoncuotas[5].innerHTML;
  document.getElementById("teambet").innerHTML = botonequipo[7].innerHTML;
  document.getElementById("matchbet").innerHTML =
    botonequipo[6].innerHTML + " v " + botonequipo[7].innerHTML;
  if (magico[0].style.display === "grid") {
    magico[0].style.display = "none";
  } else {
    magico[0].style.display = "grid";
  }
}

function betting9() {
  document.getElementById("signobet").innerHTML = botoncuotas[6].innerHTML;
  document.getElementById("teambet").innerHTML = botonequipo[9].innerHTML;
  document.getElementById("matchbet").innerHTML =
    botonequipo[9].innerHTML + " v " + botonequipo[10].innerHTML;
  if (magico[0].style.display === "grid") {
    magico[0].style.display = "none";
  } else {
    magico[0].style.display = "grid";
  }
}

function betting10() {
  document.getElementById("signobet").innerHTML = botoncuotas[7].innerHTML;
  document.getElementById("teambet").innerHTML = "Empate";
  document.getElementById("matchbet").innerHTML =
    botonequipo[9].innerHTML + " v " + botonequipo[10].innerHTML;
  if (magico[0].style.display === "grid") {
    magico[0].style.display = "none";
  } else {
    magico[0].style.display = "grid";
  }
}

function betting11() {
  document.getElementById("signobet").innerHTML = botoncuotas[8].innerHTML;
  document.getElementById("teambet").innerHTML = botonequipo[10].innerHTML;
  document.getElementById("matchbet").innerHTML =
    botonequipo[9].innerHTML + " v " + botonequipo[10].innerHTML;

  if (magico[0].style.display === "grid") {
    magico[0].style.display = "none";
  } else {
    magico[0].style.display = "grid";
  }
}

function betting12() {
  document.getElementById("signobet").innerHTML = botoncuotas2[3].innerHTML;
  document.getElementById("teambet").innerHTML = botonequipo[12].innerHTML;
  document.getElementById("matchbet").innerHTML =
    botonequipo[12].innerHTML + " v " + botonequipo[13].innerHTML;

  if (magico[0].style.display === "grid") {
    magico[0].style.display = "none";
  } else {
    magico[0].style.display = "grid";
  }
}

function betting13() {
  document.getElementById("signobet").innerHTML = botoncuotas2[4].innerHTML;
  document.getElementById("teambet").innerHTML = botonequipo[13].innerHTML;
  document.getElementById("matchbet").innerHTML =
    botonequipo[12].innerHTML + " v " + botonequipo[13].innerHTML;

  if (magico[0].style.display === "grid") {
    magico[0].style.display = "none";
  } else {
    magico[0].style.display = "grid";
  }
}

function betting14() {
  document.getElementById("signobet").innerHTML = botoncuotas2[5].innerHTML;
  document.getElementById("teambet").innerHTML = botonequipo[15].innerHTML;
  document.getElementById("matchbet").innerHTML =
    botonequipo[15].innerHTML + " v " + botonequipo[16].innerHTML;

  if (magico[0].style.display === "grid") {
    magico[0].style.display = "none";
  } else {
    magico[0].style.display = "grid";
  }
}

function betting15() {
  document.getElementById("signobet").innerHTML = botoncuotas2[6].innerHTML;
  document.getElementById("teambet").innerHTML = botonequipo[16].innerHTML;
  document.getElementById("matchbet").innerHTML =
    botonequipo[15].innerHTML + " v " + botonequipo[16].innerHTML;

  if (magico[0].style.display === "grid") {
    magico[0].style.display = "none";
  } else {
    magico[0].style.display = "grid";
  }
}

function betting16() {
  document.getElementById("signobet").innerHTML = botoncuotas2[7].innerHTML;
  document.getElementById("teambet").innerHTML = botonequipo2[0].innerHTML;
  document.getElementById("matchbet").innerHTML =
    botonequipo2[0].innerHTML + " v " + botonequipo2[1].innerHTML;
  if (magico[0].style.display === "grid") {
    magico[0].style.display = "none";
  } else {
    magico[0].style.display = "grid";
  }
  document.getElementsByClassName("equipo2").classList.remove("team1");
}

function betting17() {
  document.getElementById("signobet").innerHTML = botoncuotas[8].innerHTML;
  document.getElementById("teambet").innerHTML = "Empate";
  document.getElementById("matchbet").innerHTML =
    botonequipo2[0].innerHTML + " v " + botonequipo2[1].innerHTML;
  if (magico[0].style.display === "grid") {
    magico[0].style.display = "none";
  } else {
    magico[0].style.display = "grid";
  }
}

function betting18() {
  document.getElementById("signobet").innerHTML = botoncuotas2[9].innerHTML;
  document.getElementById("teambet").innerHTML = botonequipo2[1].innerHTML;
  document.getElementById("matchbet").innerHTML =
    botonequipo2[0].innerHTML + " v " + botonequipo2[1].innerHTML;
  if (magico[0].style.display === "grid") {
    magico[0].style.display = "none";
  } else {
    magico[0].style.display = "grid";
  }
}

botoncuotas = cuotas;
cuotas.forEach((value, i) => {
  console.log(value);
});

function cuotas() {
  alert(botoncuotas[1].innerHTML);
}

/* const equipos = document.getElementsByClassName("equipo");
for (i = 0; i < equipos.length; i++) {
  console.log(equipos[i].innerHTML);
}

console.log(botoncuotas.length);



for (i = 0; i < botoncuotas.length; i++) {
  if (i == botoncuotas.onclick) {
    alert(botoncuotas[i].innerHTML);
  }
  console.log(botoncuotas[i].innerHTML);
}

*/
