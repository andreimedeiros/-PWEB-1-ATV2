class Clientes {
    constructor() {
        this._clientes = new Array();
    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    listar() {
        return this._clientes;
    }
    pesquisarPorCPF(cpf) {
        return this._clientes.find(cliente => cliente.cpf === cpf);
    }
    /*
    pesquisarClientesNegativados(): Array<Cliente> {
        return this._clientes.filter(cliente => cliente.conta.saldo < 0);
    }
    */
    remover(cpf) {
        this._clientes = this._clientes.filter(cliente => cliente.cpf == cpf);
    }
}
