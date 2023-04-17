function crear_tabla() {
  var body = document.getElementsByTagName("body")[0];
  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");

  for (var i = 0; i < 2; i++) {
    var fila = document.createElement("tr");
    for (var j = 0; j < 2; j++) {
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
      celda.appendChild(textoCelda);
      fila.appendChild(celda);
    }
    tblBody.appendChild(fila);
  }
  tabla.appendChild(tblBody);
  body.appendChild(tabla);
   tabla.setAttribute("border", "1");
}