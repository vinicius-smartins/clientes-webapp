<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TabelaClientes',
  props: {
  },
  data(){
    return {
      headers: [
        {text: "Nome/Razão Social", value: "nome"},
        {text: "E-mail", value: "email"},
        {text: "Telefone", value: "telefone"},
        {text: "Data de cadastro", value: "dataCadastro"},
        {text: "Bloqueado", value: "bloqueado"},
        {text: "Acoes", value: "acoes"}
      ],
      itensSelecionados: [],
      obtendoClientes: false
    }
  },
  mounted(){
    this.obterClientes();
  },
  methods:{
    async obterClientes(){
      var self = this;
      self.obtendoClientes = true;
      await this.$store.dispatch('clientes/obterClientes')
      .then(()=>{
        self.obtendoClientes = false;
      })
    },
    showRow(item){
        this.selecionarItem(item)
    },
    selecionarItem(item){
        if(!item.isSelected)
            this.itensSelecionados.push(this.clientes[item.indexInCurrentPage-1])
        else
            this.itensSelecionados.splice(this.clientes[item.indexInCurrentPage-1], 1)
        item.isSelected = !item.isSelected;
    },
    editarCliente(item){
      this.$emit('AtualizarCliente', item.codigo);
    }
  },
  computed:{
        ...mapGetters({
            clientes: 'clientes/clientes',
        })
    },
}
</script>

<template>
 <div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-auto">
      <EasyDataTable
        v-model:items-selected="itensSelecionados"
        :headers="headers"
        :items="clientes"
        :rows-per-page="20"
        :rows-items="[20]"
        @click-row="showRow"
        rows-per-page-message="Registros por página"
        rows-of-page-separator-message="de"
        :loading="this.obtendoClientes"
        empty-message="Não há clientes cadastrados"
      >
      <template #item-acoes="item">
        <div class="operation-wrapper">
          <img
            src="../assets/edit.png"
            class="operation-icon"
            @click="editarCliente(item)"
          />
        </div>
      </template>
      <template #item-bloqueado="item">
        <input type="checkbox" readonly class="form-check" v-model="item.bloqueado" onclick="return false">
      </template>
    </EasyDataTable>
    </div>
  </div>
 </div>
</template>

<style>
.operation-wrapper .operation-icon {
  width: 20px;
  cursor: pointer;
}
</style>