
function raiz() {
    let n = document.getElementById("numero").value;
    let r =
            document.getElementById("resultado").innerHTML = Math.sqrt(parseFloat(n));
}
function pago() {
    let nombre = document.getElementById("nombre").value;
    let ht = document.getElementById("ht").value;
    let ph = document.getElementById("ph").value;
    let sueldo;
    if (ht > 35) {
        sueldo = (parseInt(ht) - 35) * parseInt(ph) * 1.5 + parseInt(ph) * 35;
    } else {
        sueldo = parseInt(ht) * parseInt(ph);
    }
    let sb = sueldo;
    let sn;
    if (sb > 300) {
        aux = sb - 300;
        if (aux > 200) {
            let impx = 200 * 0.15;
            let impy = sb - 500;
            impy = impy * 0.25;
            imp = impx + impy;
            sn = sb - imp;
        } else {
            imp = aux * 0.15;
            sn = sb - imp;
        }
    } else {
        imp = 0;
        sn = sb - imp;
    }
    document.getElementById("r1").innerHTML=" "+nombre;
    document.getElementById("r2").innerHTML="$/. "+sb;
    document.getElementById("r3").innerHTML="$/. "+imp;
    document.getElementById("r4").innerHTML="$/. "+sn;
    document.getElementById("resultado").style="block";
}