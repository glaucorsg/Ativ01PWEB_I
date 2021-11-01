const clienteController = new ClienteController();
//Criando dois novos clientes
const c4 = new Cliente('Daniel', '444', '400');
const c5 = new Cliente('Eduarda', '555', '500');
//Inserindo os novos clientes na classe Clientes e listando-a
clienteController.inserirIndividual(c4);
clienteController.inserirIndividual(c5);
clienteController.listar();
//Removendo o cliente c4 e listando novamente
clienteController.remover(c4);
clienteController.listar();
//Pesquisando o cliente c5:
console.log(clienteController.pesquisarCliente(c5));
