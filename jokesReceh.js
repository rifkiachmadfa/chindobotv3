// URL API dari https://github.com/ardhptr21/candaan-api
const apiUrl = 'https://candaan-api.vercel.app/api/text/random';
const jokesTeks = document.querySelector(".jokesTeks");
const klik = document.querySelector(".klik");

// Lakukan permintaan ke API


  klik.addEventListener('click', ()=> {
    fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Data dari API
    jokesTeks.textContent = data.data; // Mengganti teks dalam elemen dengan teks dari API
    console.log(data);
  })
  .catch(error => {
    // Tangani kesalahan jika ada
    console.error('Terjadi kesalahan:', error);
  });
  })
  