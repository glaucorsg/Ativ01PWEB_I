class ClienteController {

    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputConta: HTMLInputElement;

    private clientes: Clientes;

    constructor() {
        this.inputNome = <HTMLInputElement>document.querySelector('#nome');
        this.inputCpf = <HTMLInputElement>document.querySelector('#cpf');
        this.inputConta = <HTMLInputElement>document.querySelector('#conta');

        this.clientes = new Clientes();
    }

    inserir(evento: Event): void {
        evento.preventDefault();
        const novoCliente = new Cliente(this.inputNome.value,
            this.inputCpf.value,
            this.inputConta.value);

        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }

    listar() {
        this.clientes.listar().forEach(cliente => this.inserirClienteNoHTML(cliente));
    }

    remover(cliente: Cliente): void {
        this.clientes.remover(cliente.cpf);
    }

    inserirIndividual(cliente: Cliente) {
        return this.clientes.inserir(cliente);
    }

    pesquisarCliente(cliente: Cliente) {
        return this.clientes.pesquisar(cliente.cpf);
    }

    private inserirClienteNoHTML(cliente: Cliente): void {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();

        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'APAGAR';
        botaoApagar.addEventListener("click", (event) =>{
            this.clientes.remover(cliente.cpf);
            (<Element>event.target).parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}