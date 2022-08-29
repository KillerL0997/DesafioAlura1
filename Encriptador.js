var boton1 = document.getElementById("Boton1");
var boton2 = document.getElementById("Boton2");
boton1.onclick = encriptar;
boton2.onclick = desencriptar;
function encriptar() {
  var texto = document.getElementById("texto").value;
  if (texto.length == 0){
    alert("No se ingreso una palabra");
    return;
  }
  var codi = "";
  var i = 0;
  texto = texto.toLowerCase()
  while (i < texto.length) {
    if (texto[i] == "a" || texto[i] == "e" || texto[i] == "i" || texto[i] == "o" || texto[i] == "u"){
      if (texto[i] == "a") {
        codi += "ai";
      }
      if (texto[i] == "e") {
        codi += "enter";
      }
      if (texto[i] == "i") {
        codi += "imes";
      }
      if (texto[i] == "o") {
        codi += "ober";
      }
      if (texto[i] == "u") {
        codi += "ufat";
      }
    }
    else{
      codi += texto[i];
    }
    i++;
  }
  resultados(codi);
  document.getElementById("texto").value = "";
}
function desencriptar() {
  var codi = document.getElementById("texto").value;
  if (codi.length == 0){
    alert("No se ingreso una palabra");
    return;
  }
  var deco = "";
  var i = 0;
  codi = codi.toLowerCase()
  while (i < codi.length) {
    deco += codi[i];
    if (
      codi[i] == "a" ||
      codi[i] == "e" ||
      codi[i] == "i" ||
      codi[i] == "o" ||
      codi[i] == "u"
    ) {
      if (i < codi.length && codi[i] == "a") {
        i += 2;
      }
      if (i < codi.length && codi[i] == "e") {
        i += 5;
      }
      if (i < codi.length && codi[i] == "i") {
        i += 4;
      }
      if (i < codi.length && codi[i] == "o") {
        i += 4;
      }
      if (i < codi.length && codi[i] == "u") {
        i += 4;
      }
    } else {
      i++;
    }
  }
  resultados(deco);
  document.getElementById("texto").value = "";
}
function resultados(texto){
  var lugar = document.getElementById("resu");
  lugar.style.display = "none";
  var nuevo = document.createElement("div");
  nuevo.className = "resultados";
  nuevo.id = "resu";
  nuevo.innerHTML += "<p id='copiable'>" + texto + "</p><button class='copiar' id='copiar'>Copiar</button>";
  lugar.insertAdjacentElement("afterend",nuevo);
  lugar.remove();
  document.getElementById("copiar").onclick = copiar;
}
function copiar(){
  var texto = document.getElementById("copiable").textContent;
  navigator.clipboard.writeText(texto);
  document.getElementById("texto").value = "";
}
