<template>
  <div class="page">
    <div class="clients-list">
      <div class="header-container">
        <h1>Clientes</h1>
        <router-link to="register-client">
          <el-button type="primary" icon="el-icon-plus">Adicionar Cliente</el-button>
        </router-link>
      </div>
      <el-table
        :data="clients"
        stripe
        style="width: 100%">
        <el-table-column
          prop="name"
          label="Nome"
          width="170">
        </el-table-column>
        <el-table-column
          prop="email"
          label="E-mail"
          width="170">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="Telefone"
          width="170">
        </el-table-column>
        <el-table-column
          prop="age"
          label="Idade"
          width="170">
        </el-table-column>
        <el-table-column
          prop="cpf"
          label="CPF"
          width="170">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  const axios = require('axios').default;

  export default {
    name: 'ClientsList',
    data() {
      return {
        clients: [],
      }
    },
    created() {
      axios.get('http://localhost:3000/clients') 
      .then(response => {
        this.clients = response.data;
      })
      .catch(err => {
        console.error(err);
      })
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

  .clients-list {
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

</style>
