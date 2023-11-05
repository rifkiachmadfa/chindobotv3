
const form = document.getElementById("formLogin");
const submit = document.getElementById("submitButton");


form.addEventListener("submit", function(event){

    const jawaban = document.getElementById("inputPassword2")
    const isiJawaban = jawaban.value;
    if (isiJawaban == 'popohoki4ever'){
            window.location.href="mainPage.html";
    } else {
       alert("sandi salah!")
    }
        event.preventDefault();
})
