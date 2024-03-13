<template>
    <div v-show="exibirCadastroClientes">
        <div class="container mt-2">
            <div class="row">
                <div class="col-12 mb-2">
                    <h5>Área de Cadastro Principal</h5>
                    <hr>
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-2">
                    <label>Nome/Razão Social</label>
                    <input class="form-control" type="text" maxlength="150" v-model="nomeRazaoSocial">
                    <div class="text-danger" :class="{'visibility: hidden': !v$.nomeRazaoSocial.$errors}">{{ v$.nomeRazaoSocial.$errors[0]?.$message }}&nbsp;</div>
                </div>
                <div class="col-1 mt-4" data-bs-toggle="tooltip" data-bs-placement="top" title="Nome completo ou Razão Social do Cliente">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="col-2">
                    <label>E-mail</label>
                    <input class="form-control" type="text" v-model="email" maxlength="150">
                    <div class="text-danger" :class="{'visibility: hidden': !v$.email.$errors}">{{ v$.email.$errors[0]?.$message }}&nbsp;</div>

                </div>
                <div class="col-1 mt-4" data-bs-toggle="tooltip" data-bs-placement="top" title="E-mail do Cliente">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
            </div>
            <div class="row mt-1 justify-content-md-center">
                <div class="col-2">
                    <label>Telefone</label>
                    <input v-mask="'(##)#####-####'" class="form-control" type="text" v-model="telefone" maxlength="14">
                    <div class="text-danger" :class="{'visibility: hidden': !v$.telefone.$errors}">{{ v$.telefone.$errors[0]?.$message }}&nbsp;</div>
                </div>
                <div class="col-1 mt-4" data-bs-toggle="tooltip" data-bs-placement="top" title="Telefone do Cliente">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="col-2">
                    <label>Data de Cadastro</label>
                    <input class="form-control" type="text" v-model="dataCadastro" disabled>
                </div>
                <div class=col-1></div>
            </div>
            <div class="row justify-content-md-start">
                <div class="col-12">
                    <h5>Informações pessoais</h5> <hr>
                </div>
            </div>
            <div class="row mt-1 justify-content-md-center">
                <div class="col-2">
                    <label>Tipo de Pessoa</label>
                    <select class="form-select" v-model="tipoPessoa">
                        <option value="1">Pessoa Física</option>
                        <option value="2">Pessoa Jurídica</option>
                    </select>
                </div>
                <div class="col-1 mt-4" data-bs-toggle="tooltip" data-bs-placement="top" title="Selecione o tipo de Pessoa">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="col-2">
                    <label>CPF/CNPJ</label>
                    <input v-mask="['###.###.###-##', '##.###.###/####-##']" v-model="documento" class="form-control"/>
                    <div class="text-danger" :class="{'visibility: hidden': !v$.documento.$errors}">{{ v$.documento.$errors[0]?.$message }}&nbsp;</div>

                </div>
                <div class="col-1 mt-4" data-bs-toggle="tooltip" data-bs-placement="top" title="Insira o CPF ou o CNPJ do cliente">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
            </div>
            <div class="row mt-1 justify-content-md-center">
                <div class="col-2">
                    <label>Inscrição Estadual</label>
                    <input v-mask="'###.###.###-###'" class="form-control" type="text" maxlength="15" v-model="inscricaoEstadual" :disabled="isento">
                    <div class="text-danger" :class="{'visibility: hidden': !v$.inscricaoEstadual.$errors}">{{ v$.inscricaoEstadual.$errors[0]?.$message }}&nbsp;</div>

                </div>
                <div class="col-1 mt-4" data-bs-toggle="tooltip" data-bs-placement="top" title="Inscrição Estadual do Cliente, selecionar Isento caso assim for">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="col-2 mt-4">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="isento">
                        <label class="form-check-label" for="flexCheckDefault">
                            Isento
                        </label>
                    </div>
                </div>
                <div class="col-1 mt-1"></div>
            </div>
            <div class="row mt-1 justify-content-md-center" v-show="tipoPessoa == '1'">
                <div class="col-2">
                    <label>Gênero</label>
                    <select class="form-select" v-model="genero">
                        <option value="1">Masculino</option>
                        <option value="2">Feminino</option>
                        <option value="3">Outro</option>
                    </select>
                </div>
                <div class="col-1 mt-4" data-bs-toggle="tooltip" data-bs-placement="top" title="Selecione o gênero do cliente">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="col-2">
                    <label>Data de nascimento</label>
                    <input type="date" class="form-control" v-model="dataNascimento">
                    <div class="text-danger" :class="{'visibility: hidden': !v$.dataNascimento.$errors}">{{ v$.dataNascimento.$errors[0]?.$message }}&nbsp;</div>

                </div>
                <div class="col-1 mt-4" data-bs-toggle="tooltip" data-bs-placement="top" title="Data de nascimento do Cliente">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="bloqueado">
                        <label class="form-check-label" for="flexCheckDefault">
                            Cliente Bloqueado
                        </label>
                    </div>
                </div>
                <div class="col-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Bloqueio o acesso do Cliente na sua loja">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="col-2"></div>
            </div>
            <div class="row mt-1 justify-content-md-start">
                <div class="col-12">
                    <h5>Área de Senha de Acesso</h5> <hr>
                </div>
            </div>
            <div class="row mt-1 justify-content-md-center">
                <div class="col-2">
                    <label>Senha</label>
                    <input class="form-control" type="password" min="8" maxlength="15" v-model="senha">
                    <div class="text-danger" :class="{'visibility: hidden': !v$.senha.$errors}">{{ v$.senha.$errors[0]?.$message }}&nbsp;</div>
                </div>
                <div class="col-1 mt-4" data-bs-toggle="tooltip" data-bs-placement="top" title="Cadastre a senha de acesso do seu Cliente">
                    <i class="bi bi-info-circle-fill"></i>
                </div>
                <div class="col-2">
                    <label>Confirmação de Senha</label>
                    <input class="form-control" type="password" min="8" maxlength="15" v-model="confirmacaoSenha">
                    <div class="text-danger" :class="{'visibility: hidden': !v$.confirmacaoSenha.$errors}">{{ v$.confirmacaoSenha.$errors[0]?.$message }}&nbsp;</div>
                </div>
                <div class="col-1"></div>
            </div>
            <button @click="CadastrarCliente" class="btn btn-success" v-if="!ehEdicao">Cadastrar Cliente</button>
            <button v-else @click="AtualizarCliente" class="btn btn-success">Atualizar Cliente</button>
        </div>

    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, sameAs, minLength, maxLength, helpers, requiredIf } from '@vuelidate/validators'
