function Ceps() {
    const cep = document.getElementById('cep').value
    const lugar = document.getElementById('resul')

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
    .then(data => {

    if (data.erro) {
        lugar.innerHTML = "CEP não encontrado.";
    }

    else {
        lugar.innerHTML =  `${data.logradouro}, ${data.bairro} <br/>Estado: ${data.estado}, ${data.uf} </br> Região: ${data.regiao}`
    }

    })

    .catch(error => {
            lugar.innerHTML = "Erro ao buscar o CEP. Tente novamente.";
            console.error("Falha na requisição:", error);
        })

}