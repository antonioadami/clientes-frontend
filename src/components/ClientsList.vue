<template>
  <div class="page">
    <div class="clients-list">
      <div class="header-container">
        <h1>Clientes</h1>
        <el-button type="primary" icon="el-icon-plus">Adicionar Cliente</el-button>
      </div>
      <table>
        <th>
          <td>Nome</td>
          <td>E-mail</td>
          <td>Telefone</td>
          <td>Idade</td>
          <td>CPF</td>
          <td id="delete-client-container">Ações</td>
        </th>
        <tr class="client-container" v-for="client in clients" :key="client.cpf">
          <td class="client-data-container">{{client.name}}</td>
          <td class="client-data-container">{{client.email}}</td>
          <td class="client-data-container">{{client.phone}}</td>
          <td class="client-data-container">{{client.age}}</td>
          <td class="client-data-container">{{client.cpf}}</td>
          <td class="client-data-container" id="delete-client-container">
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </td>
        </tr>
      </table>
        <!-- <li v-for="client in clients" :key="client.cpf">
          <div class="client-container">
            <div class="client-data-container">
              <p>{{client.name}}</p>
            </div>
            <div class="client-data-container">
              <h6>E-mail</h6>
              <p>{{client.email}}</p>
            </div>
            <div class="client-data-container">
              <h6>Telefone</h6>
              <p>{{client.phone}}</p>
            </div>
            <div class="client-data-container">
              <h6>Idade</h6>
              <p>{{client.age}}</p>
            </div>
            <div class="client-data-container">
              <h6>CPF</h6>
              <p>{{client.cpf}}</p>
            </div>
            <div class="client-data-container" id="delete-client-container">
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </div>
          </div>
        </li> -->
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

  table {
    list-style-type: none;
    border: 1px solid #bbbbbb;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  }

  tr, th {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    width: 100%;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  .client-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  td {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 170px;
    padding: 1rem;
    font-size: 14px;
  }

  th td {
    font-size: 16px;
    font-weight: 600;
  }

  #delete-client-container {
    align-items: flex-end;
    width: auto;
  }

</style>
