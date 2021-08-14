<template>
  <div class="page">
    <div class="clients-list">
      <h1>Clientes</h1>
      <ul>
        <li v-for="client in clients" :key="client.cpf">
          <div class="client-container">
            <div class="client-data-container">
              <h6>Nome</h6>
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
              <h6>CPF</h6>
              <p>{{client.cpf}}</p>
            </div>
          </div>
        </li>
      </ul>
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

  h1 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    background-color: white;

    border: 1px solid #aaaaaa;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 2rem 2rem 0;

    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    margin-bottom: 2rem;
  }

  h6 {
    margin: 0 0 1rem 0;
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-size: 14px;
  }
  
  .client-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .client-data-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 170px;
  }

  .client-data-container:not(:nth-last-child(1)) {
    margin-right: 1rem;

  }
</style>
