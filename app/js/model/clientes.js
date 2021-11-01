class Clientes {
    constructor() {
        this.clientes = new Array();
        const c1 = new Cliente('Alberto', '111', '100');
        const c2 = new Cliente('Bianca', '222', '200');
        const c3 = new Cliente('Carlos', '333', '300');
        this.clientes.push(c1, c2, c3);
    }
    inserir(novoCliente) {
        this.clientes.push(novoCliente);
    }
    remover(cpf) {
        const cpfARemover = this.pesquisar(cpf);
        if (cpfARemover) {
            const indiceCpf = this.clientes.indexOf(cpfARemover);
            if (indiceCpf > -1) {
                this.clientes.splice(indiceCpf, 1);
            }
        }
    }
    pesquisar(cpfInformado) {
        return this.clientes.find(cliente => cliente.cpf === cpfInformado);
    }
    listar() {
        return this.clientes;
    }
}
