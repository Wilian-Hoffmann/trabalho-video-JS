class Mensagem{
    constructor(texto = ''){
        this._texto = this.texto;
    }

    get texto(){
        return this._texto
    }

    set texto(texto){
        this._texto = texto;
    }
}