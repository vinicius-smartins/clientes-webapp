import apiClient from '@/services/apiClient'
import ClienteRoutes from '@/router/ClienteRoutes'

export default {
    async ObterClientes() {
        return await apiClient.get(ClienteRoutes.ListagemClientes.ObterClientes)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw new Error(error.response.data.notificacoes);
        })
    },
    async PesquisarClientes(commandPesquisa) {
        return await apiClient.post(ClienteRoutes.ListagemClientes.PesquisarClientes, commandPesquisa)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw new Error(error.response.data.notificacoes);
        })
    },
    async CadastrarCliente(commandCliente) {
        return await apiClient.post(ClienteRoutes.CadastroClientes.CadastrarCliente, commandCliente)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response.data;
        })
    },
    async AtualizarCliente(commandCliente) {
        return await apiClient.patch(ClienteRoutes.CadastroClientes.AtualizarCliente, commandCliente)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response.data;
        })
    },
    async ObterCliente(codigoCliente) {
        return await apiClient.get(ClienteRoutes.ListagemClientes.ObterCliente+"/?codigoCliente="+codigoCliente)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response.data;
        })
    }
}