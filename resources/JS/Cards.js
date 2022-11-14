let CARDn = 1;
let TarjetaAnterior = 0;
let TarjetaFocus = 0;

console.log("Inicio");
setInterval(() => {
  if (CARDn == 1) {
    console.log("CASO1");
    document.getElementById("tarjeta1").style.display = "block";
    document.getElementById("tarjeta2").style.display = "none";
    document.getElementById("tarjeta3").style.display = "none";
    document.getElementById("tarjeta4").style.display = "none";
    document.getElementById("tarjeta5").style.display = "none";
    CARDn++;
  } else if (CARDn >= 2 && CARDn <= 5) {
    TarjetaFocus = CARDn;
    TarjetaAnterior = TarjetaFocus - 1;
    TarjetaPosterior = TarjetaFocus + 1;
    document.getElementById("tarjeta" + TarjetaFocus).style.display = "block";
    document.getElementById("tarjeta" + TarjetaAnterior).style.display = "none";

    CARDn++;
  } else if (CARDn == 6) {
    CARDn = 1;
  }
}, 3000);
