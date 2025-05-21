const nome = [];
const pNota = [];
const sNota = [];
const fNota = [];

for (i = 0; i < 3; i++) {
    nome[i] = prompt("Nome: ");
    pNota[i] = prompt("Primeira Nota: ");
    sNota[i] = prompt("Segunda Nota: ");
    fNota[i] = (+pNota[i] * 0.6) + (+sNota[i] * 0.4);
}

for (i = 0; i < 3; i++) {
    alert("Aluno: " + nome[i] + "\nNota 01: " + pNota[i] + " Nota 02: " + sNota[i])
    alert("Nota final: "+fNota[i])
}
