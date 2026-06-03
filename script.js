const botao = document.getElementById("botaoMensagem");
const mensagem = document.getElementById("mensagem");

const mensagens = [
    "Produzir com responsabilidade é cultivar o futuro.",
    "Tecnologia e natureza podem caminhar juntas.",
    "Cada árvore preservada fortalece o amanhã.",
    "O agro sustentável alimenta pessoas e protege o planeta.",
    "O equilíbrio entre produção e meio ambiente garante um futuro melhor."
];

botao.addEventListener("click", () => {
    const sorteio = Math.floor(Math.random() * mensagens.length);
    mensagem.textContent = mensagens[sorteio];
});