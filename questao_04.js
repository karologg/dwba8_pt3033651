class aluno {
    constructor(pNome, sNome, pNota, sNota) {
        this.pNome = pNome;
        this.sNome = sNome;
        this.pNota = pNota;
        this.sNota = sNota;
    }

    nomeCompleto() {
        return this.pNome + " " + this.sNome;
    }

    media() {
        return (this.pNota * 0.6) + (this.sNota * 0.4);
    }

    situacao(media) {
        if (media < 6) {
            return "reprovado";
        } else {
            return "aprovado";
        }
    }
}

const TOTAL_ALUNOS = 5;

const alunos = new Array(TOTAL_ALUNOS);

var aluno01 = new aluno("Karol", "Gotto", 10, 8);
alunos[0] = aluno01;

var aluno02 = new aluno("Bianca", "Galdino", 10, 10);
alunos[1] = aluno02;

var aluno03 = new aluno("Inosuke", "Hashibira", 2, 1);
alunos[2] = aluno03;

var aluno04 = new aluno("Fluffy", "Gotto", 4, 3);
alunos[3] = aluno04;

var aluno05 = new aluno("Floquinho", "Galdino", 3, 2);
alunos[4] = aluno05;

const alertaAlunos = () => {
    for(i = 0; i < TOTAL_ALUNOS; i++) {
        const name = alunos[i][i].nomeCompleto();
        var average = alunos[i].media();
        var situation = alunos[i].situacao(average);
        alert("Nome Completo: " + name + "\n\nMedia: " + average + "Situacao: " + situation);
    }
}

alertaAlunos();
