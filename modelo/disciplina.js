class Disciplina {
    constructor(codigo, nome, alunos) {
        this.codigo = codigo;
        this._nome = nome;
        this.alunos = alunos;
    }
    get codigo() {
        return this._codigo;
    }
    set codigo(codigo) {
        this._codigo = codigo;
    }
    get nome() {
        return this._nome;
    }
    set nome(nomeNovo) {
        this._nome = nomeNovo;
    }
    get alunos() {
        return this._alunos;
    }
    set alunos(alunos) {
        this._alunos = alunos;
    }
}

