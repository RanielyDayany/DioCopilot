function validarCartao(numero) {
    const bandeiras = [
        { nome: 'Visa', regex: /^4/ },
        { nome: 'MasterCard', regex: /^(5[1-5]|2[2-7])/ },
        { nome: 'Elo', regex: /^(4011|4312|4389|45|627780|636297|636368|650|655|6516|6550)/ },
        { nome: 'American Express', regex: /^3[47]/ },
        { nome: 'Discover', regex: /^(6011|65|64[4-9])/ },
        { nome: 'Hipercard', regex: /^6062/ },
        { nome: 'JCB', regex: /^35/ },
        { nome: 'Aura', regex: /^50/ }
    ];

    for (let bandeira of bandeiras) {
        if (bandeira.regex.test(numero)) {
            return bandeira.nome;
        }
    }

    return 'Bandeira desconhecida';
}

// Exemplo de uso:
const numeroCartao = '5025 5217 6353 4612';
const bandeira = validarCartao(numeroCartao);
console.log(`A bandeira do cartão é: ${bandeira}`);