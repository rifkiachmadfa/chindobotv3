// script.js
const elemen = document.getElementById('greetings');
const waktuSaatIni = new Date();
const jam = waktuSaatIni.getHours();

if (jam >= 5 && jam < 12) {
    elemen.innerHTML = 'Hallo, Selamat Pagi';
    elemen.style.color = 'blue';
} else if (jam >= 12 && jam < 18) {
    elemen.innerHTML = 'Hallo, Selamat Siang!';
    elemen.style.color = 'orange';
} else {
    elemen.innerHTML = 'Hallo, Selamat Malam!';
    elemen.style.color = 'darkblue';
}
