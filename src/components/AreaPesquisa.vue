<template>
    <div class="container" v-show="exibirAreaPesquisa">
      <div class="row mb-2 mt-3 row justify-content-md-center">
        <div class="col-3">
          <input type="search" placeholder="Nome ou Razão social do Cliente" class="form-control" v-model="nomeRazaoSocial" id="NomeRazaoSocial">
        </div>
        <div class="col-3">
          <input type="search" placeholder="Email do Cliente" class="form-control" v-model="email" id="Email">
        </div>
        <div class="col-2">
          <input type="search" placeholder="Telefone do Cliente" class="form-control" v-model="telefone" id="Telefone">
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-3">
          <input v-model="date" placeholder="Seleciona uma data ou período" class="form-control" type="text" onfocus="(this.type='date')" onblur="(this.value == '' ? this.type='text' : this.type='date')"/>
        </div>
        <div class="col-3">
          <select class="form-select" v-model="clienteBloqueado">
              <option disabled value="">Cliente bloqueado</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
          </select>
        </div>
        <div class="col-2">
          <button class="btn btn-danger" @click="limparFiltros">Limpar Filtros</button>
        </div>
      </div>
      <div class="row justify-content-center mt-2">
        <div class="col-8">
          <button class="btn btn-primary" @click="pesquisarClientes">Aplicar Filtros</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AreaPesquisa',
  props: {
    exibirAreaPesquisa: false,
  },
  components: {
  },
  data(){
    return{
      date: '',
      nomeRazaoSocial: '',
      email: '',
      telefone: '',
      clienteBloqueado: '',
    }
  },
  mounted(){
    var self = this;
    document.getElementById("NomeRazaoSocial").addEventListener("search", function() {
      self.pesquisarClientes();
    });
    document.getElementById("Email").addEventListener("search", function() {
      self.pesquisarClientes();
    });
    document.getElementById("Telefone").addEventListener("search", function() {
      self.pesquisarClientes();
    });
  },
  methods:{
    limparFiltros(){
      this.nomeRazaoSocial = '';
      this.email = '';
      this.telefone = '';
      this.clienteBloqueado = '';
      this.date = ''
    },
    pesquisarClientes(){
      this.$store.dispatch('clientes/pesquisarClientes', this.obterCommandPesquisa());
      this.$emit("exibirOcultarAreaPesquisa");
    },
    obterCommandPesquisa(){
      return {
        NomeRazaoSocial: this.nomeRazaoSocial,
        Email: this.email,
        Telefone: this.telefone,
        ClienteBloqueado: this.clienteBloqueado == "Sim" ? true : this.clienteBloqueado == "Não" ? false : null,
        DataCadastro: this.date == "" ? null : this.date
      }
    }
  },
  computed: {
    formato() {
      if(this.date)
      {
        const day = this.date.getDate().toString().padStart(2, '0');
        const month = (this.date.getMonth() + 1).toString().padStart(2, '0');
        const year = this.date.getFullYear();

        return `${day}/${month}/${year}`;
      }
    }
  }
}
</script>
