import Cliente from '@/api/Cliente';
import apiConfig from '../utils/apiConfig';

const ClienteRoutes = {
  getUrlBase: () => apiConfig.getUrlBase(),
  ListagemClientes: {
    ObterClientes: "/api/ListagemClientes/ObterClientes",
    ObterCliente: "/api/ListagemClientes/ObterCliente",
    PesquisarClientes: "/api/ListagemClientes/PesquisarClientes"
  },
  CadastroClientes: {
    CadastrarCliente: "/api/CadastroClientes/CadastrarCliente",
    AtualizarCliente: "/api/CadastroClientes/AtualizarCliente"
  }
};

ClienteRoutes.ListagemClientes.ObterClientes = ClienteRoutes.getUrlBase() + ClienteRoutes.ListagemClientes.ObterClientes;
ClienteRoutes.ListagemClientes.ObterCliente = ClienteRoutes.getUrlBase() + ClienteRoutes.ListagemClientes.ObterCliente;
ClienteRoutes.ListagemClientes.PesquisarClientes = ClienteRoutes.getUrlBase() + ClienteRoutes.ListagemClientes.PesquisarClientes;
ClienteRoutes.CadastroClientes.CadastrarCliente = ClienteRoutes.getUrlBase() + ClienteRoutes.CadastroClientes.CadastrarCliente;
ClienteRoutes.CadastroClientes.AtualizarCliente = ClienteRoutes.getUrlBase() + ClienteRoutes.CadastroClientes.AtualizarCliente;

export default ClienteRoutes;
