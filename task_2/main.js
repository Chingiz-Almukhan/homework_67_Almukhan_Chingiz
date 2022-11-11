let urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
let url = 'https://breakingbadapi.com/api/characters?limit=10&offset=0'
if (id > 0) {
    url = `https://breakingbadapi.com/api/characters?limit=10&offset=${id}`
}
$.get(
    url, function (data) {
        for (let i = 0; i < data.length; i++) {
            $("#characters").append(`<a href="character.html?id=${data[i].char_id}" class="text-decoration-none text-dark"><div class="col mb-5"><div class="card h-100"><img class="card-img-top" src="${data[i].img}" alt="..." height="383" width="268">
            <div class="card-body p-4"><div class="text-center"><h3 class="fw-bolder">${data[i].name}</h3><p>Nickname: ${data[i].nickname}</p><p>
            Birthday: ${data[i].birthday}</p></div></div><div class="card-footer p-4 pt-0 border-top-0 bg-transparent"></div></div></div></div></a>`);
        }
        if (id === '0') {
            document.getElementById("first").className += " active";
        } else if (id === '10') {
            document.getElementById("second").className += " active";
        } else if (id === '20') {
            document.getElementById("third").className += " active";
        } else if (id === '30') {
            document.getElementById("fourth").className += " active";
        } else if (id === '40') {
            document.getElementById("fifth").className += " active";
        }else if(id === '50'){
            document.getElementById("sixth").className += " active";
        }else if(id === '60'){
            document.getElementById("seventh").className += " active";
        }
    }
);
