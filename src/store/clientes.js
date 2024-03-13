import Cliente from "@/api/Cliente";

const state = () => ({
    clientes: [],
    notificacoes: []
})

const getters = {
    clientes: (state) => {
        return state.clientes;
    },
    notificacoes: (state) => {
        return state.notificacoes;
    },
}

const actions = {
    async obterClientes ({ commit }) {
        try
        {
            const clientes = await Cliente.ObterClientes();

            commit('setClientes', clientes);
        }
        catch (error) {
            commit('setNotificacoes', error.message);
        }
    },
    async pesquisarClientes ({commit}, commandPesquisa){
        try{
            const clientes = await Cliente.PesquisarClientes(commandPesquisa);
            commit('setClientes', clientes);
        }
        catch(error) {
            commit('setNotificacoes', error.message)
        }
    },
    async cadastrarCliente({},commandCliente){
        try{
            return await Cliente.CadastrarCliente(commandCliente);
        }
        catch(error){
            console.log(error)
            return error;
        }
    },
    async atualizarCliente({}, commandCliente){
        try{
            return await Cliente.AtualizarCliente(commandCliente);
        }
        catch(error){
            console.log(error);
            return error;
        }
    },
    async obterCliente({},codigoCliente){
        try{
            return await Cliente.ObterCliente(codigoCliente);
        }
        catch(error){
            console.log(error);
            return error;
        }
    }
}

const mutations = {
    setClientes (state, clientes) {
        clientes.forEach((cliente) => {
            cliente.dataNascimento = new Date(cliente.dataNascimento);
            cliente.dataNascimento = cliente.dataNascimento.toLocaleDateString();
            cliente.dataCadastro = new Date(cliente.dataCadastro);
            cliente.dataCadastro = cliente.dataCadastro.toLocaleDateString();
            cliente.bloqueado = cliente.bloqueado
        });
        state.clientes = clientes;
    },
    setNotificacoes(state, notificacoes){
        state.notificacoes = notificacoes;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}