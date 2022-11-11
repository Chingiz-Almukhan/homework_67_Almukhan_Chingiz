let urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
$.get(
    `https://breakingbadapi.com/api/characters/${id}`, function (data) {

        $("#card").append(`<div class="img-square-wrapper"><img class="" src="${data[0].img}" alt="Card image cap" height="383" width="268"></div>
            <div class="card-body"><h4 class="card-title text-center">${data[0].name}</h4>
            <p class="card-text">birthday: ${data[0].birthday}</p>
            <p class="card-text">occupation: ${data[0].occupation}</p>
            <p class="card-text">status: ${data[0].status}</p>
            <p class="card-text">nickname: ${data[0].nickname}</p>
            <p class="card-text">portrayed: ${data[0].portrayed}</p>
            <h2 id="quotes" class="card-title text-center">Quotes</h2>
            </div>`);
        var author = data[0].name
        $.get(`https://breakingbadapi.com/api/quote?author=${author.replace(/ /g, '+')}`, function (quote) {
            if (quote.length > 1) {
                for (let i = 0; i < quote.length; i++) {
                    $(".card-body").append(`<p class="card-text">${i+1}) ${quote[i].quote}</p>`)
                }
            } else {
                $(".card-body").append(`<p class="card-text">${quote[0].quote}</p>`)
            }
        })

    }
)