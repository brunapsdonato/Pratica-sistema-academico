class DisciplinaControlador {
    constructor() {
        this.disciplinaService = new DisciplinaService();
        this.alunoService = new AlunoService();
    }
    inserir() {
        try{
            const nomeElemento = document.querySelector("#nomeAluno");
            const idadeElemento = document.querySelector("#idade");
            const matriculoElemento = document.querySelector("#matricula");
            const alunoInserido = this.alunoService.inserir(nomeElemento.value, Number(idadeElemento.value),
                matriculoElemento.value);
            const listaAlunosElemento = document.querySelector("#listaAlunos");
            if (alunoInserido) {
                this.inserirAlunoNoHtml(alunoInserido, listaAlunosElemento);
            }
        }
        catch(error){
            alert(error);
        }
    }
    inserirAlunoNoHtml(aluno, elementoDestino) {
        const alunoElemento = document.createElement("li");
        alunoElemento.textContent = `Nome: ${aluno.nome} - Idade: ${aluno.idade} - Matricula: ${aluno.matricula}`;
        elementoDestino.appendChild(alunoElemento);
    }

    inserirDisciplina() {
        const nomeElemento = document.querySelector("#nomeDisciplina");
        const codigoElemento = document.querySelector("#codigo");
        const disciplinaInserida = this.disciplinaService.inserir(codigoElemento.value, nomeElemento.value);
        const listaDisciplinasElemento = document.querySelector("#listaDisciplinas");
        if (disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinasElemento);
        }
    }
    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.id = disciplina.codigo;
        disciplinaElemento.textContent = `Nome da Disciplina: ${disciplina.nome} - Código: ${disciplina.codigo}`;
        elementoDestino.appendChild(disciplinaElemento);
    }

    inserirAlunoNaDisciplina(){

        var matricula = document.querySelector("#matriculaAluno").value;
        var codigoDisciplina = document.querySelector("#codigoDisciplina").value;

        var aluno = this.alunoService.pesquisarPorMatricula(matricula);
        if(aluno == null || aluno == undefined || aluno.length == 0) throw new Error("aluno nao existe");
        else {
            this.disciplinaService.inserirAlunoNaDisciplina(aluno, codigoDisciplina);
        }
        const disciplinaHtml = document.getElementById(codigoDisciplina);
        var alunoDisciplinaHtml = document.createElement("p");
        alunoDisciplinaHtml.textContent = "Aluno: " + aluno[0].nome;
        disciplinaHtml.appendChild(alunoDisciplinaHtml);

    }
}
