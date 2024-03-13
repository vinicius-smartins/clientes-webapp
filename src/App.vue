<script>
import TabelaClientes from './components/TabelaClientes.vue'
import AreaPesquisa from './components/AreaPesquisa.vue';
import CadastroCliente from './components/CadastroCliente.vue';

export default {
  name: 'App',
  props: {
  },
  components: {
    TabelaClientes,
    AreaPesquisa,
    CadastroCliente
  },
  data(){
    return {
      exibirAreaPesquisa: false,
      exibirCadastroClientes: false,
      codigoCliente: 0
    }
  },
  methods:{
    exibirAreaDePesquisa(){
      this.exibirAreaPesquisa = !this.exibirAreaPesquisa;
    },
    exibirCadastroDeClientes(){
      this.exibirCadastroClientes = true;
    },
    ocultarCadastroDeClientes(){
      this.exibirCadastroClientes = false;
      this.codigoCliente = 0;
      this.$store.dispatch('clientes/obterClientes');
    },
    editarCliente(codCliente){
      this.codigoCliente = codCliente;
      this.exibirCadastroDeClientes();
    }
  }
}

</script>

<template>
  <header class="header">
      <h3 class="mt-3">Consulte os seus Clientes cadastrados na
        sua Loja ou realize o cadastro de novos Clientes</h3>
        <div>
          <button v-if="!exibirCadastroClientes" type="button" class="btn btn-primary" @click="exibirAreaDePesquisa()">Filtrar</button>
          <button v-if="exibirCadastroClientes" type="button" class="btn btn-warning" @click="ocultarCadastroDeClientes()">Voltar</button>
          <button type="button" class="btn btn-success mx-3" @click="exibirCadastroDeClientes()" v-if="!exibirCadastroClientes">Adicionar Cliente</button>
        </div>
  </header>
  <main>
    <AreaPesquisa :exibirAreaPesquisa="exibirAreaPesquisa" @exibirOcultarAreaPesquisa="exibirAreaDePesquisa"/>
    <CadastroCliente :exibirCadastroClientes="exibirCadastroClientes" @clienteCadastradoAtualizado="ocultarCadastroDeClientes" :codigoCliente="codigoCliente"/>
    <div v-show="!exibirCadastroClientes">
      <TabelaClientes @atualizarCliente="editarCliente"/>
    </div>
  </main>
</template>


<style>
.header {
  display: block;
  text-align: center;
  margin: auto;
}

button {
  display: inline-block !important;
  vertical-align: middle;

}

</style>
