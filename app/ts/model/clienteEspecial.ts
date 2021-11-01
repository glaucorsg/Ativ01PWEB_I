class ClienteEspecial extends Cliente {

    private dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string, conta: string, dependentes: Array<Cliente>) {
        super(nome, conta, cpf);
    }
}