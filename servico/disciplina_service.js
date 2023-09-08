class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }
    inserir(nome, codigo) {
        const disciplinaPesquisado = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisado.length > 0) {
            throw new Error('Disciplina já cadastrada!');
        }
        const disciplinaNova = new Disciplina(nome, codigo);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }
    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(
            disciplina => disciplina.codigo === codigo);
    }
    inserirAlunoNaDisciplina(aluno, codigoDisciplina){
        var disciplina = this.pesquisarPorCodigo(codigoDisciplina);
        if(disciplina == null || disciplina == undefined || disciplina.length == 0) throw new Error("disciplina nao existe");
        return disciplina;
    }
    remover(codigo) {
        this.repositorio.remover(codigo);
    }
}
