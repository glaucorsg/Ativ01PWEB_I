class ClienteController {
    constructor() {
        this.inputNome = document.querySelector('#nome');
        this.inputCpf = document.querySelector('#cpf');
        this.inputConta = document.querySelector('#conta');
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        const novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, this.inputConta.value);
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }
    listar() {
        this.clientes.listar().forEach(cliente => this.inserirClienteNoHTML(cliente));
    }
    remover(cliente) {
        this.clientes.remover(cliente.cpf);
    }
    inserirIndividual(cliente) {
        return this.clientes.inserir(cliente);
    }
    pesquisarCliente(cliente) {
        return this.clientes.pesquisar(cliente.cpf);
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'APAGAR';
        botaoApagar.addEventListener("click", (event) => {
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
