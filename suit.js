// Pilihan Player
alert("Ayo Main");
var tanya = true;
while (tanya) {
  var p = prompt("Pilih : batu, gunting, kertas");

  // Pilihan Computer
  // Bilangan Random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "batu";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "gunting";
  } else {
    comp = "kertas";
  }

  var hasil = "";

  // Rules
  if (p == comp) {
    hasil = "SERI!";
  } else if (p == "batu") {
    hasil = comp == "kertas" ? "Kalah!" : "Menang!";
  } else if (p == "gunting") {
    hasil = comp == "batu" ? "Kalah!" : "Menang!";
  } else if (p == "kertas") {
    hasil = comp == "gunting" ? "Kalah!" : "Menang!";
  } else {
    hasil = "Memasukkan Pilihan Salah";
  }

  // Hasil
  alert("Kamu : " + p + " Dan Komputer : " + comp + "\nKamu " + hasil);

  tanya = confirm("Lagi?");
}

alert("Terima kasih Telah Bermain");
