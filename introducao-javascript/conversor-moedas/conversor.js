var cot_data;

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > milliseconds) {
            break;
        }
    }
}

function getCotacoes() {
    var url =
        "https://economia.awesomeapi.com.br/last/USD-BRL,USD-EUR,EUR-BRL,BTC-BRL,BRL-EUR,BRL-USD,EUR-USD,BTC-USD,BTC-EUR";

    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onerror = function (e) {
        document.getElementById("resultado").innerHTML = "offLine!";
    };

    request.onload = () => {
        var response = JSON.parse(request.responseText);

        if (response.erro) {
            document.getElementById("resultado").innerHTML =
                "Não foi possível Converter";
        } else {
            cot_data = response;
        }
    };
    request.send();
}

function converter() {

    getCotacoes()
    console.log('Conversor de Dolar para real')
    var val_destino = 'BRL'
    var val_origem = 'USD'

    var tipo = `${val_origem}${val_destino}`;
    var valor = 15

    console.log(cot_data);
    data = cot_data[tipo];
    console.log(data.bid * valor)
}



converter()

