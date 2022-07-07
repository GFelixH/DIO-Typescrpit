let botaoAtualizar = document.getElementById("atualizar-saldo") as HTMLElement;
let botaoLimpar = document.getElementById("limpar-saldo") as HTMLElement;
let soma = document.getElementById("soma") as HTMLInputElement;
let campoSaldo = document.getElementById("campo-saldo") as HTMLElement;

campoSaldo.innerHTML = "0";

function somarAoSaldo(soma: number) {
  if (!campoSaldo.innerHTML) campoSaldo.innerHTML = "0";
  campoSaldo.innerHTML = `${parseInt(campoSaldo.innerHTML) + soma}`;
}
function limparSaldo(): void {
  campoSaldo.innerHTML = "";
}

botaoAtualizar.addEventListener("click", function (evento): void {
  if (soma.value) somarAoSaldo(parseInt(soma.value));
});

botaoLimpar.addEventListener("click", function (): void {
  limparSaldo();
});
/**
    <h4>Valor a ser adicionado: <input id="soma" type = "number"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