export default {
    name: 'CadastroCliente',
    props: {
        exibirCadastroClientes: false,
        codigoCliente: 0
    },
    setup () {
        return {
            v$: useVuelidate()
        }
    },
    data(){
        return {
            nomeRazaoSocial: "",
            email: "",
            telefone: "",
            dataCadastro: new Date(),
            tipoPessoa: "1",
            documento: "",
            inscricaoEstadual: "",
            isento: false,
            genero: "1",
            dataNascimento: "",
            bloqueado: false,
            senha: "",
            confirmacaoSenha: "",
            ehEdicao: false,
            inscricaoEstadualBackup: ""
        }
    },
    validations() {
        return {
            nomeRazaoSocial: {
                required: helpers.withMessage("Este campo é obrigatório", required),
                maxLength: maxLength(150)
            },
            senha: {
                required: helpers.withMessage("Este campo é obrigatório", required),
                minLength: helpers.withMessage("A senha deve conter no mínimo 8 caracteres.", minLength(8)),
                maxLength: maxLength(15)
            },
            confirmacaoSenha: {
                senhasIguais: helpers.withMessage("As senhas não conferem", sameAs(this.senha))
            },
            email: {
                email: helpers.withMessage("E-mail inválido", email),
                required: helpers.withMessage("Este campo é obrigatório", required)
            },
            telefone: {
                required: helpers.withMessage("Este campo é obrigatório", required)
            },
            documento: {
                required: helpers.withMessage("este campo é obrigatório", required)
            },
            dataNascimento: {
                required: helpers.withMessage("este campo é obrigatório", requiredIf(function() {
                    return this.tipoPessoa == "1";
                }))
            },
            inscricaoEstadual: {
                required: helpers.withMessage("Este campo é obrigatório", requiredIf(function() {
                    return !this.isento;
                }))
            }
        }
    },
    methods: {
        async CadastrarCliente(){
            let formularioValido = await this.v$.$validate();
            if(formularioValido){
                await this.$store.dispatch('clientes/cadastrarCliente', this.obterCommandCliente())
                .then(response => {
                    if(response.sucesso)
                        this.$emit('clienteCadastradoAtualizado')
                    else{
                        this.exibirMensagemSwalToast(response.notificacao);
                    }
                })
                .catch(error => {
                    console.log(error.message);
                })
            }
        },
        async AtualizarCliente(){
            let formularioValido = await this.v$.$validate();
            if(formularioValido){
                await this.$store.dispatch('clientes/atualizarCliente', this.obterCommandClienteAtualizar())
                .then(response => {
                    if(response.sucesso)
                        this.$emit('clienteCadastradoAtualizado')
                    else{
                        this.exibirMensagemSwalToast(response.notificacao);
                    }
                })
                .catch(error => {
                    console.log(error.message);
                })
            }
        },
        obterCommandCliente(){
            return {
                Nome: this.nomeRazaoSocial,
                Email: this.email,
                Telefone: this.telefone,
                Senha: this.senha,
                Documento: this.documento,
                DataNascimento: this.tipoPessoa == "2" ? null : this.dataNascimento,
                InscricaoEstadual: this.inscricaoEstadual,
                Genero: this.tipoPessoa == "2" ? null : parseInt(this.genero),
                Bloqueado: this.bloqueado,
                Isento: this.isento,
                TipoPessoa: this.tipoPessoa
            }
        },
        obterCommandClienteAtualizar(){
            return {
                Codigo: this.codigoCliente,
                Nome: this.nomeRazaoSocial,
                Email: this.email,
                Telefone: this.telefone,
                Senha: this.senha,
                Documento: this.documento,
                DataNascimento: this.tipoPessoa == "2" ? null : this.dataNascimento,
                InscricaoEstadual: this.inscricaoEstadual,
                Genero: this.tipoPessoa == "2" ? null : parseInt(this.genero),
                Bloqueado: this.bloqueado,
                Isento: this.isento,
                TipoPessoa: this.tipoPessoa
            }
        },
        exibirMensagemSwalToast(mensagem){
            var self = this.$swal;
            const Toast = self.mixin({
                toast: true,
                position: "bottom-end",
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = self.stopTimer;
                    toast.onmouseleave = self.resumeTimer;
                }
                });
                Toast.fire({
                icon: "error",
                title: mensagem
            });
        },
        popularDadosCliente(cliente){
            let dataCadastro = cliente.dataCadastro.toString().split('T')[0].split('-');

            this.nomeRazaoSocial = cliente.nome;
            this.email = cliente.email;
            this.dataNascimento = cliente.dataNascimento?.toString()?.split('T')[0] ?? "";
            this.dataCadastro = `${dataCadastro[2]}/${dataCadastro[1]}/${dataCadastro[0]}`;
            this.senha = cliente.senha;
            this.telefone = cliente.telefone;
            this.tipoPessoa = cliente.tipoPessoa.toString();
            this.documento = cliente.documento;
            this.inscricaoEstadual = cliente.inscricaoEstadual;
            this.bloqueado = cliente.bloqueado;
            this.confirmacaoSenha = cliente.senha;
        },
        limparDadosCliente(){
            this.dataCadastro = this.dataCadastro = new Date(Date.now()).toLocaleDateString();
            this.nomeRazaoSocial = "";
            this.email = "";
            this.dataNascimento = "";
            this.senha = "";
            this.telefone = "";
            this.tipoPessoa = "1";
            this.documento = "";
            this.inscricaoEstadual = "";
            this.inscricaoEstadualBackup = "";
            this.bloqueado = "";
            this.confirmacaoSenha = "";
        }
    },
    watch: {
        async exibirCadastroClientes() {
            var self = this;
            if(this.codigoCliente > 0){
                await this.$store.dispatch('clientes/obterCliente', self.codigoCliente)
                .then(response => {
                    self.popularDadosCliente(response);
                    self.ehEdicao = true;
                })
                .catch(error => {
                    console.log(error);
                })
            }
            else
                this.limparDadosCliente();
        },
        async isento(){
            if(this.isento){
                this.inscricaoEstadualBackup = this.inscricaoEstadual;
                this.inscricaoEstadual = "";
            }
            else
                this.inscricaoEstadual = this.inscricaoEstadualBackup;
        }
    }
}
</script>

<style>
</style>