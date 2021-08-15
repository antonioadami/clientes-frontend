<template>
  <div class="page">
    <div class="card-container">
      <div class="header-container">
        <h1>Cadastrar Cliente</h1>
      </div>

      <div class="form-container">
          <el-form ref="form" :model="form" :rules="rules" label-width="auto" label-position="right">
            <el-form-item label="Nome" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="E-mail" prop="email">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="Senha" prop="password">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="CPF" prop="cpf">
                <el-input v-model="form.cpf" v-mask="'###.###.###-##'"></el-input>
            </el-form-item>
            <el-form-item label="Nascimento" prop="birth">
                <el-date-picker type="date" placeholder="Selecione uma data" v-model="form.birth" style="width: 100%;" format="DD/MM/YYYY"></el-date-picker>
            </el-form-item>
            <el-form-item label="Telefone" prop="phone">
                <el-input v-model="form.phone" v-mask="['(##) ####-####', '(##) #####-####']"></el-input>
            </el-form-item>
            <el-form-item>
                <router-link to="/">
                    <el-button>Cancelar</el-button>
                </router-link>
                <el-button type="primary" @click="onSubmit">Concluir</el-button>
            </el-form-item>
            </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  const axios = require('axios').default;

  export default {
    name: 'RegisterClient',
    data() {
      return {
        form: {
            name: '',
            email: '',
            birth: null,
            cpf: '',
            password: '',
            phone: '',
        },
        rules: {
          name: [
            { required: true, message: 'Você deve inserir o nome', trigger: 'blur' },
          ],
          email: [
            { type: "email", required: true, message: 'Você deve inserir um e-mail válido', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Você deve inserir a senha', trigger: 'blur' }
          ],
          cpf: [
            { required: true, message: 'Você deve inserir o CPF', trigger: 'blur' }
          ],
          birth: [
            { type: 'date', required: true, message: 'Você deve selecionar a data', trigger: 'change' }
          ],
          phone: [
            { required: true, message: 'Você deve inserir o telefone', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
        onSubmit() {

            this.$refs.form.validate((isValid) => {
                if(!isValid) {
                    this.$message({
                        showClose: true,
                        message:'Há campos invalidos',
                        type: 'error'
                    });
                } else {
                    axios.post('http://localhost:3000/clients', this.form) 
                    .then(() => {
                        this.$message({
                            showClose: true,
                            message: 'Cliente criado com sucesso.',
                            type: 'success'
                        });
                        this.$router.push('/')
                    })
                    .catch(err => {
                        console.error(err);
                        this.$message({
                            showClose: true,
                            message:'Ocorreu um erro ao criar o cliente',
                            type: 'error'
                        });
                    });
                }
            })
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .page {
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .card-container {
    background-color: white;
    border: 1px solid #aaaaaa;
    border-radius: 5px;

    padding: 2rem;

    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1rem;
  }

  h1 {
    font-size: 32px;
    font-weight: 600;
  }

  a {
      margin-right: 1rem;
  }

</style>
